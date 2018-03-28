import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaintenanceApiService } from './maintenance-api.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CostByCategoryComponent } from './cost-by-category/cost-by-category.component';
import { CostByPropertyTypeComponent } from './cost-by-property-type/cost-by-property-type.component';
import { AsideComponent } from './aside/aside.component';
import { NavComponent } from './nav/nav.component';
import { TilesComponent } from './tiles/tiles.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: 'dashboard',
    component: DashboardComponent 
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CostByCategoryComponent,
    CostByPropertyTypeComponent,
    AsideComponent,
    NavComponent,
    TilesComponent,
    LoginComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AmChartsModule
  ],
  providers: [MaintenanceApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
