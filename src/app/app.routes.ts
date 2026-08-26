import { Routes } from '@angular/router';
import { PropBinding } from './feats/prop-binding/prop-binding';
import { TwoWayBind } from './feats/two-way-bind/two-way-bind';
import { Exercicios } from './feats/exercicios/exercicios';



export const routes: Routes = [

    { path: 'prop-binding', component: PropBinding },
    { path: 'bind', component: TwoWayBind },
    { path: 'exercicios', component: Exercicios },
    
 
];
