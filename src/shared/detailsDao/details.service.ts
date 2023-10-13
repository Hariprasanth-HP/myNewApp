import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { catchError, map } from  'rxjs/operators';
import { Observable, ObservableInput, throwError } from 'rxjs';
@Injectable()

export class LogService {
    constructor(private httpClient: HttpClient) { }
    public sendFormData(url:any,formData:any):Observable<any> {
        return this.httpClient.post<any>(url,
        //Replace the form data with the hardcoded json object with your endpoint 

         formData
        // {"name":"test","salary":"123","age":"23"}
        , {
          observe: 'response'
        }).pipe(catchError(this.handleError))

        
    }
    private handleError(error: HttpErrorResponse) {
      if (error.status === 401 || error.status === 403) {
        // return error
      }
      return throwError(error);
    }
}