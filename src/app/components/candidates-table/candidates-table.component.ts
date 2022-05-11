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

}
