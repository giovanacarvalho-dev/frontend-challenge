import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Address } from './models/address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindByCepService {
  private url = environment.api
  constructor(private readonly httpClient: HttpClient) { }

  findAddress = (cep: String): Observable<Address> => {
    const address = this.httpClient.get<Address>(`${this.url}/${cep}`)
    console.log(address)
    return address
  }
}
