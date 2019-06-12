import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Injectable()
export class BaseService {

  constructor() { }

  protected serviceError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(error);
  }
}
