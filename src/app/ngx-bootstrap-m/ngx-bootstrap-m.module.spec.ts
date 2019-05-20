import { NgxBootstrapMModule } from './ngx-bootstrap-m.module';

describe('NgxBootstrapMModule', () => {
  let ngxBootstrapMModule: NgxBootstrapMModule;

  beforeEach(() => {
    ngxBootstrapMModule = new NgxBootstrapMModule();
  });

  it('should create an instance', () => {
    expect(ngxBootstrapMModule).toBeTruthy();
  });
});
