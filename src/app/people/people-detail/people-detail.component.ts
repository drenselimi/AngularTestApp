import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import {Router} from '@angular/router';
import {PeopleService} from '../../services/people.service';

declare var require: any;
var loki = require('lokijs');

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html'
})
export class PeopleDetailComponent implements OnInit {

  // db: any;
  // peoples: any;

  // people: Person[] = [];

  // constructor(
  //   private router: Router,
  //   private peopleService: PeopleService
  // ) {
  //   this.db = new loki('people');
  //   this.peoples = this.db.addCollection('peoples');
  // }

  ngOnInit() {
    // this.getAllPeople();
  }

  // onCreate() {
  //   this.router.navigate(['/people/create']);
  // }

  // onDetail(event) {
  //   this.router.navigate(['/people/detail/' + event._id]);
  // }

  // onEdit(event) {
  //   this.router.navigate(['/people/edit/' + event._id]);
  // }

  // getAllPeople(){
  //   // this.people = this.peopleService.getAll();
  // }
}
