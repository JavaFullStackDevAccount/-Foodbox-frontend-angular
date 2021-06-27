import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FoodCategoryComponent } from './Components/food-category/food-category.component';
import { FilterFoodComponent } from './Components/filter-food/filter-food.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FoodCardComponent } from './Components/food-card/food-card.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ManageFoodComponent } from './Components/manage-food/manage-food.component';
import { FoodItemCartComponent } from './Components/food-item-cart/food-item-cart.component';
import { TokenizedRequestsInterceptor } from './Interceptors/tokenized-requests.interceptor';
import { CartInterceptor } from './Interceptors/cart.interceptor';
import { LoadingComponent } from './Components/loading/loading.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { OrdersComponent } from './Components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FoodCategoryComponent,
    FilterFoodComponent,
    FoodCardComponent,
    LoginComponent,
    RegisterComponent,
    ManageFoodComponent,
    FoodItemCartComponent,
    LoadingComponent,
    CheckoutComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatExpansionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenizedRequestsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
