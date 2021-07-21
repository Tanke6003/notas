import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Config } from '../config';
import { Observable } from "rxjs";

@Injectable()
export class DetallesNotaService {

    apiEndpoint: string;

    constructor(private _http: HttpClient, private config: Config) {
        this.apiEndpoint = this.config.API_MAIN;
    }
    showDetallesNota(data): Observable<any> {
        return this._http.post(this.apiEndpoint + 'detalles-nota',data);
    }
    deleteNote(data): Observable<any> {
        return this._http.post(this.apiEndpoint + 'detalles-nota/delete',data);
    }

}