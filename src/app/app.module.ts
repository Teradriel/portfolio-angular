import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CvComponent } from './pages/cv/cv.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './pages/panel/panel.component';
import { InterceptorService } from './services/interceptor.service';
import { IntroComponent } from './pages/cv/intro/intro.component';
import { ExperienciaComponent } from './pages/cv/experiencia/experiencia.component';
import { SkillsComponent } from './pages/cv/skills/skills.component';
import { CursosComponent } from './pages/cv/cursos/cursos.component';
import { SidebarComponent } from './pages/cv/sidebar/sidebar.component';
import { EducacionComponent } from './pages/cv/sidebar/educacion/educacion.component';
import { IdiomasComponent } from './pages/cv/sidebar/idiomas/idiomas.component';
import { InteresesComponent } from './pages/cv/sidebar/intereses/intereses.component';
import { IntroSideComponent } from './pages/cv/sidebar/intro-side/intro-side.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CvComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PanelComponent,
    IntroComponent,
    ExperienciaComponent,
    SkillsComponent,
    CursosComponent,
    SidebarComponent,
    EducacionComponent,
    IdiomasComponent,
    InteresesComponent,
    IntroSideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
