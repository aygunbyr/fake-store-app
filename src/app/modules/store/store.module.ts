import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreComponent } from './store.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, StoreComponent],
  exports: [StoreComponent],
})
export class StoreModule {}
