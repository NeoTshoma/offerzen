import { createAction, props } from "@ngrx/store";
import { Candidate } from "src/app/models/candidates";

export const getCandidatesList = createAction(
    '[Candidates] Get Candidates List'
);

export const getCandidatesListSuccess = createAction(
    '[Candidates] Get Candidates List Success',
    props<{ candidates: Candidate[] }>()
);

export const getCandidatesListError = createAction(
    '[Candidates] Get Candidates List Error',
    props<{ errors: ErrorEvent }>()
);
