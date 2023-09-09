import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInicialPage,
    children: [
      {
        path: 'estudiar',
        loadChildren: () => import('./../../page/estudiar/estudiar.module').then( m => m.EstudiarPageModule)
      },
      {
        path: 'practicar',
        loadChildren: () => import('./../../page/practicar/practicar.module').then( m => m.PracticarPageModule)
      },
      {
        path: 'conceptos',
        loadChildren: () => import('./../../page/conceptos/conceptos.module').then( m => m.ConceptosPageModule)
      },
      {
        path: 'lecturas',
        loadChildren: () => import('./../../page/lecturas/lecturas.module').then( m => m.LecturasPageModule)
      },
      {
        path: 'frases',
        loadChildren: () => import('./../../page/frases/frases.module').then( m => m.FrasesPageModule)
      },
      {
        path: 'pilares',
        loadChildren: () => import('./../pilares/pilares.module').then( m => m.PilaresPageModule)
      },
      {
        path: 'mandamientos',
        loadChildren: () => import('./../mandamientos/mandamientos.module').then( m => m.MandamientosPageModule)
      },
      {
        path: 'triada',
        loadChildren: () => import('./../triada/triada.module').then( m => m.TriadaPageModule)
      },
      {
        path: 'contenedor-lectura',
        loadChildren: () => import('./../contenedor-lectura/contenedor-lectura.module').then( m => m.ContenedorLecturaPageModule)
      },
      {
        path: 'introduccion',
        loadChildren: () => import('./../introduccion/introduccion.module').then( m => m.IntroduccionPageModule)
      },
      {
        path: 'preguntas',
        loadChildren: () => import('./../preguntas/preguntas.module').then( m => m.PreguntasPageModule)
      },
      {
        path: 'audiolibro',
        loadChildren: () => import('./../audiolibro/audiolibro.module').then( m => m.AudiolibroPageModule)
      },
      {
        path: 'material',
        loadChildren: () => import('./../material/material.module').then( m => m.MaterialPageModule)
      },
      {
        path: 'reflexion',
        loadChildren: () => import('./../reflexion/reflexion.module').then( m => m.ReflexionPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
