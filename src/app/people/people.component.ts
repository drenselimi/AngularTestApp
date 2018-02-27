import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { Router } from '@angular/router';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  db: any;
  peoples: any;

  people: Person[] = [];

  constructor(  ) {
  }

  ngOnInit() {
  }
}
