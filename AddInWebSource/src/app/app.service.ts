import {Injectable, Pipe, PipeTransform} from "@angular/core";
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalConstants {
    constructor() {
    }

    public readonly API_ENDPOINT : string = "https://localhost/WebApi/";

    public readonly apiUrl = {
        getTest : {
            alltest : "api/test/"
        }
    }
}

@Injectable()
export class AppServices {

    constructor(private _http : Http, public constants : GlobalConstants){
    }

    httpGet(url : string, obj? : any) : Observable<any> {

        let headers = this.getGlobalHeaders();        
                
        let options = new RequestOptions({headers: headers});

        if (obj)
        {
            let param = this.objToSearchParams(obj);
            options.search = param;
        }

        let urlendpoint = this.constants.API_ENDPOINT + url;

        return this._http.get(urlendpoint, options)
                .map(this.extractData)
                .catch(this.handleError);

    }
    
    httpGetMock(url : string) : Observable<any> {
        return this._http.get(url)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    httpPost( url: string, jsonobject  : string ) : Observable<any> {

        let headers = this.getGlobalHeaders();
        let options = new RequestOptions({headers: headers});

        let urlendpoint = this.constants.API_ENDPOINT + url;        

        return this._http.post(urlendpoint, jsonobject, options)
                .map(this.extractData)
                .catch(this.handleError);;

    }

    httpPostMock( url: string ) : Observable<any> {

        let headers = this.getGlobalHeaders();
        let options = new RequestOptions({headers: headers});

        let urlendpoint = url;        

        return this._http.post(urlendpoint, options)
                .map(this.extractData)
                .catch(this.handleError);;

    }

    private getGlobalHeaders() : Headers
    {
        let ret : Headers = new Headers();
        ret.append("X-Requested-With", "XMLHttpRequest");
        ret.append("Content-Type", "application/json");
        
        return ret;
    }

    private objToSearchParams(obj): URLSearchParams{
        let params: URLSearchParams = new URLSearchParams();
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                params.set(key, obj[key]);
            }
                
        }
        return params;
    }

    private extractData(res: Response){
        if (res.text()) {
            return res.json();
        } else {
            return {};
        }           
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            if (error.status == 401 || error.status == 403) {
                console.log("Error 401 or 403");
            }   

            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } 
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }    
}