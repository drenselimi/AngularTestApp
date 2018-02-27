import { Injectable } from '@angular/core';
// import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { Http, Response, HttpModule } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Person } from '../models/person';

declare var require: any;
var loki = require('lokijs');
var fs = require("fs");

import * as data from 'people.json';

@Injectable()
export class PeopleService {

  url: string = 'http://localhost:3000/people';
  today: Date;
  db: any;
  peopleCollection: any;
  people: Person[] = [] 

  constructor(
    private http: Http
  ) {
    this.today = new Date();
    
    this.db = new loki('people.json');
    this.peopleCollection = this.getCollection('people');

    if (!this.peopleCollection) {
      this.peopleCollection = this.db.addCollection('people', {
        indices: [
          'name',
          'email',
          'city',
          'mac',
          'timestamp',
          'creditcard',
        ]
      })
    }
  }
  getAllFromFile(){
    return this.http.get(this.url)
      .map((res: Response) => {
        let result = res.json() as Person[];
        result.forEach(element => {
          this.peopleCollection.insert(element);
        });

        return this.peopleCollection.chain().simplesort("timestamp").data();
      });
  }

  

  getCollection(people: string) {
    var collection = this.db.getCollection(people);
    if (collection) {
      return collection.chain().simplesort("timestamp").data();
    }
  }

  createPerson(person: Person) {
    // this.peopleCollection.insert({
    //   'name': person.name,
    //   'email': person.email,
    //   'city': person.city,
    //   'mac': person.mac,
    //   'timestamp': this.today,
    //   'creditcard': person.creditcard,
    // })
    person.timestamp = this.today;
    this.peopleCollection.insert(person);
  }

  getPersonByMac(mac: any) {
    return this.peopleCollection.findObject({'mac':mac});
  }

  udpatePerson(person: Person) {
    person.timestamp = this.today;
    this.peopleCollection.update(person);
  }

  deletePerson(mac: any) {
    this.peopleCollection.removeWhere({'mac':mac});
  }

}
