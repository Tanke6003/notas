import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Config } from '../config';
import { Observable } from "rxjs";

@Injectable()
export class EditNoteService {

    apiEndpoint: string;

    constructor(private _http: HttpClient, private config: Config) {
        this.apiEndpoint = this.config.API_MAIN;
    }
    getNote(data): Observable<any> {
        return this._http.post(this.apiEndpoint + 'edit-note/getNote',data);
    }
    editNote(data):Observable<any>{
        return this._http.post(this.apiEndpoint + 'edit-note/editNote',data);
    }
}