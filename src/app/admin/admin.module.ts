import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { PostPageComponent } from './post-page/post-page.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import {AlertService} from './service/alert.service';
import {AuthGuard} from './service/admin.auth.guard';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    PostPageComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [AlertService, AuthGuard],
  exports: [RouterModule]
})
export class AdminModule {

}
