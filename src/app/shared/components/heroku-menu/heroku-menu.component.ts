import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heroku-menu',
  templateUrl: './heroku-menu.component.html',
  styleUrls: ['./heroku-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HerokuMenuComponent {}
