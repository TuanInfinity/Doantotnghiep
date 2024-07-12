import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: User[] = 
  [
    new User('tuanba','123456'),
    new User('tuancia','123456'),
    new User('tuanfbi','123456'),
  ];
// Hàm sử dụng để lấy danh sách user
  getAllUser(): User[]{
    return this.users;
  }

  //Cú pháp forEach trong Angular
  // tên mảng. forEach(items =>)
  //logic của vòng lặp đối tượng;

  // Hàm sử dụng để login vào hệ thống;
  loginService(user: User): string{
    debugger
    let check = false
    this.users.forEach(u => {
      if(user.username === u.username && user.password === u.password){
        check = true;
      }
    }
    )
    if(check){
      return'Đăng nhập thành công';
    }
    return 'Đăng nhập thất bại';
  }

  constructor() { }
}
