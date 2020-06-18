import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-customer-dashboard',
    templateUrl: './customer-dashboard.component.html',
    styleUrls: ['customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit{
    
    customer: {id: number, name: string, status: string} = {id: 1, name: "manoj", status: "active"};

    constructor(private route: ActivatedRoute) {}

    ngOnInit() : void {
        this.route.params.subscribe( (params: Params) => {
            this.customer.id = params['id'];
            this.customer.name = params['name'];
        });

        this.route.queryParams.subscribe((queryParams: Params) => {
            this.customer.status = queryParams['status'];
        })
    }

}