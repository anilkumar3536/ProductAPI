import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data:any=[]

  constructor(public ts:DataService, public router:Router){}

  ngOnInit(){
    this.ts.getData().subscribe((res)=>{
      this.data=res;
    })
  }

  productView(product:any){
    this.router.navigate([`/home/${product.id}`])
  }
}
