import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {PeopleCreateComponent} from './people/people-create/people-create.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';
import { PeopleEditComponent } from './people/people-edit/people-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full'},
  { path: 'people', component: PeopleComponent, children: [
      { path: '', component: PeopleListComponent },
      {path: 'create', component: PeopleCreateComponent},
      {path: 'edit/:mac', component: PeopleEditComponent},
      {path: 'detail/:mac', component: PeopleDetailComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
