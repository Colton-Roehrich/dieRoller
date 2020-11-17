import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RandomService} from '../random.service';
import {Roll} from '../roll';
import {RollsService} from '../rolls.service';
@Component({
  selector: 'app-select-die',
  templateUrl: './select-die.component.html',
  styleUrls: ['./select-die.component.css']
  
})
export class SelectDieComponent implements OnInit {
  random: number;
  dieType: number;
  //going to switch pastRolls from number array to Roll array---will also need to change methods below
  
  rolls: Roll [] = [];
  getRandom(num: string): void{
    this.dieType = parseInt(num,10);
    this.random = this.RandomService.getRandomNumber(this.dieType);
    
    this.addNextRoll();
    this.updateRolls();
  }
  addNextRoll(): void{
    let newRoll = new Roll(this.random, this.dieType);
    this.RollsService.addRoll(newRoll);
  }
  clearPastRolls(): void {
    this.RollsService.clearRoll();
  }
  getPastRolls(): Roll []{
    return this.RollsService.returnRolls();
  }

  updateRolls(): void{
    this.rolls = this.getPastRolls();
  }
  constructor(private RandomService: RandomService, private RollsService: RollsService) { }
  
  ngOnInit(): void {
   
  }

}
