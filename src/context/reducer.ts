// reducer.ts
import { Action, ActionType } from "./actionTypes";
import { State } from "./contextTypes";
import { getEmptyState } from "./contextTypes";

export const initialState: State = getEmptyState();

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.SET_CURRENT:
      return { ...state, current: action.payload };

    case ActionType.SET_ACCOUNTS:
      return { ...state, accounts: action.payload };

    case ActionType.SET_HAS_ACCOUNT_CHANGED:
      return { ...state, hasAccountChanged: action.payload };

    default:
      return state;
  }
}
