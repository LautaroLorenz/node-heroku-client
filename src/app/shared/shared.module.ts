import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModules } from './primeng/primeng-modules.contstant';
import { HerokuMenuComponent } from './components/heroku-menu/heroku-menu.component';

@NgModule({
  declarations: [HerokuMenuComponent],
  imports: [CommonModule, PrimeNgModules],
  exports: [PrimeNgModules, HerokuMenuComponent],
})
export class SharedModule {}
