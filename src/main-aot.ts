import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './less/index.less';
import 'font-awesome/css/font-awesome.min.css';
require('expose?$!jquery');
import 'bootstrap/dist/js/bootstrap.min.js';
import 'rxjs';
import 'toastr/build/toastr.min.css';
import 'toastr';

import {enableProdMode} from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from "./app/app.module.ngfactory";

if (PRODUCTION) {
    enableProdMode();
}
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
