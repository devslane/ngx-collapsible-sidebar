import {AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList} from '@angular/core';
import {NgxCollapsibleSidebarItemComponent} from '../ngx-collapsible-sidebar-item/ngx-collapsible-sidebar-item.component';
import {takeUntil} from 'rxjs/operators';
import {Unsubscribe} from '../unsubscribe';

@Component({
  selector: 'ngx-collapsible-sidebar',
  template: `
    <div class="ngx-collapsible-sidebar" [ngClass]="collapsed ? 'collapsed' : 'expanded'">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./ngx-collapsible-sidebar.component.scss']
})
export class NgxCollapsibleSidebarComponent extends Unsubscribe implements AfterContentInit {
  @Input() selectedItemId: string;
  @Input() collapsed: boolean;
  @ContentChildren(NgxCollapsibleSidebarItemComponent) items: QueryList<NgxCollapsibleSidebarItemComponent>;
  @Output() itemSelected: EventEmitter<string> = new EventEmitter<string>();

  ngAfterContentInit(): void {
    this.items.forEach(item => item.itemSelect.pipe(takeUntil(this.destroyed$))
      .subscribe(itemId => this.updateSelectedItem(itemId)));
  }

  updateSelectedItem(itemId: string) {
    this.selectedItemId = itemId;
    this.items.forEach(item => {
      if (item.id === itemId) {
        item.expand();
      } else {
        item.collapse();
      }
    });
    this.itemSelected.emit(itemId);
  }
}
