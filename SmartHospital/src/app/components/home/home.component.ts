import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  user$ = this.authService.currentUser$;
  sidenav: any;
  serv :any;
  router: any;
  
 

  constructor(  public authService: AuthenticationService,private observer: BreakpointObserver) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    }
    routeMain(){
      
    }
    logout() {
      this.authService.logout().subscribe(() => {
        this.router.navigate(['/login']);
      });
    }
  }

