import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';

declare var require: any;
var loki = require('lokijs');

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {

  peopleList: Person[] = [];

  constructor(
    private router: Router,
    private peopleService: PeopleService
  ) {
  }

  ngOnInit() {
    this.getCollection()
    if (this.peopleList.length == 0 ) {
      this.getAllFromFile();
    }      
  }

  onCreate() {
    this.router.navigate(['/people/create']);
  }

  onDetail(event) {
    this.router.navigate(['/people/detail/' + event.mac]);
  }

  onEdit(event) {
    this.router.navigate(['/people/edit/' + event.mac]);
  }

  onDelete(event) {
    this.peopleService.deletePerson(event.mac);
    this.getCollection();
  }

  getCollection() {
    this.peopleList = this.peopleService.getCollection('people');
    this.peopleList = [...this.peopleList];
  }

  getAllFromFile() {
    this.peopleService.getAllFromFile()
      .subscribe((res: Person[]) => {
        this.peopleList = res;
      })
  }
}
