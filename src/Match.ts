import { Inning } from "./Inning";
import { ShowInningSummary } from "./ShowInningSummary";
import { Team } from "./Team";

export class Match{
    private team1! : Team;
    private team2! : Team;
    private tossWinner! : string;
    private inningSummary : ShowInningSummary;
    constructor(team1: Team, team2 : Team){
        this.team1 = team1;
        this.team2 = team2;
        this.inningSummary = new ShowInningSummary();
    }

    play(){
        this.toss();
        console.log(`Toss won by ${this.tossWinner}`);
        const battingTeam = this.tossWinner === this.team1.getName() ? this.team1 : this.team2;
        const bowlingTeam = this.tossWinner === this.team1.getName() ? this.team2 : this.team1;

        battingTeam.setTossWinner();
        const inning1 = new Inning(battingTeam, bowlingTeam);
        inning1.play();
        console.log("---------------FIRST INNING SUMMARY------------------")
        this.inningSummary.displayMatchSummary(battingTeam, bowlingTeam)

        const inning2 = new Inning(bowlingTeam, battingTeam);
        inning2.play();
        console.log("--------------SECOND INNING SUMMARY----------------")
        this.inningSummary.displayMatchSummary(bowlingTeam, battingTeam);
    }
    
    private toss(){
        this.tossWinner = Math.random() > 0.5 ? this.team1.getName() : this.team2.getName();
    }
}