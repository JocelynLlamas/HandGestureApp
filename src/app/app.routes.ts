import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./shared/pages/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'translator',
        loadComponent: () => import('./shared/features/sign-translator/sign-translator.component').then((m) => m.SignTranslatorComponent),
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRouterModule { }
