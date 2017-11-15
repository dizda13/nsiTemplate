import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { Content } from './content/content.component';
import { Inbox } from './content/inbox.component';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';
import { CustomersDetailsComponent } from "app/customers/CustomerDetails/CustomersDetailsComponent";


export const ROUTES: Routes = [
  { path: '',      component: Content },
  { path: 'inbox',  component: Inbox },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: 'customers',    component: CustomersDetailsComponent},
  { path: '**',    component: NoContent },
];
