import {Component} from '@angular/core';

@Component({
  selector: 'ngx-collapsible-sidebar-container',
  template: `
    <div class="ngx-collapsible-sidebar-container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .ngx-collapsible-sidebar-container {
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: stretch;
    }
  `]
})
export class NgxCollapsibleSidebarContainerComponent {}
