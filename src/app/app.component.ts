import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    users: Array<any> = [];

    constructor(private http: Http) {

    }

    ngOnInit() {
        this.http.get('/users')
            .subscribe(
                (users: any) => {
                    this.users = users.json();
                }
            )
    }


}
