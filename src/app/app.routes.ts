import { Routes } from '@angular/router';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { HeroPageComponent } from './components/hero-page/hero-page.component';

export const routes: Routes = [
    {path: '', component: HeroPageComponent},
    {
        path: 'shop',
        component: ShopPageComponent
    },
    {path: 'home', component: HeroPageComponent}
];
