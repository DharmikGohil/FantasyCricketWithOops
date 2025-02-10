import { IPlayer } from "../helper/PlayerInterface";
import { IPointsCalculator } from "../helper/PointsCalculatorInterface";
import { IScoreManager } from "../helper/ScoreManagerInterface";
import { ITeam } from "../helper/TeamInterface";

export class ScoreManager implements IScoreManager{
    private pointsCalculator: IPointsCalculator;

    constructor(pointsCalculator : IPointsCalculator){
        this.pointsCalculator = pointsCalculator;
    }
    addRuns(runs: number, batsman: IPlayer, battingTeam : ITeam): void {
        batsman.addRuns(runs);
        battingTeam.addRuns(runs);
    }
    
    addBatsmanFantasyPoints(fantasyPoints: number, batsman : IPlayer, battingTeam : ITeam): void {
        let batsmanFantPoints = this.pointsCalculator.calculatePoints(batsman, fantasyPoints);
        batsman.addFantasyPoints(batsmanFantPoints);
        battingTeam.addFantasyPoints(batsmanFantPoints);
    }

    addBowlerFantasyPoints(fantasyPoints: number, bowler: IPlayer, bowlingTeam: ITeam): void {
        let bowlerFantasyPoints = this.pointsCalculator.calculatePoints(bowler, fantasyPoints); 
        bowler.addFantasyPoints(bowlerFantasyPoints);
        bowlingTeam.addFantasyPoints(bowlerFantasyPoints);
    }

    handleDuckPenalty(batman: IPlayer, battingTeam : ITeam): void {
        let paneltyPoints = this.pointsCalculator.calculateDuckPaneltyPoints(batman);
        batman.addFantasyPoints(-paneltyPoints);
        battingTeam.addFantasyPoints(-paneltyPoints);
    }
}