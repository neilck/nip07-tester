// actionTypes.ts
import { Account } from "@/types/common";

export enum ActionType {
  SET_CURRENT = "SET_CURRENT",
  SET_ACCOUNTS = "SET_ACCOUNTS",
  SET_HAS_ACCOUNT_CHANGED = "SET_HAS_ACCOUNT_CHANGED",
}

export interface SetCurrent {
  type: ActionType.SET_CURRENT;
  payload: Account | null;
}

export interface SetAccounts {
  type: ActionType.SET_ACCOUNTS;
  payload: Account[];
}

export interface SetHasAccountChanged {
  type: ActionType.SET_HAS_ACCOUNT_CHANGED;
  payload: boolean;
}

export type Action = SetCurrent | SetAccounts | SetHasAccountChanged;
