import {Component} from '@angular/core';

@Component({
  selector: 'ngx-collapsible-sidebar-content',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      flex: 1;
      height: 100%;
      overflow-y: scroll;
    }
  `]
})
export class NgxCollapsibleSidebarContentComponent {}
