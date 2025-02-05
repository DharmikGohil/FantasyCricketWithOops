import { Inning } from "./Inning";
import { Team } from "./Team";

export class Match{
    private team1! : Team;
    private team2! : Team;
    private tossWinner! : string;

    startMatch(){
        this.toss();
        console.log(`Toss won by ${this.tossWinner}`);
        const inning1 = new Inning(this.tossWinner === this.team1.getName() ? this.team1 : this.team2, this.tossWinner === this.team1.getName() ? this.team2 : this.team1);
        inning1.play();
        

    }
    
    private toss(){
        this.tossWinner = Math.random() > 0.5 ? this.team1.getName() : this.team2.getName();
    }
}