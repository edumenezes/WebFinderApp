import { NgModule } from '@angular/core';

import { WebFinderAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [WebFinderAppSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [WebFinderAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WebFinderAppSharedCommonModule {}
