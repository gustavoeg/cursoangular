import { Injectable } from '@angular/core';
import {item} from '../../_modelo/item';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService {

  constructor() { }

  abstract getItems():Observable<item[]>;
}
