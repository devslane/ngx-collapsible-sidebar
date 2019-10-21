import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {Route, RouterModule} from '@angular/router';
import {Page1Component} from './pages/page1.component';
import {Page2Component} from './pages/page2.component';
import {Page3Component} from './pages/page3.component';
import {Page4Component} from './pages/page4.component';
import {User1Component} from './pages/user1.component';
import {User2Component} from './pages/user2.component';
import {User3Component} from './pages/user3.component';
import {NgxCollapsibleSidebarModule} from '../../projects/ngx-collapsible-sidebar/src/lib/ngx-collapsible-sidebar.module';
import {Page5Component} from './pages/page5.component';
import {Page6Component} from './pages/page6.component';
import {Page7Component} from './pages/page7.component';

const routes: Route[] = [
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component},
  {path: 'page4', component: Page4Component},
  {path: 'page5', component: Page5Component},
  {path: 'page6', component: Page6Component},
  {path: 'page7', component: Page7Component, children: [
      {path: 'user1', component: User1Component},
      {path: 'user2', component: User2Component},
      {path: 'user3', component: User3Component}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
    Page7Component,
    User1Component,
    User2Component,
    User3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxCollapsibleSidebarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
