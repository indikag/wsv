import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: []
})
export class NgxBootstrapMModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlertModule
    }
  }
}
