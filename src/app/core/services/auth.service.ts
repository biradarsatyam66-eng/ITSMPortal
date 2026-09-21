import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = {
    _id: '1',
    name: 'Satyam',
    email: 'satyam@gmail.com',
    role: 'EMPLOYEE'
  };

  constructor() { }

  login(email: string, password: string): boolean {

    if (email === 'satyam@gmail.com' && password === '123456') {
      localStorage.setItem('user', JSON.stringify(this.user));
      localStorage.setItem('token', 'mock-jwt-token');

      return true;
    }

    return false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  
  getUserRole(): string | null {

  const user = localStorage.getItem('user');

  if (!user) {
    return null;
  }

  const userData = JSON.parse(user);

  return userData.role;
}
}
