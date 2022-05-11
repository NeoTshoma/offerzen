import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Candidate } from 'src/app/models/candidates';
import { getCandidates } from 'src/app/store/selectors/candidates.selectors';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.scss']
})
export class SearchAndFilterComponent implements OnInit, OnDestroy {
  candidatesList: Candidate[] = [];
  @Output() onCandidateSearch = new EventEmitter<Candidate[]>();
  @Output() onToggleArchived = new EventEmitter<Candidate[]>();

  unsubscribe = new Subject();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(getCandidates).pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(c => {
      this.candidatesList = c;
    });
  }

  candidateSearch(event: any): void {
    const candidates = this.candidatesList.filter(c => c.candidate.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));

    this.onCandidateSearch.emit(candidates);
  }

  toggleArchivedCandidates(event: any): void {
    if (event.target.checked) {
      const candidates = this.candidatesList.filter((c) => c.archived == true);
      this.onToggleArchived.emit(candidates);
      return;
    }
    
    this.onToggleArchived.emit(this.candidatesList);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next({});
    this.unsubscribe.complete();
  }
}
