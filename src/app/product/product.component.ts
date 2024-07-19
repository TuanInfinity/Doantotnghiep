import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  

  product: any[] = [];
  productDetails: any[] = [];

  check: boolean = false;

  titleButton: string = 'Detail'

  productIselected: any ;
/**
 * 
 * Hàm thực hiện xem chi tiết các sản phẩm con của sản phẩm
 */
  detail(productID: any) {
    this.product.forEach(p => {
      if(p.id == productID) {
        this.productIselected = p;
        this.productDetails = p.productDetailDTOS;
      }
    })
    }

  loadProducts() {
    this.productService.getAllProduct().subscribe({
      next: ((value: any[]) => { // dấu {} thực hiện nhiều lệnh
        this.product = value;
        console.log(value)
        // this.productDetails = this.product[0].productDetailDTOS;
        // console.log(this.productDetails);
      }
      )
    })

    
  }

  ngOnInit(): void {
    this.loadProducts()
    
  }

  constructor(
    private productService: ProductService
  ) {}

  
}
