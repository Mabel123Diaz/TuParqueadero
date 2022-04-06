import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { MenuComponent } from './menu/menu.component';

import { CrudPageRoutingModule } from './crud-routing.module';

import { CrudPage } from './crud.page';

@NgModule({
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterModule } from '@angular/router';
import { MapViewComponent } from './components/map-view/map-view.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { TuParqLogoComponent } from './components/tu-parq-logo/tu-parq-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { InfoParkingComponent } from './components/info-parking/info-parking.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoadingComponent,
    MapViewComponent,
    BtnMyLocationComponent,
    TuParqLogoComponent,
    SearchBarComponent,
    SearchResultsComponent,
    InfoParkingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule
  ],
  declarations: [UserPage,MenuComponent]
})
export class UserPageModule ({
[
    CrudPageRoutingModule
  ],
  declarations: [CrudPage]
})
export class CrudPageModule ({
[
    RouterModule
  ]
})
export class UserModule {}
