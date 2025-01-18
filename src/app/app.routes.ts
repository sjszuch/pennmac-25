import { Routes } from '@angular/router';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { HeroPageComponent } from './components/hero-page/hero-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
    {path: '', component: HeroPageComponent},
    {
        path: 'shop',
        component: ShopPageComponent
    },
    {path: 'home', component: HeroPageComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'item', component: ItemPageComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: '**', redirectTo: ''}
];
