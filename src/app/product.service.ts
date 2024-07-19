import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Muốn call api thì phia có đường dẫn
  private apiGetAllProduct: string = 'http://localhost:8081/api/v1/product/get-all';

  // Muốn gọi được đường dẫn trả về dữ liệu thì phải DI HttpCilent

  constructor(
    private http: HttpClient
  ) {}
// Observable là đối tượng stream of value khi mà nó phát ra dữ liệu thì các hàm thực hiện đăng kí nó sẽ được khởi chạy lại
  getAllProduct(): Observable<any[]>{
    return this.http.get<any[]>(this.apiGetAllProduct);
  }
}
