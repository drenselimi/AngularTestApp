import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';

declare var require: any;
var loki = require('lokijs');

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html'
})
export class PeopleEditComponent implements OnInit {

  mac: string;

  person: Person = new Person();

  constructor(
    private router: Router,
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) { 

  }

  ngOnInit() {
    this.mac = this.route.snapshot.params['mac'];
    this.person = this.peopleService.getPersonByMac(this.mac);

  }

  onSave() {
    this.peopleService.udpatePerson(this.person);
    this.router.navigate(['/people']);
  }

  onBack() {
    this.router.navigate(['/people']);
  }

}
