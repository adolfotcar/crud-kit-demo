import { Routes } from '@angular/router';
import { Aio } from './aio/aio';
import { Form } from './form/form';
import { Table } from './table/table';

export const routes: Routes = [
    { path: '', component: Aio},
    { path: 'form', component: Form },
    { path: 'form/:id', component: Form },
    { path: 'table', component: Table }
];
