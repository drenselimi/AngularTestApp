import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';

declare var require: any;
var loki = require('lokijs');

@Component({
  selector: 'app-people-create',
  templateUrl: './people-create.component.html'
})
export class PeopleCreateComponent implements OnInit {

  today: Date;

  person: Person = new Person();

  constructor(
    private router: Router,
    private peopleService: PeopleService
  ) {  }

  ngOnInit() {
    this.today = new Date();
  }

  onSave() {
    this.peopleService.createPerson(this.person);
    // this.peopleService.peopleCollection.insert({
    //   'name': this.person.name,
    //   'email': this.person.email,
    //   'city': this.person.city,
    //   'mac': this.person.mac,
    //   'timestamp': this.today,
    //   'creditcard': this.person.creditcard,
    // })
    this.onBack();
  }

  onBack() {
    this.router.navigate(['/people']);
  }

}
