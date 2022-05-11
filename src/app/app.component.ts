import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Candidate } from './models/candidates';
import { candidatesActions } from './store';
import { getCandidates } from './store/selectors/candidates.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  candidates: Candidate[] = [];

  unsubscribe = new Subject();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(candidatesActions.getCandidatesList());

    this.store.select(getCandidates).pipe(
      takeUntil(this.unsubscribe)
    ).subscribe((res) => {
      this.candidates = res;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next({});
    this.unsubscribe.complete();
  }
}
