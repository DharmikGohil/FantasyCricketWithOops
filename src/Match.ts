import { IBallOutcomeProcessor } from "../helper/BallOutcomeProcessorInterface";
import { IShowInningSummary } from "../helper/ShowInningSummaryInterface";
import { ITeam } from "../helper/TeamInterface";
import { Inning } from "./Inning";

export class Match{
    private tossWinner : string | null;
    private inningSummary : IShowInningSummary;
    private ballOutcomeProcessor : IBallOutcomeProcessor;
    constructor(private team1: ITeam,  private team2 : ITeam, inningSummary : IShowInningSummary , ballOutcomeProcessor : IBallOutcomeProcessor){
        this.inningSummary = inningSummary;
        this.ballOutcomeProcessor = ballOutcomeProcessor;
        this.tossWinner = null;
    }


    toss(){
        this.tossWinner = Math.random() > 0.5 ? this.team1.getName() : this.team2.getName();
    }
    playInnings(){
        if (!this.tossWinner) {
            throw new Error("toss of match has not been conducted. Call toss() before playInnings().");
        }
        console.log(`Toss won by ${this.tossWinner}`);
        const battingTeam = this.tossWinner === this.team1.getName() ? this.team1 : this.team2;
        const bowlingTeam = this.tossWinner === this.team1.getName() ? this.team2 : this.team1;

        battingTeam.setTossWinner();
        const inning1 = new Inning(battingTeam, bowlingTeam, this.ballOutcomeProcessor);
        inning1.play();
        console.log("---------------FIRST INNING SUMMARY------------------")
        this.inningSummary.displayMatchSummary(battingTeam, bowlingTeam)

        const inning2 = new Inning(bowlingTeam, battingTeam, this.ballOutcomeProcessor);
        inning2.play();
        console.log("--------------SECOND INNING SUMMARY----------------")
        this.inningSummary.displayMatchSummary(bowlingTeam, battingTeam);
    }

}