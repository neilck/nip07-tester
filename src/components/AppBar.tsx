// src/components/DisplayState.tsx
"use client";

import React from "react";
import { useLoginContext } from "@/context/LoginContext";
import { ActionType } from "@/context/actionTypes";

import AuthButton from "./AuthButton";

const AppBar: React.FC = () => {
  const { state, dispatch } = useLoginContext();

  const handleLogIn = async () => {
    try {
      const publicKey = await window.nostr.getPublicKey();
      if (publicKey) {
        dispatch({
          type: ActionType.SET_CURRENT,
          payload: { pubkey: publicKey },
        });
      }
    } catch (error) {
      console.error("Failed to get public key:", error);
    }
  };

  const handleSignOut = () => {
    dispatch({ type: ActionType.SET_CURRENT, payload: null });
  };

  return (
    <div className="border-2 p-2">
      <div className="flex flex-row gap-8">
        <div>
          <h3>Current Account</h3>
          {state.current ? (
            <div className="max-w-[280px]">
              <pre className="break-words whitespace-pre-wrap text-sm">
                {state.current.pubkey}
              </pre>
            </div>
          ) : (
            <p>No current account.</p>
          )}
        </div>
        <div>
          <h3>All Accounts</h3>
          {state.accounts.length > 0 ? (
            <ul>
              {state.accounts.map((account, index) => (
                <li key={index}>Pubkey: {account.pubkey}</li>
              ))}
            </ul>
          ) : (
            <p>No accounts available.</p>
          )}
        </div>
        <AuthButton
          account={state.current}
          onLogIn={handleLogIn}
          onSignOut={handleSignOut}
        />
      </div>
      <div className="text-sm mt-1">
        {state.hasAccountChanged
          ? "listening for accountChanged"
          : "accountChanged event not supported by extension"}
      </div>
    </div>
  );
};

export default AppBar;
