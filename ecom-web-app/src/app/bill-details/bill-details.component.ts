import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent {

  billDetails : any;
  billID! : number;

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) {
    this.billID = route.snapshot.params['billID'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8888/BILLING-SERVICE/fullBill/"+this.billID).subscribe({
      next : (data)=>{
        this.billDetails = data;
      },
      error : (err)=>{}
    });
  }

}
