import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {}

  post(url: string, data: any): Promise<any> {

    let header = new HttpHeaders({ 'Authorization': 'Bearer' + '2emYOBwPhmDM8D_c2Gcx' });
      return this._http.post(url, data, {headers: header}).toPromise()
      .then((response: Response) => {
        // return response;
        console.log(response);
      });
  }

    // get(url: string, data: any): Promise<any> {
    //     return this._http.get(url, data).toPromise()
    //         .then((response: Response) => {
    //             return response;
    //     });
    // }
}
