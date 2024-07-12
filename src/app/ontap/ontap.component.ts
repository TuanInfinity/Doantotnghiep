import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ontap',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ontap.component.html',
  styleUrl: './ontap.component.scss'
})
export class OntapComponent implements OnInit, OnDestroy {

//Vòng đời component
/***  Khởi tạo tất cả các biến toàn cục từ trên xuống dưới;
* -> contructor (DI) Depenedencies Injection;
* -> ngOnInit() sẽ đưuọc khởi chạy sau cùng sau khi component hoàn thiện việc khởi tạo
* 
* -> Khi thực hiện hủy 1 component thì sẽ thực hiện nhảy vào
* -> ngDestroy()
*/


ngOnInit(): void {
  // this.deQuyChuyenMau();
  this.productName="Con C"
}

productName: string = "Tinh dầu cho Nhon Nhu";
constructor(
  private http: HttpClient
){
  this.productName = "Sửa rửa mặt Nhon Nhu"
}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


productPrice: number = 100;
productImage: string = "https://smilemedia.vn/wp-content/uploads/2022/08/chup-anh-san-pham-tai-HCM.jpg";

a:string = 'green';
b:string = 'yellow';
c:string = '';

//hàm đổi card sang các màu
changeColorYellow(): void{
  this.c = this.b;
}
changeColorGreen(): void{
  this.c = this.a;
}
//đề quy chuyển màu
i = 0;
deQuyChuyenMau(): void{
  
  //nếu i = 0 thì chuyển màu sang xanh
  if(this.i === 0){
    this.c = this.b;
    this.i++;
  }
  //nếu i = 1 thì chuyển màu sang vàng
  else {
    this.c = this.a;
    this.i = 0;
  }
  setTimeout(() => this.deQuyChuyenMau(), 1000);
}

}
