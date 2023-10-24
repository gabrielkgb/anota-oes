import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guardas/login.guard';
import { RotasGuard } from './guardas/rotas.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canActivate:[LoginGuard]
  },
  {
    path: 'footer',
    loadChildren: () => import('./componentes/footer/footer.module').then( m => m.FooterModule), canActivate:[RotasGuard]
  },

  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule), canActivate:[LoginGuard]
  },

  
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
 


  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
