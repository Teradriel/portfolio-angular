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
import { NombreComponent } from './pages/panel/nombre/nombre.component';
import { ApellidoComponent } from './pages/panel/apellido/apellido.component';
import { EmailComponent } from './pages/panel/email/email.component';
import { TelefonoComponent } from './pages/panel/telefono/telefono.component';
import { PaisComponent } from './pages/panel/pais/pais.component';
import { CiudadComponent } from './pages/panel/ciudad/ciudad.component';
import { DireccionComponent } from './pages/panel/direccion/direccion.component';
import { NacimientoComponent } from './pages/panel/nacimiento/nacimiento.component';
import { SexoComponent } from './pages/panel/sexo/sexo.component';
import { EstadoCivilComponent } from './pages/panel/estado-civil/estado-civil.component';
import { ImagenComponent } from './pages/panel/imagen/imagen.component';
import { PresentacionComponent } from './pages/panel/presentacion/presentacion.component';
import { UsuarioComponent } from './pages/panel/usuario/usuario.component';
import { EstudiosComponent } from './pages/panel/estudios/estudios.component';
import { IdiomasPanelComponent } from './pages/panel/idiomas-panel/idiomas-panel.component';
import { InteresesPanelComponent } from './pages/panel/intereses-panel/intereses-panel.component';
import { ExpPanelComponent } from './pages/panel/exp-panel/exp-panel.component';
import { SkillPanelComponent } from './pages/panel/skill-panel/skill-panel.component';
import { CursosPanelComponent } from './pages/panel/cursos-panel/cursos-panel.component';
import { MensajesPanelComponent } from './pages/panel/mensajes-panel/mensajes-panel.component';

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
    NombreComponent,
    ApellidoComponent,
    EmailComponent,
    TelefonoComponent,
    PaisComponent,
    CiudadComponent,
    DireccionComponent,
    NacimientoComponent,
    SexoComponent,
    EstadoCivilComponent,
    ImagenComponent,
    PresentacionComponent,
    UsuarioComponent,
    EstudiosComponent,
    IdiomasPanelComponent,
    InteresesPanelComponent,
    ExpPanelComponent,
    SkillPanelComponent,
    CursosPanelComponent,
    MensajesPanelComponent,
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
