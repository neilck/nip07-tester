// contextTypes.ts
import { Account } from "@/types/common";

export interface State {
  current: Account | null;
  accounts: Account[];
  hasAccountChanged: boolean;
}

export interface ContextProps {
  state: State;
  isAvailable: boolean;
  login: () => Promise<boolean>;
  signOut: () => void;
  setAccounts: (accounts: Account[]) => void;
}

export function getEmptyState() {
  const accounts: Account[] = [];
  return {
    current: null,
    accounts: accounts,
    hasAccountChanged: false,
  } as State;
}
