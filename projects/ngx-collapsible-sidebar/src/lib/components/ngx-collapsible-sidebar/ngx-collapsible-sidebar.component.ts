import {AfterContentInit, Component, ContentChildren, Input, OnDestroy, QueryList} from '@angular/core';
import {NgxCollapsibleSidebarItemComponent} from '../ngx-collapsible-sidebar-item/ngx-collapsible-sidebar-item.component';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'ngx-collapsible-sidebar',
  templateUrl: './ngx-collapsible-sidebar.component.html',
  styleUrls: ['./ngx-collapsible-sidebar.component.scss']
})
export class NgxCollapsibleSidebarComponent implements AfterContentInit, OnDestroy {
  @Input() collapsed: boolean;
  @Input() highlightColor: string;
  @ContentChildren(NgxCollapsibleSidebarItemComponent) items: QueryList<NgxCollapsibleSidebarItemComponent>;

  constructor(private router: Router) {}

  ngAfterContentInit(): void {
    this.items.forEach(item => {
      item.color = this.highlightColor;
    });
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => this.updateSelectedItem(event.url));
  }

  updateSelectedItem(url: string) {
    this.items.forEach(item => {
      if (url.includes(item.path)) {
        item.expand();
      } else {
        item.collapse();
      }
    });
  }

  ngOnDestroy(): void {}
}
