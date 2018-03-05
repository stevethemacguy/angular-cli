import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentUserService {

  private baseUrl = 'http://some-webservice/customers';
  constructor(private http: HttpClient) {


    getMockUsers(): Observable<MockUser[]> {
      return this.http.get(this.heroesUrl)
      // .do(data => console.log(data)) // eyeball results in the console
        .map(res => res.json())
        .catch(this.handleError);
  }

    // This get-by-id will 404 when id not found
    getMockUser(id: number): Observable<MockUser> {
      const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .map((r: Response) => r.json() as MockUser)
      .catch(this.handleError);
  }

  }

}
