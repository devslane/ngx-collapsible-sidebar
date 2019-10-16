import {Component, EventEmitter, Input} from '@angular/core';
import {StringUtils} from '../../utils/strings';

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
  itemSelect = new EventEmitter<string>();
  private collapsed = true;

  collapse() {
    this.collapsed = true;
  }

  expand() {
    this.collapsed = false;
  }
}
