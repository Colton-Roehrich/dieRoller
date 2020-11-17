import { Injectable } from '@angular/core';
import {Roll} from './roll';
@Injectable({
  providedIn: 'root'
})
export class RollsService {
rolls: Roll [] = [];

addRoll(roll: Roll):void{
  this.rolls.push(roll);
}
clearRoll():void{
  this.rolls =[];
}
returnRolls(): Roll[]{
  return this.rolls;
}
  constructor() { }
}
