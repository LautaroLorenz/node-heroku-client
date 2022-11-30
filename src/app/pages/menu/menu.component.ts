import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuOption } from 'src/app/models';
import { HerokuService } from 'src/app/services/heroku.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  menuOptions$: Observable<MenuOption[]>;

  constructor(
    private herokuSvc: HerokuService,
  ) {
    this.menuOptions$ = this.herokuSvc.getMenuOptions$();
  }
}
