import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { CandidatesService } from "src/app/services/candidates/candidates.service";
import { candidatesActions } from "..";

@Injectable()
export class CandidatesEffect {
    constructor(private actions$: Actions, private candidatesService: CandidatesService) { }

    getCandidatesList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(candidatesActions.getCandidatesList),
            mergeMap(() =>
                this.candidatesService.getCandidates().pipe(
                    map((candidates) =>
                        candidatesActions.getCandidatesListSuccess({ candidates })
                    ),
                    catchError((errors) => of(candidatesActions.getCandidatesListError({ errors })))
                )
            )
        )
    )
}