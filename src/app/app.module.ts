import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OurTeachersComponent } from './our-teachers/our-teachers.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    OurTeachersComponent,
    HomepageComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'our-teachers', component: OurTeachersComponent},
      {path: 'homepage', component: HomepageComponent},
      {path: 'appointment', component: AppointmentComponent},
      {path: '', redirectTo: 'homepage', pathMatch: 'full'},
      {path: '**', redirectTo: 'homepage', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
