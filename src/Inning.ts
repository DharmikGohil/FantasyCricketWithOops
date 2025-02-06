import { IPlayer } from "../helper/PlayerInterface";
import { ITeam } from "../helper/TeamInterface";
import { BallOutcomeProcessor } from "./BallOutcomeProcessor";
import { PointsCalculator } from "./PointsCalculator";
import { Shot } from "./Shot";

export class Inning{
    private readonly TOTAL_OVER_BALLS = 30;

    constructor(private battingTeam: ITeam, private bowlingTeam: ITeam) {
        
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

        while(currentBallCount <= this.TOTAL_OVER_BALLS && batsman){
            const shot = new Shot();
            const runs = shot.getRuns();
            const fantPoints = shot.getFantasyPoints();

            const isOut = this

            currentBallCount++;
            batsman?.increaseBallsPlayed();
            if(currentBallCount % 6 == 0){
                bowler = this.bowlingTeam.getNextBowler();
                bowler?.setIsPlayed();
            }
        }
    }

    private processDelivery(runs : number, fantasyPoints : number, batman : IPlayer, bowler : IPlayer) : void{
        const ballOutcomeProcessor = new BallOutcomeProcessor();
        const pointsCalculator =  new PointsCalculator();
        if(runs === 0){
            let points = pointsCalculator.calculatePoints(fantasyPoints, bowler);
            ballOutcomeProcessor.processDotBall(bowler, this.bowlingTeam, points);
        }
        else if(runs === -1){
            let points = pointsCalculator.calculatePoints(fantasyPoints, bowler);
            ballOutcomeProcessor.processWicket(batman, bowler, this.battingTeam, this.bowlingTeam, fantasyPoints);
        }
        else{
            ballOutcomeProcessor.processNormalBall(batman, bowler, this.battingTeam, this.bowlingTeam, fa)
        }
    }
}