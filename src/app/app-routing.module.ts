import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule),
    canActivate: [AuthGuard],
    data:{
      auth: false
    }
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule),
    canActivate: [AuthGuard],
    data:{
      auth: false
    }
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [AuthGuard],
    data:{
      auth: true
    }
  },
  {
    path: 'detalles-nota/:idNote',
    loadChildren: () => import('./detalles-nota/detalles-nota.module').then( m => m.DetallesNotaPageModule),
    canActivate: [AuthGuard],
    data:{
      auth: true
    }
  },
  {
    path: 'edit-note/:idNote',
    loadChildren: () => import('./edit-note/edit-note.module').then( m => m.EditNotePageModule),
    canActivate: [AuthGuard],
    data:{
      auth: true
    }
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
