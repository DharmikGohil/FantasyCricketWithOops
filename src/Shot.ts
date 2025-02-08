const shotScoringRule = [
    { run: 1, fantPoints: 1 },
    { run: 2, fantPoints: 2 },
    { run: 3, fantPoints: 3 },
    { run: 4, fantPoints: 5 },
    { run: 6, fantPoints: 8 },
    { run: 0, fantPoints: 1 }, // dot ball
    { run: -1, fantPoints: 10 }, // wicket
  ];
   
  
export class Shot{
    private index : number;
    constructor() {
        this.index = this.generateRandomIndex()
    }
    getRuns(){
        return shotScoringRule[this.index].run;
    }
    getFantasyPoints(){
        return shotScoringRule[this.index].fantPoints;
    }
    private generateRandomIndex(){
        return Math.floor(Math.random() * shotScoringRule.length);
    }
    
}