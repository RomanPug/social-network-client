import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HttpService {
  private _headers: HttpHeaders;

  constructor(private _http: HttpClient) {}

  post(url: string, data: any): Promise<any> {
    this._headers.append('Access-Control-Allow-Origin', '*');

    return this._http.post(url, data, {headers: this._headers}).toPromise()
      .then((response: Response) => {
        return response;
      });
  }
}
