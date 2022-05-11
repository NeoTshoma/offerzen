import { Action, createReducer, on } from "@ngrx/store";
import { candidatesActions } from "..";
import { candidatesInitialState, CandidatesState } from "../state/candidates.state";

const candidatesReducer = createReducer(
    candidatesInitialState,
    on(candidatesActions.getCandidatesList, (state) => {
        return {
            ...state,
            candidatesListLoading: true,
            candidatesListError: false,
            candidates: [],
            candidatesListErrors: null
        }
    }),
    on(candidatesActions.getCandidatesListSuccess, (state, { candidates }) => {
        return {
            ...state,
            candidatesListLoading: false,
            candidatesListError: false,
            candidates,
            candidatesListErrors: null
        }
    }),
    on(candidatesActions.getCandidatesListError, (state, { errors }) => {
        return {
            ...state,
            candidatesListLoading: false,
            candidatesListError: true,
            candidates: [],
            candidatesListErrors: errors
        }
    }),
);

export function reducer(state: CandidatesState | undefined, action: Action): any {
    return candidatesReducer(state, action);
}