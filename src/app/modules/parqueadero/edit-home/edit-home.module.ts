import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditHomePageRoutingModule } from './edit-home-routing.module';

import { EditHomePage } from './edit-home.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditHomePageRoutingModule
  ],
  declarations: [EditHomePage, MenuComponent]
})
export class EditHomePageModule {}