import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../state/core.state";
import * as candidateReducer from "./candidates.reducers";

export const reducers: ActionReducerMap<AppState> = {
    candidates: candidateReducer.reducer
}

export const metaReducers: MetaReducer<AppState>[] = [];
