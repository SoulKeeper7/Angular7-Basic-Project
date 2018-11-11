import { Component, OnInit } from '@angular/core';
import{DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:object;
  h1style: boolean=false;
  constructor(private data:DataService) { }

  ngOnInit() { 
    this.data.genericFunction().subscribe(
      data=>{
        this.users=data
        console.log(this.users);
  }    
  );
  }

  firstClick()
  {
    this.data.genericFunction().subscribe(
      data=>{
        this.users=data
        console.log(this.users);

  }

}
