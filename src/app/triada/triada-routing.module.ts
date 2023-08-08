import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriadaPage } from './triada.page';

const routes: Routes = [
  {
    path: '',
    component: TriadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriadaPageRoutingModule {}
