import { Injectable } from '@angular/core';
import {AbstractService} from '../_services/abstract.service';
import {item} from '../../_modelo/item';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractService{

	items: item[];

  constructor() {
  	super();
  	this.items = [
  	  	new item("Buy pendrives")
  	];
   }
   
   getItems():Observable<item[]> {
   	return new Observable((obs) => {obs.next(this.items);
   		obs.complete();
   	});
   };


   remove(item:item):Observable<item[]>{
   	//Console.log("borrando desde el servicio");
   	return new Observable((obs) =>{
   	this.items =  this.items.filter(it => it != item)
   	obs.next(this.items);
   	obs.complete();
   }
   );
   }

  addItem(item:item):Observable<item[]>{
     //Console.log("borrando desde el servicio");
     return new Observable((obs) =>{
     this.items.push(item);
     obs.next(this.items);
     obs.complete();
   }
   );
   }


}
