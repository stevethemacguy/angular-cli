import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CurrentUserService {

  // Use to test with the mock service
  private baseUrl = 'api/currentUser'; // Mock URL
  constructor(private http: HttpClient) { }

  getUser(id: number): Promise<any> {
    const url = `${this.baseUrl}/${id}`;
    console.log('Getting user from ' + url);
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // Testing only
    return Promise.reject(error.message || error);
  }
}
