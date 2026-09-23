import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // testInterceptor(): void {

  // this.http.get('https://jsonplaceholder.typicode.com/posts/1')
  //   .subscribe(response => {

  //     console.log(response);

  //   });


    testErrorInterceptor(): void {

  this.http.get('https://jsonplaceholder.typicode.com/invalid-url')
    .subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log('Error received in component:', error);
      }
    });

}

}

