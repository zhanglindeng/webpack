import {Component} from "@angular/core";

@Component({
    selector: 'app',
    templateUrl: './app.html',
    styleUrls: ['./app.less']
})

export class AppComponent {
    toastr(msg: any) {

        let toastr = require('toastr');
        toastr.success(msg, 'title', {closeButton: true});
    }

    toastr2(msg: any) {

        let toastr = require('toastr');
        toastr.success(msg, 'title', {closeButton: true});
    }
}