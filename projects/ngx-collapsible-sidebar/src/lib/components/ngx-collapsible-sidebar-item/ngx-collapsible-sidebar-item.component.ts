import {AfterContentInit, Component, ContentChildren, Input, QueryList} from '@angular/core';
import {NgxCollapsibleSidebarSubItemComponent} from '../ngx-collapsible-sidebar-sub-item/ngx-collapsible-sidebar-sub-item.component';

@Component({
  selector: 'ngx-collapsible-sidebar-item',
  templateUrl: './ngx-collapsible-sidebar-item.component.html',
  styleUrls: ['./ngx-collapsible-sidebar-item.component.scss']
})
export class NgxCollapsibleSidebarItemComponent implements AfterContentInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() path: string;
  @ContentChildren(NgxCollapsibleSidebarSubItemComponent) items: QueryList<NgxCollapsibleSidebarSubItemComponent>;
  private collapsed = true;

  ngAfterContentInit(): void {
    this.items.forEach(item => {
      item.path = this.path + '/' + item.path;
    });
  }

  collapse() {
    this.collapsed = true;
  }

  expand() {
    this.collapsed = false;
  }
}
