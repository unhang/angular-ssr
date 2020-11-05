import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import {
  HttpHeaderResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {}

  submit(f: NgForm) {
    if (isPlatformServer(this.platformId)) {
      console.log('running on server');
    }
    this.authService
      .signin(f.value)
      .subscribe(({ headers, body, status, statusText, url, clone }) => {
        console.log(headers.getAll('set-cookie')); // headers.lazyInit
      });
  }
}
