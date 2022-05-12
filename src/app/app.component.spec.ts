import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { candidatesInitialState, CandidatesState } from './store/state/candidates.state';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { getCandidates } from './store/selectors/candidates.selectors';
import { Store } from '@ngrx/store';
import { Candidate } from './models/candidates';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
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
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({
          initialState,
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    mockStore = TestBed.get(Store);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should dispatch an action to get the candidates list', () => {
    spyOn(mockStore, 'dispatch');
    mockStore.overrideSelector(getCandidates, [
      {
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
      }
    ]);

    component.ngOnInit();

    expect(component.candidates.length).toEqual(1);
    expect(mockStore.dispatch).toHaveBeenCalled();
  });


  it('should update the the candidates list', () => {
    const candidates: Candidate[] = [
      {
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
    ];

    component.updateCandidates(candidates);

    expect(component.candidates.length).toEqual(3);
  });
});
