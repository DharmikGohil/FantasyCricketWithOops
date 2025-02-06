import { IPlayer } from "../helper/PlayerInterface";
import { IScoreManager } from "../helper/ScoreManagerInterface";
import { ITeam } from "../helper/TeamInterface";
import { PointsCalculator } from "./PointsCalculator";

export class ScoreManager implements IScoreManager{

    addRuns(batsman: IPlayer, runs: number): void {
        batsman.addRuns(runs);
    }

    addFantasyPoint(fantasyPoints: number, batsman : IPlayer, bowler : IPlayer, battingTeam : ITeam, bowlingTeam : ITeam): void {
        let batsmanFantPoints = PointsCalculator.calculatePoints(batsman, fantasyPoints);
        let bowlerFantPoints = PointsCalculator.calculatePoints(bowler, fantasyPoints);
        batsman.addFantasyPoints(batsmanFantPoints);
        bowler.addFantasyPoints(bowlerFantPoints);
        battingTeam.addFantasyPoints(batsmanFantPoints);
        bowlingTeam.addFantasyPoints(bowlerFantPoints);
    }

    handleDuckPenalty(batman: IPlayer, fantasyPoints: number): void {
        
    }
}