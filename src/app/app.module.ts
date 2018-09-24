import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AutorizationComponent } from './autorization/autorization.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { TsShopFilterPipe } from './pipes/ts-shop-filter.pipe';
import { HttpClientModule } from '@angular/common/http';



const appRoutes: Routes = [
  { path: 'autorization', component: AutorizationComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: '',
    redirectTo: '/autorization',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AutorizationComponent,
    ClientsComponent,
    ProductsComponent,
    TsShopFilterPipe

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {

 }

/*import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { TsShopFilterPipe } from './pipes/ts-shop-filter.pipe';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'products', component: ProductsComponent },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ClientsComponent,
    TsShopFilterPipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/
