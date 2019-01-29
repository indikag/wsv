import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { NgxBootstrapMModule } from './ngx-bootstrap-m/ngx-bootstrap-m.module';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EditServicesComponent } from './edit-services/edit-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicelistComponent,
    UserLoginComponent,
    EditServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    NgxBootstrapMModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
