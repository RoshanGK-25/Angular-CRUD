import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent, title: 'User List' },
  { path: 'create', component: CreateComponent, title: 'Create User' },
  { path: 'view/:id', component: ViewComponent, title: 'View User' },
  { path: 'edit/:id', component: EditComponent, title: 'Update User' }
];
