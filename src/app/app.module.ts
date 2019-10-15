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

@NgModule({
  declarations: [
    AppComponent,
    HideOnCollapseDirective,
    NgxCollapsibleSidebarContainerComponent,
    NgxCollapsibleSidebarContentComponent,
    NgxCollapsibleSidebarComponent,
    NgxCollapsibleSidebarItemComponent,
    NgxCollapsibleSidebarSubItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
