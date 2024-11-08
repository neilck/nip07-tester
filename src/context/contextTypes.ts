// contextTypes.ts
import { Action } from "./actionTypes";
import { Account } from "@/types/common";

export interface State {
  current: Account | null;
  accounts: Account[];
  hasAccountChanged: boolean;
}

export interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export function getEmptyState() {
  const accounts: Account[] = [];
  return {
    current: null,
    accounts: accounts,
    hasAccountChanged: false,
  } as State;
}
