import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      console.log('AuthGuard');
      return this.verficarAcesso();
    }
    
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      console.log('CanLoad: verificando se o usuário pode acessar o código do modulo');
      return this.verficarAcesso();
    }

    private verficarAcesso(){
      if(this.loginService.usuarioEstaAutenticado()){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
}
