import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FoodItemCartComponent } from './Components/food-item-cart/food-item-cart.component';
import { LoginComponent } from './Components/login/login.component';
import { ManageFoodComponent } from './Components/manage-food/manage-food.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { RegisterComponent } from './Components/register/register.component';
import { RouteGuard } from './Guards/route.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'add/food',
    component: ManageFoodComponent,
    canActivate: [RouteGuard],
  },
  {
    path: 'edit/food/:id',
    component: ManageFoodComponent,
    canActivate: [RouteGuard],
  },
  {
    path: 'food/item/cart',
    component: FoodItemCartComponent,
    canActivate: [RouteGuard],
  },
  {
    path: 'food/item/orders',
    component: OrdersComponent,
    canActivate: [RouteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
