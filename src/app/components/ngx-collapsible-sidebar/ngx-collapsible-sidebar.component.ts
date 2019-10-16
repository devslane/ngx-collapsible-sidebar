import {AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList} from '@angular/core';
import {NgxCollapsibleSidebarItemComponent} from '../ngx-collapsible-sidebar-item/ngx-collapsible-sidebar-item.component';
import {Unsubscribe} from '../unsubscribe';
import {NavigationStart, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'ngx-collapsible-sidebar',
  templateUrl: './ngx-collapsible-sidebar.component.html',
  styleUrls: ['./ngx-collapsible-sidebar.component.scss']
})
export class NgxCollapsibleSidebarComponent extends Unsubscribe implements AfterContentInit {
  @Input() selectedItemRoute: string;
  @Input() collapsed: boolean;
  @ContentChildren(NgxCollapsibleSidebarItemComponent) items: QueryList<NgxCollapsibleSidebarItemComponent>;
  @Output() itemSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {
    super();
  }

  ngAfterContentInit(): void {
    if (this.selectedItemRoute) {
      this.updateSelectedItem(this.selectedItemRoute, false);
    }
    this.router.events.pipe(takeUntil(this.destroyed$)).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.updateSelectedItem(event.url, true);
      }
    });
  }

  updateSelectedItem(url: string, emitEvent: boolean = false) {
    this.items.forEach(item => {
      if (url.includes(item.routerLink)) {
        item.expand();
        if (emitEvent) {
          this.itemSelected.emit(item.routerLink);
        }
      } else {
        item.collapse();
      }
    });
  }
}
