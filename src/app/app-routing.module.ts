import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { SobreComponent } from './sobre/sobre.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'projetos',
      component: ProjetosComponent
    },
    {
      path: 'sobre',
      component: SobreComponent
    },
    {
      path: 'contato',
      component: ContatoComponent
    }
  ];

  
@NgModule({

imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})

export class AppRoutingModule{


    
}