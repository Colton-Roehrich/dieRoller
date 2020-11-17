import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  


  public getRandomNumber(topBound: number){
    return Math.floor(Math.random() * Math.floor(topBound)) +1;
  }

  

  constructor() { }
}
