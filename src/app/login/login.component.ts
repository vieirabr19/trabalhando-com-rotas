import { Component, OnInit } from '@angular/core';
import { Usuario } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    this.loginService.fazerLogin(this.usuario);
  }

}
