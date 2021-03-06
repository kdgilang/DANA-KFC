import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TabComponent } from './components/tab/tab.component';
import { FeatureComponent } from './components/feature/feature.component';
import { BannerComponent } from './components/banner/banner.component';
import { AddressComponent } from './components/address/address.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ListComponent } from './components/list/list.component';

import { isIOS } from "tns-core-modules/platform";
import { CustomOrderDialogComponent } from './components/custom-order-dialog/custom-order-dialog.component';

declare var GMSServices: any;

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

if (isIOS) { 
  GMSServices.provideAPIKey("AIzaSyBJa-W-lVhlbaCo-AtVEKxKenaAWeiapbE");
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabComponent,
    FeatureComponent,
    BannerComponent,
    AddressComponent,
    CatalogComponent,
    ListComponent,
    CustomOrderDialogComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [
    CustomOrderDialogComponent
  ]
})
export class AppModule { }
