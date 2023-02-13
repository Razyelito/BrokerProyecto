import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./pages/ofertas/ofertas.module').then( m => m.OfertasPageModule)
  },
  {
    path: 'planes',
    loadChildren: () => import('./pages/planes/planes.module').then( m => m.PlanesPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./pages/contact-uc/contact-uc.module').then( m => m.ContactUcPageModule)
  },
  {
    path: 'cotizador',
    loadChildren: () => import('./pages/cotizador/cotizador.module').then( m => m.CotizadorPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'main-client',
    loadChildren: () => import('./pages/main-client/main-client.module').then( m => m.MainClientPageModule)
  },
  {
    path: 'cambio-contrasena',
    loadChildren: () => import('./pages/cambio-contrasena/cambio-contrasena.module').then( m => m.CambioContrasenaPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./pages/contactanos/contactanos.module').then( m => m.ContactanosPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./pages/tips/tips.module').then( m => m.TipsPageModule)
  },
  {
    path: 'reembolsos',
    loadChildren: () => import('./pages/reembolsos/reembolsos.module').then( m => m.ReembolsosPageModule)
  },
  {
    path: 'eventos-medicos',
    loadChildren: () => import('./pages/eventos-medicos/eventos-medicos.module').then( m => m.EventosMedicosPageModule)
  },
  {
    path: 'centros-medicos',
    loadChildren: () => import('./pages/centros-medicos/centros-medicos.module').then( m => m.CentrosMedicosPageModule)
  },
  {
    path: 'evento-medico',
    loadChildren: () => import('./pages/evento-medico/evento-medico.module').then( m => m.EventoMedicoPageModule)
  },
  {
    path: 'misplanes',
    loadChildren: () => import('./pages/misplanes/misplanes.module').then( m => m.MisplanesPageModule)
  },
  {
    path: 'miplan',
    loadChildren: () => import('./pages/miplan/miplan.module').then( m => m.MiplanPageModule)
  },
  {
    path: 'tarjetas',
    loadChildren: () => import('./pages/tarjetas/tarjetas.module').then( m => m.TarjetasPageModule)
  },
  {
    path: 'centro-medico',
    loadChildren: () => import('./pages/centro-medico/centro-medico.module').then( m => m.CentroMedicoPageModule)
  },
  {
    path: 'sugerencias',
    loadChildren: () => import('./pages/sugerencias/sugerencias.module').then( m => m.SugerenciasPageModule)
  },
  {
    path: 'solicitud-reembolso',
    loadChildren: () => import('./pages/solicitud-reembolso/solicitud-reembolso.module').then( m => m.SolicitudReembolsoPageModule)
  },




 








];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
