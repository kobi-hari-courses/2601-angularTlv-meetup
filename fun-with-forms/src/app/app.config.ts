import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideSignalFormsConfig } from '@angular/forms/signals';
import { NG_STATUS_CLASSES } from '@angular/forms/signals/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    provideSignalFormsConfig({
      // classes: NG_STATUS_CLASSES, 
      classes: {
        'invalid': ctrl => ctrl.state().invalid(), 
        'touched': ctrl => ctrl.state().touched(), 
        'marked-invalid': ctrl => ctrl.state().invalid() && ctrl.state().touched()
      }
    })
  ]
};
