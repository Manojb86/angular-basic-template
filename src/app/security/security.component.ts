import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-security',
    templateUrl: './security.component.html',
    styleUrls: ['security.component.scss']
})
export class SecurityComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute){}

    ngOnInit(){}

    onSignUp() {
        this.router.navigate(['/signup']);
    }
}