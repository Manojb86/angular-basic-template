import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    
    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit(): void {        
    }

    onSignIn() {
        this.authService.signIn();
        setTimeout(() => {
            this.router.navigate(['organization']);            
        }, 20);
    }
}