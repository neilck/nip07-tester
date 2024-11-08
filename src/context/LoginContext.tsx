// LoginContext.tsx
"use client";

import React, { createContext, useEffect, useReducer, useContext } from "react";
import { reducer, initialState } from "./reducer";
import { ContextProps } from "./contextTypes";
import { ActionType } from "./actionTypes";
import { Account } from "@/types/common";

const LoginContext = createContext<ContextProps | undefined>(undefined);

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onAccountChanged = async () => {
    const pubkey = await window.nostr?.getPublicKey();
    dispatch({ type: ActionType.SET_CURRENT, payload: { pubkey } as Account });
    console.log("onAccountChanged");
  };

  useEffect(() => {
    // Check if "accountChanged" event is supported by window.nostr
    const hasAccountChanged =
      window.nostr && typeof window.nostr.on === "function";
    dispatch({
      type: ActionType.SET_HAS_ACCOUNT_CHANGED,
      payload: hasAccountChanged,
    });

    if (hasAccountChanged) {
      try {
        // Listen for "accountChanged" event
        window.nostr.on("accountChanged", onAccountChanged);

        // Clean up event listener on component unmount
        return () => {
          if (window.nostr.off) {
            window.nostr.off("accountChanged", onAccountChanged);
          }
        };
      } catch (error) {
        console.error("Error adding 'accountChanged' listener:", error);
      }
    } else {
      console.warn(
        "accountChanged event listener not supported on window.nostr"
      );
    }
  }, []);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = (): ContextProps => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContext must be used within a LoginProvider");
  }
  return context;
};
