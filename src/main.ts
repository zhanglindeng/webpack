import {AppComponent} from './app/app.component'

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './less/index.less';

import 'font-awesome/css/font-awesome.min.css';

require('expose?$!jquery');
import 'bootstrap/dist/js/bootstrap.min.js';

import 'toastr/build/toastr.min.css';
let toastr = require('toastr');

import 'jqueryui/jquery-ui.min.css';
// import 'jqueryui/jquery-ui.theme.min.css';
// import 'jqueryui/jquery-ui.structure.min.css';
require('jqueryui');

let appComponent = new AppComponent();
appComponent.log('webpack');

console.log('PRODUCTION', PRODUCTION);
toastr.success('Have fun storming the castle!', 'Miracle Max Says');

$("#datepicker").datepicker();
