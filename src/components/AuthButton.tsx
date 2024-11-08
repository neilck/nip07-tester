import React from "react";
import { Account } from "@/types/common";

type AuthButtonProps = {
  account: Account | null;
  onLogIn: () => Promise<void>;
  onSignOut: () => void;
};

const AuthButton: React.FC<AuthButtonProps> = ({
  account,
  onLogIn,
  onSignOut,
}) => {
  return (
    <div className="flex items-center space-x-2">
      {account ? (
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={onSignOut}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onLogIn}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default AuthButton;
