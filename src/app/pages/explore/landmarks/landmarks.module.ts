import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandmarksPageRoutingModule } from './landmarks-routing.module';

import { LandmarksPage } from './landmarks.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandmarksPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LandmarksPage]
})
export class LandmarksPageModule {}
