import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

// Hightcharts

import { ChartModule } from 'angular-highcharts';

// Services

import {ApiService} from './service/api.service'

// Components

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { FormComponent } from './component/form/form.component';
import { NestedComponentsComponent } from './component/nested-components/nested-components.component';
import { FetchComponent } from './component/fetch/fetch.component';
import { LineChartComponent } from './component/line-chart/line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DataBindingComponent,
    FormComponent,
    NestedComponentsComponent,
    FetchComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    ChartModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
