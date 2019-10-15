import {Component} from '@angular/core';

@Component({
  selector: 'ngx-collapsible-sidebar-item',
  template: `
    <div class="ngx-collapsible-sidebar-item">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .ngx-collapsible-sidebar-item {
      width: 100%;
    }
  `]
})
export class NgxCollapsibleSidebarItemComponent {}
