import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Config } from '../config';
import { Observable } from "rxjs";

@Injectable()
export class SignInService {

    apiEndpoint: string;

    constructor(private _http: HttpClient, private config: Config) {
        this.apiEndpoint = this.config.API_MAIN;
    }
    signIn(data): Observable<any> {
        return this._http.post(this.apiEndpoint +'authUser/signIn',data);
    }

}