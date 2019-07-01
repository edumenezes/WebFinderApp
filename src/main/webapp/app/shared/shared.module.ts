import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WebFinderAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [WebFinderAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [WebFinderAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebFinderAppSharedModule {
  static forRoot() {
    return {
      ngModule: WebFinderAppSharedModule
    };
  }
}
