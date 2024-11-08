// src/components/DisplayState.tsx
"use client";

import React from "react";
import { useLoginContext } from "@/context/LoginContext";
import AuthButton from "./AuthButton";

const AppBar: React.FC = () => {
  const { state, isAvailable, login, signOut } = useLoginContext();

  const handleLogIn = async () => {
    try {
      const result = await login();
      if (!result) {
        console.error("Extension refused to return public key.");
      }
    } catch (error) {
      console.error("Failed to get public key:", error);
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="border-2 p-2">
      <div className="flex flex-row gap-8">
        <div className="w-[280px]">
          <h3>Current Account</h3>
          {state.current ? (
            <pre className="break-words whitespace-pre-wrap text-sm">
              {state.current.pubkey}
            </pre>
          ) : (
            <p>No current account.</p>
          )}
        </div>

        <AuthButton
          disabled={!isAvailable}
          account={state.current}
          onLogIn={handleLogIn}
          onSignOut={handleSignOut}
        />
        <div className="flex flex-col">
          <div className="text-sm mt-1">
            {isAvailable ? "extension found" : "extension not found"}
          </div>
          <div className="text-sm mt-1">
            {state.hasAccountChanged
              ? "listening for accountChanged"
              : "accountChanged event not supported by extension"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
