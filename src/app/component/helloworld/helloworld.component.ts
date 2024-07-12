import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cilent } from '../../entity/cilent';

@Component({
  selector: 'app-helloworld',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './helloworld.component.html',
  styleUrl: './helloworld.component.scss'
})
export class HelloworldComponent implements OnInit {
  // Cac kieu du lieu co ban cua typeScript: boolean, number, [mang], string(chuoi), Array{},...
  xyz: string = "Tat ca tren doi la cut";
  abc: string = 'Duoi dat la phan';
  ert: string = `${this.xyz} ${this.abc}`;
  // Cach khai bao bien
  // Cu phap khai bao bien: ten bien: kieu du lieu = gan du lieu ban dau cho bien
  // Ham: tap hop cac du lieu, cu phap tao ham: ten ham(tham so truyen vao): kieu ham tra ve(void, string,...)
  n1: number=0;
  n2: number=0;
  add(a:number, b:number): number{
    alert(a + b);
    return a + b;
  }
  // Class --> ten Class 
  // Cu phap tao Class: ng generate class [ten class]
  Cilent: Cilent= {
    ten: 'Bui Anh Tuan',
    tuoi: 24,
    diachi: 'HN'
  }
  Cilent1: Cilent= {
    ten: 'Bui Anh Tuan',
    tuoi: 25,
    diachi: 'HN'
  }  
  Cilent2: Cilent= {
    ten: 'Bui Anh Tuan',
    tuoi: 26,
    diachi: 'HN'
  }  
  //for:each
  m1: Cilent[]=[];
  constructor(){

  }
  ngOnInit(): void {
    this.m1.push(this.Cilent);
    this.m1.push(this.Cilent1);
    this.m1.push(this.Cilent2);
  }
}
