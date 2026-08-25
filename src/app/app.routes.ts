import { Routes } from '@angular/router';
import { MenuResponsivo } from './feats/menu-responsivo/menu-responsivo';
import { PropBinding } from './feats/prop-binding/prop-binding';
import { TwoWayBind } from './feats/two-way-bind/two-way-bind';
import { Exercicios } from './feats/exercicios/exercicios';
import { Nav } from './feats/nav/nav';


export const routes: Routes = [

    { path: 'menu-responsivo', component: MenuResponsivo },
    { path: 'event', component: Event },
    { path: 'prop-binding', component: PropBinding },
    { path: 'bind', component: TwoWayBind },
    { path: 'exercicios', component: Exercicios },
    { path: 'nav', component: Nav},
    { path: '', redirectTo: 'home', pathMatch: 'full' }

];
