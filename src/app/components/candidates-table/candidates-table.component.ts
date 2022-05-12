import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidates';

@Component({
  selector: 'app-candidates-table',
  templateUrl: './candidates-table.component.html',
  styleUrls: ['./candidates-table.component.scss']
})
export class CandidatesTableComponent implements OnInit {
  @Input() candidatesList: Candidate[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  sort(criteria: string): void {
    const candidates = [...this.candidatesList];
    if (criteria === 'ASC') {
      this.candidatesList = candidates.sort((a, b) => Date.parse(a.last_comms.date_time) - Date.parse(b.last_comms.date_time));
      return;
    }
    this.candidatesList = candidates.sort((a, b) => Date.parse(b.last_comms.date_time) - Date.parse(a.last_comms.date_time));
  }

}
