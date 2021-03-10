import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MainService {
  constructor(
    private http: HttpClient
  ) { }

  getOrders() {
    return this.http.get('https://localhost:5001/api/orders');
  }

  placeOrder(order: any) {
    return this.http.post('https://localhost:5001/api/orders', order);
  }
}
