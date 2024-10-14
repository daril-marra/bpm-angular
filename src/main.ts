import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'hammerjs';

async function enableMocking() {
  //TODO: do this only for local development environment

  const { worker } = await import('./mocks/browser')
  return worker.start()
}

const bootstrap = () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

enableMocking()
  .finally(bootstrap);


