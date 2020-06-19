import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class AuthService {
    constructor() {}
    isSignIn: boolean = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.isSignIn);
                }, 10);
            }
        );

        return promise;
    }

    signIn() {
        this.isSignIn = true;
    }

    signUp() {
        this.isSignIn = false;
    }
}