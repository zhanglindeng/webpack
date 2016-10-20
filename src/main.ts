import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './less/index.less';
import 'font-awesome/css/font-awesome.min.css';
require('expose?$!jquery');
import 'bootstrap/dist/js/bootstrap.min.js';
import 'rxjs';
import 'toastr/build/toastr.min.css';
import 'toastr';
import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from './app/app.module'

if (PRODUCTION) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
