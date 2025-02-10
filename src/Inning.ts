import { IBallOutcomeProcessor } from "../helper/BallOutcomeProcessorInterface";
import { ITeam } from "../helper/TeamInterface";
import { Shot } from "./Shot";

export class Inning{
    private TOTAL_OVER_BALLS : number;

    constructor(private battingTeam: ITeam, private bowlingTeam: ITeam, private overs: number, private ballOutcomeProcessor : IBallOutcomeProcessor) {
        this.TOTAL_OVER_BALLS = overs * 6;
    }
    getBattingTeam(){
        return this.battingTeam;
    }
    getBowlingTeam(){
        return this.bowlingTeam;
    }
    play(){
        let currentBallCount = 1;
        let batsman = this.battingTeam.getNextBatsman();
        let bowler = this.bowlingTeam.getNextBowler();
        
        while(currentBallCount <= this.TOTAL_OVER_BALLS && batsman && bowler){
            const shot = new Shot();
            const runs = shot.getRuns();
            const fantasyPoints = shot.getFantasyPoints();

            if(runs === 0){ // dotball
                this.ballOutcomeProcessor.processDotBall(bowler, this.bowlingTeam, fantasyPoints);
            }
            else if(runs === -1){ // wicket
                this.ballOutcomeProcessor.processWicket(batsman, bowler, this.battingTeam, this.bowlingTeam, fantasyPoints);
                batsman = this.battingTeam.getNextBatsman();
            }
            else{
                this.ballOutcomeProcessor.processNormalBall(runs, fantasyPoints, batsman, bowler, this.battingTeam, this.bowlingTeam);
            }

            batsman?.increaseBallsPlayed();
            currentBallCount++;
            if(currentBallCount % 6 == 0 && currentBallCount < this.TOTAL_OVER_BALLS){
                bowler.setIsPlayed();
                bowler = this.bowlingTeam.getNextBowler();
            }
        }
    }
}