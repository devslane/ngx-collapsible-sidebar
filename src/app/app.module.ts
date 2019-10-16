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

const routes: Route[] = [
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component},
  {path: 'page4', component: Page4Component}
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
    TruncatePipe
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
