import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ArchwizardModule } from 'angular-archwizard';
import { NgSelectModule} from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap';
import { EditServicesComponent } from './edit-services/edit-services.component';
import { ServiceDefineComponent } from './service-define/service-define.component';
import { ServiceLogComponent } from './service-log/service-log.component';
import { ComplexFormatComponent } from './service-define/form-templates/complex-format/complex-format.component';
import { SimpleFormatComponent } from './service-define/form-templates/simple-format/simple-format.component';
import { MethodComponent } from './services/method/method.component';
import { DataService } from './data.service';
import { AlertComponent } from './util/alert/alert.component';
import { AlertService } from './util/alert/alert.service';
import { BasicRequest } from './util/basic-request';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicelistComponent,
    UserLoginComponent,
    HomeComponent,
    EditServicesComponent,
    ServiceDefineComponent,
    ServiceLogComponent,
    ComplexFormatComponent,
    SimpleFormatComponent,
    MethodComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    TabsModule.forRoot(),
    // AlertModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ArchwizardModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [
    DataService,
    AlertService,
    {
			provide: HTTP_INTERCEPTORS,
			useClass: BasicRequest,
			multi: true
		}
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
