import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {

  @ViewChildren(RouterLinkActive, {read: ElementRef})
  linkRefs: QueryList<ElementRef>

  menuItems;
  activeMenuItemClass = 'menu__item_active';
  activeMenuItemTitle;

  constructor(private service: DataService) { }

  
  getActiveMenuItem = (): ElementRef | undefined => {
    return this.linkRefs.toArray()
    .find(e => e.nativeElement.classList.contains(this.activeMenuItemClass))
  }

  ngOnInit(): void {

    //timeout for full menuItems rendering
    setTimeout( () => {
      this.activeMenuItemTitle = this.getActiveMenuItem().nativeElement.innerText;
      //setting actual page title after page refreshing
      this.service.setPageTitle(this.activeMenuItemTitle);
    }, 0);
  }

  //setting actual page title after changing active menu item
  onChange(event): void {
    this.service.setPageTitle(event.target.innerText);
  }
}
