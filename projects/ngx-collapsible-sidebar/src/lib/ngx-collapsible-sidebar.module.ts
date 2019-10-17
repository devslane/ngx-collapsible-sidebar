import { NgModule } from '@angular/core';
import {NgxCollapsibleSidebarSubItemComponent} from './components/ngx-collapsible-sidebar-sub-item/ngx-collapsible-sidebar-sub-item.component';
import {NgxCollapsibleSidebarItemComponent} from './components/ngx-collapsible-sidebar-item/ngx-collapsible-sidebar-item.component';
import {NgxCollapsibleSidebarComponent} from './components/ngx-collapsible-sidebar/ngx-collapsible-sidebar.component';
import {NgxCollapsibleSidebarContentComponent} from './components/ngx-collapsible-sidebar-content/ngx-collapsible-sidebar-content.component';
import {NgxCollapsibleSidebarContainerComponent} from './components/ngx-collapsible-sidebar-container/ngx-collapsible-sidebar-container.component';
import {HideOnCollapseDirective} from './directives/hide-on-collapse.directive';
import {CommonModule} from '@angular/common';
import {TruncatePipe} from './pipes/truncate.pipe';

const components = [
  NgxCollapsibleSidebarContainerComponent,
  NgxCollapsibleSidebarContentComponent,
  NgxCollapsibleSidebarComponent,
  NgxCollapsibleSidebarItemComponent,
  NgxCollapsibleSidebarSubItemComponent,
  TruncatePipe
];

@NgModule({
  declarations: [
    HideOnCollapseDirective,
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HideOnCollapseDirective,
    ...components
  ]
})
export class NgxCollapsibleSidebarModule {}
