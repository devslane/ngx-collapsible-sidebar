import {NgModule} from '@angular/core';
import {NgxCollapsibleSidebarSubItemComponent} from './components/ngx-collapsible-sidebar-sub-item/ngx-collapsible-sidebar-sub-item.component';
import {NgxCollapsibleSidebarItemComponent} from './components/ngx-collapsible-sidebar-item/ngx-collapsible-sidebar-item.component';
import {NgxCollapsibleSidebarComponent} from './components/ngx-collapsible-sidebar/ngx-collapsible-sidebar.component';
import {NgxCollapsibleSidebarContentComponent} from './components/ngx-collapsible-sidebar-content/ngx-collapsible-sidebar-content.component';
import {NgxCollapsibleSidebarContainerComponent} from './components/ngx-collapsible-sidebar-container/ngx-collapsible-sidebar-container.component';
import {HideOnCollapseDirective} from './directives/hide-on-collapse.directive';
import {CommonModule} from '@angular/common';
import {CollapsedSidebarItemDirective} from './directives/collapsed-sidebar-item.directive';
import {ExpandedSidebarItemDirective} from './directives/expanded-sidebar-item.directive';

const components = [
  NgxCollapsibleSidebarContainerComponent,
  NgxCollapsibleSidebarContentComponent,
  NgxCollapsibleSidebarComponent,
  NgxCollapsibleSidebarItemComponent,
  NgxCollapsibleSidebarSubItemComponent
];

const directives = [
  HideOnCollapseDirective,
  CollapsedSidebarItemDirective,
  ExpandedSidebarItemDirective
];

@NgModule({
  declarations: [
    ...directives,
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...directives,
    ...components
  ]
})
export class NgxCollapsibleSidebarModule {}
