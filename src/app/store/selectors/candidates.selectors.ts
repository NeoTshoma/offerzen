import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CandidatesState } from "../state/candidates.state";

export const candidateSelector = createFeatureSelector<CandidatesState>(
    'candidates'
);

export const getCandidatesLoading = createSelector(
    candidateSelector,
    (state: CandidatesState) => state.candidatesListLoading
);

export const getCandidatesError = createSelector(
    candidateSelector,
    (state: CandidatesState) => state.candidatesListError
);

export const getCandidatesErrors = createSelector(
    candidateSelector,
    (state: CandidatesState) => state.candidatesListErrors
);

export const getCandidates = createSelector(
    candidateSelector,
    (state: CandidatesState) => state.candidates
);
