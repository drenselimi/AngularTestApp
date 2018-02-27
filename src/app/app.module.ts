import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import {DataTableModule, AccordionModule, AutoCompleteModule, BreadcrumbModule, DropdownModule, CalendarModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {AppRoutingModule} from './app-route.module';
import {PeopleCreateComponent} from './people/people-create/people-create.component';
import {PeopleService} from './services/people.service';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PeopleEditComponent } from './people/people-edit/people-edit.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    PeopleComponent,
    AppComponent,
    PeopleCreateComponent,
    PeopleEditComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpModule,
    FormsModule,
    HttpModule,
    AccordionModule,
    AutoCompleteModule,
    CalendarModule,
    DropdownModule,
    BreadcrumbModule,
    DataTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


