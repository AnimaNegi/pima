import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/core/components/page-not-found/page-not-found.component';
import { coreRoutes } from './modules/core/core-routing.module';
import { CoreModule } from './modules/core/core.module';
import { sharedRoutes } from './modules/shared/shared-routing.module';

const routes: Routes = [
  ...coreRoutes,
  ...sharedRoutes,
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
