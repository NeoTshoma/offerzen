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
    component.candidatesList = [{
      "image": "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Andile.png",
      "candidate": "Andile Wala",
      "role": "Front-end developer",
      "salary": 32000,
      "last_comms": {
        "unread": true,
        "description": "Jaco replied",
        "date_time": "2020-10-04 12:09:51"
      },
      "sent_by": "Ethan Marrs",
      "status": "Interviewing",
      "archived": false
    },
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
    {
      "image": "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Nkosana.png",
      "candidate": "Nkosana Ndebele",
      "role": "Ruby engineer",
      "salary": 45000,
      "last_comms": {
        "unread": false,
        "description": "Lara replied",
        "date_time": "2019-10-09 12:09:51"
      },
      "sent_by": "Pieter van der Merwe",
      "status": "Declined",
      "archived": false
    },
    {
      "image": "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Natasha.png",
      "candidate": "Natasha Peters",
      "role": "UI designer",
      "salary": 30000,
      "last_comms": {
        "unread": false,
        "description": "You sent request",
        "date_time": "2021-04-12 10:09:51"
      },
      "sent_by": "Ethan Marrs",
      "status": "Pending",
      "archived": false
    },
    {
      "image": "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Wynand.png",
      "candidate": "Wynand Du Plessis",
      "role": "React engineer",
      "salary": 42000,
      "last_comms": {
        "unread": false,
        "description": "Laura replied",
        "date_time": "2021-04-10 10:09:51"
      },
      "sent_by": "Ethan Marrs",
      "status": "Declined",
      "archived": true
    },
    {
      "image": "https://s3-eu-west-1.amazonaws.com/images.offerzen.com/personas/Persona__Brian.png",
      "candidate": "Brian Mkhize",
      "role": "JavaScript engineer",
      "salary": 38000,
      "last_comms": {
        "unread": false,
        "description": "You replied",
        "date_time": "2021-04-10 09:12:38"
      },
      "sent_by": "Pieter van der Merwe",
      "status": "Technical assessment",
      "archived": true
    }];
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
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
  });

  it('should get all archived values if the chechbox is checked', () => {
    spyOn(component, 'toggleAndEmit');

    component.toggleArchivedCandidates({target: {checked: true}});

    expect(component.toggleAndEmit).toHaveBeenCalledWith(true);
  });

  it('should return all unarchived values list if the checkbox is not checked', () => {
    spyOn(component, 'toggleAndEmit');
    component.toggleArchivedCandidates({target: {checked: false}});
  
    expect(component.toggleAndEmit).toHaveBeenCalledWith(false);
  });

  it('should filter by the specified value and emit a list of candidates', () => {
    spyOn(component.onToggleArchived, 'emit');

    component.toggleAndEmit(true);
    expect(component.onToggleArchived.emit).toHaveBeenCalled();
  })
});


