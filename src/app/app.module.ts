import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeaderComponent,
  ],
  exports: [HeaderComponent]
})
export class AppModule { }
