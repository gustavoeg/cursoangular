import { Component, OnInit } from '@angular/core';
import {item} from '../../_modelo/item';
import {MockItemsService} from '../_services/mock-items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items:item[];
  //service: MockItemsService;
  
  constructor(private service:MockItemsService) {
  	//this.service = new MockItemsService();
  	//this.service.getItems
  	this.updateLocalItems();
  }

  updateLocalItems(){
  	this.service.getItems().subscribe(items => this.items = items);
  }

  ngOnInit() {
  }

  onRemove(item: item){
  	//this.items =  this.items.filter(it => it !== item);
  	this.service.remove(item).subscribe(items => this.items = items);
  }

}
