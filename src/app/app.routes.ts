import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'sidepanel',
        loadChildren: () => import('./components/side-panel/side-panel.routes').then(m => m.routes)
    },
];
