import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutUsComponent } from './pages/about-us/about-us';
import { ContactComponent } from './pages/contact/contact';
import { ReinsolComponent } from './pages/services/reinsol/reinsol';
import { PersaludComponent } from './pages/services/persalud/persalud';
import { SegprofeComponent } from './pages/services/segprofe/segprofe';
import { PymeComponent } from './pages/services/pyme/pyme';
import { PoliticasPrivacidad } from './pages/others/politicas-privacidad/politicas-privacidad';
import { PreguntasFrecuentes } from './pages/others/preguntas-frecuentes/preguntas-frecuentes';
import { TerminosCondiciones } from './pages/others/terminos-condiciones/terminos-condiciones';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nosotros', component: AboutUsComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'servicios/reinsol', component: ReinsolComponent },
    { path: 'servicios/persalud', component: PersaludComponent },
    { path: 'servicios/segprofe', component: SegprofeComponent },
    { path: 'servicios/pyme', component: PymeComponent },
    { path: 'politicas-privacidad', component: PoliticasPrivacidad },
    { path: 'preguntas-frecuentes', component: PreguntasFrecuentes },
    { path: 'terminos-condiciones', component: TerminosCondiciones },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
