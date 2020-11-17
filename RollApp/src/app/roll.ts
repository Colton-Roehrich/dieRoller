export class Roll {
    outcome: number;
    dieType: number;
    
    constructor(out: number, die:number){
        this.outcome = out;
        this.dieType = die;
    }

    getOutCome(): number {
        return this.outcome;
    }

    getDieType(): number {
        return this.dieType;
    }
}
