import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CandidatesState, candidatesInitialState } from 'src/app/store/state/candidates.state';

import { SearchAndFilterComponent } from './search-and-filter.component';

describe('SearchAndFilterComponent', () => {
  let component: SearchAndFilterComponent;
  let fixture: ComponentFixture<SearchAndFilterComponent>;
  let mockStore: MockStore<{
    candidatesListLoading: false,
    candidatesListError: false,
    candidatesListErrors: null,
    candidates: []
  }>;

  let initialState: CandidatesState = {
    ...candidatesInitialState
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndFilterComponent ],
      providers: [
        provideMockStore({
          initialState,
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    
    fixture = TestBed.createComponent(SearchAndFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search for a candidate using the candidate name and emit the value returned', () => {
    spyOn(component.onCandidateSearch, 'emit');
    component.candidatesList = [
      {
        "image": "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Ansurie.png",
        "candidate": "Ansurie Govendar",
        "role": "Java developer",
        "salary": 40000,
        "last_comms": {
          "unread": true,
          "description": "Gys replied",
          "date_time": "2020-10-04 10:09:51"
        },
        "sent_by": "Ethan Marrs",
        "status": "Extending offer",
        "archived": false
      },
      {
        "image": "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Richard.png",
        "candidate": "Richard Mitman",
        "role": "",
        "salary": 35000,
        "last_comms": {
          "unread": false,
          "description": "You replied",
          "date_time": "2020-10-03 14:09:51"
        },
        "sent_by": "Pieter van der Merwe",
        "status": "Technical assesment",
        "archived": true
      },
    ];

    component.candidateSearch({target: {value: 'Ansurie'}});

    expect(component.candidateSearch.length).toEqual(1);
    expect(component.onCandidateSearch.emit).toHaveBeenCalled();
  })
});


