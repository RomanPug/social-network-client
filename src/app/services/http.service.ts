import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {}

  post(url: string, data: any): Promise<any> {
    return this._http.post(url, data).toPromise()
      .then((response: Response) => {
        return response;
      });
  }

    // get(url: string, data: any): Promise<any> {
    //     return this._http.get(url, data).toPromise()
    //         .then((response: Response) => {
    //             return response;
    //     });
    // }
}
