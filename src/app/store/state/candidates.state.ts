import { Candidate } from "src/app/models/candidates";

export interface CandidatesState {
    candidatesListLoading: boolean;
    candidatesListError: boolean;
    candidatesListErrors: ErrorEvent | null;
    candidates: Candidate[] | [];
}

export const candidatesInitialState: CandidatesState = {
    candidatesListLoading: false,
    candidatesListError: false,
    candidatesListErrors: null,
    candidates: []
}