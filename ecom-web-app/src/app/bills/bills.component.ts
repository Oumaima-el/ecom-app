import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {

  bills : any;
  customerID! : number;

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) {
    this.customerID = route.snapshot.params['customerID'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8888/BILLING-SERVICE/bills/search/byCustomerID?customerID="+this.customerID).subscribe({
      next : (data)=>{
        this.bills = data;
      },
      error : (err)=>{}
    });
  }

  getBillDetails(b: any) {
    this.router.navigateByUrl("/bill-details/"+b.id);
  }

}
