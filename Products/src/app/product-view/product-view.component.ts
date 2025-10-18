import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  itemId:any;
  data:any=[];
  list:any
constructor(private route:ActivatedRoute, private ts:DataService ){}
ngOnInit(): void {
this.itemId = this.route.snapshot.paramMap.get('id')?.trim()
this.ts.getData().subscribe((res) => {
    this.data = res.filter((item: any) => item.id.toString().trim() === this.itemId);
    console.log(this.data);
  });



}
}
