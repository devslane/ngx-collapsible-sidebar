import {Component, EventEmitter, Input, TemplateRef, ViewChild} from '@angular/core';
import {StringUtils} from '../../utils/strings';
import {CollapsedSidebarItemDirective} from '../../directives/collapsed-sidebar-item.directive';
import {ExpandedSidebarItemDirective} from '../../directives/expanded-sidebar-item.directive';

@Component({
  selector: 'ngx-collapsible-sidebar-item',
  template: `
      <div class="ngx-collapsible-sidebar-item" (click)="itemSelect.emit(id)">
          <ng-content></ng-content>
      </div>
  `,
  styles: [`
      .ngx-collapsible-sidebar-item {
          width: 100%;
      }
  `]
})
export class NgxCollapsibleSidebarItemComponent {
  @Input() title: string;
  @Input() icon: string;
  @Input() id: string = StringUtils.getUniqueId();
  @ViewChild(CollapsedSidebarItemDirective, {static: false, read: TemplateRef}) collapsedItem: TemplateRef<any>;
  @ViewChild(ExpandedSidebarItemDirective, {static: false, read: TemplateRef}) expandedItem: TemplateRef<any>;
  itemSelect = new EventEmitter<string>();
  private collapsed = true;

  collapse() {
    this.collapsed = true;
  }

  expand() {
    this.collapsed = false;
  }
}
