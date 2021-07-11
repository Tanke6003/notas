import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'notes',
        loadChildren: () => import('../notes/notes.module').then( m => m.NotesPageModule)
      },
      {
        path: 'create-note',
        loadChildren: () => import('../create-note/create-note.module').then( m => m.CreateNotePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
