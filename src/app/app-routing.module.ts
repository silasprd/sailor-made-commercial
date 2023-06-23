import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConceptComponent } from './core/components/concept/concept.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { SisgaazComponent } from './core/components/sisgaaz/sisgaaz.component';
import { TecnologyComponent } from './core/components/tecnology/tecnology.component';

const routes: Routes = [

  {
    path: '',
    component: ConceptComponent
  },
  {
    path: 'contato',
    component: ContactComponent
  },
  {
    path: 'amazonia-azul-sisgaaz',
    component: SisgaazComponent
  },
  {
    path: 'tecnologia',
    component: TecnologyComponent
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
