import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { CheckOutComponent } from './main-components/check-out/check-out.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { EditCartComponent } from './main-components/edit-cart/edit-cart.component';
import { HomeComponent } from './main-components/home/home.component';
import { ProductsComponent } from './main-components/products/products.component';
import { PurchaseFailedComponent } from './main-components/purchase-failed/purchase-failed.component';
import { PurchaseSuccessfulComponent } from './main-components/purchase-successful/purchase-successful.component';
import { ViewProductComponent } from './main-components/view-product/view-product.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [
  { path: '', component: MainModuleComponent,children:[
    {path:'',component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'product',component:ProductsComponent},
    {path:'check-out',component:CheckOutComponent},
    {path:'edit-cart',component:EditCartComponent},
    {path:'view-product',component:ViewProductComponent},
    {path:'purchase-successful',component:PurchaseSuccessfulComponent},
    {path:'purchase-failed',component:PurchaseFailedComponent},
    {path:'contact-us',component:ContactUsComponent}
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
