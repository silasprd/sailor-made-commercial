import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConceptComponent } from './core/components/concept/concept.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { SisgaazComponent } from './core/components/sisgaaz/sisgaaz.component';
import { TecnologyComponent } from './core/components/tecnology/tecnology.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ConceptComponent,
    ContactComponent,
    SisgaazComponent,
    TecnologyComponent,
    TopbarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
