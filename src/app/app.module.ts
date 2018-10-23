import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NewItemComponent } from './new-item/new-item.component';
import {ReactiveFormsModule} from "@angular/forms";   /* esto se agrego por el formulario */
import {MockItemsService} from "./_services/mock-items.service";   /* esto se agrego por el formulario */

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  /* esto se agrego manualmente*/
  ],
  providers: [MockItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
