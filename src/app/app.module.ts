import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {NgxCollapsibleSidebarComponent} from './components/ngx-collapsible-sidebar/ngx-collapsible-sidebar.component';
import {NgxCollapsibleSidebarItemComponent} from './components/ngx-collapsible-sidebar-item/ngx-collapsible-sidebar-item.component';
import {NgxCollapsibleSidebarSubItemComponent} from './components/ngx-collapsible-sidebar-sub-item/ngx-collapsible-sidebar-sub-item.component';
import {NgxCollapsibleSidebarContainerComponent} from './components/ngx-collapsible-sidebar-container/ngx-collapsible-sidebar-container.component';
import {NgxCollapsibleSidebarContentComponent} from './components/ngx-collapsible-sidebar-content/ngx-collapsible-sidebar-content.component';
import {HideOnCollapseDirective} from './directives/hide-on-collapse.directive';
import {Route, RouterModule} from '@angular/router';
import {Page1Component} from './pages/page1.component';
import {Page2Component} from './pages/page2.component';
import {Page3Component} from './pages/page3.component';
import {Page4Component} from './pages/page4.component';
import {TruncatePipe} from './pipes/truncate.pipe';
import {User1Component} from './pages/user1.component';
import {User2Component} from './pages/user2.component';
import {User3Component} from './pages/user3.component';

const routes: Route[] = [
  {path: 'page1', component: Page1Component, children: [
      {path: 'user1', component: User1Component},
      {path: 'user2', component: User2Component},
      {path: 'user3', component: User3Component}
    ]},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component, children: [
      {path: 'user1', component: User1Component},
      {path: 'user2', component: User2Component},
      {path: 'user3', component: User3Component}
    ]},
  {path: 'page4', component: Page4Component, children: [
      {path: 'user1', component: User1Component},
      {path: 'user2', component: User2Component},
      {path: 'user3', component: User3Component}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HideOnCollapseDirective,
    NgxCollapsibleSidebarContainerComponent,
    NgxCollapsibleSidebarContentComponent,
    NgxCollapsibleSidebarComponent,
    NgxCollapsibleSidebarItemComponent,
    NgxCollapsibleSidebarSubItemComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    TruncatePipe,
    User1Component,
    User2Component,
    User3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
