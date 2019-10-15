import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-collapsible-sidebar',
  template: `
    <div class="ngx-collapsible-sidebar" [ngClass]="collapsed ? 'collapsed' : 'expanded'">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./ngx-collapsible-sidebar.component.scss']
})
export class NgxCollapsibleSidebarComponent {
  @Input() collapsed: boolean;
}
