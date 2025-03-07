import { IBallOutcomeProcessor } from "../helper/BallOutcomeProcessorInterface";
import { IPlayer } from "../helper/PlayerInterface";
import { IScoreManager } from "../helper/ScoreManagerInterface";
import { ITeam } from "../helper/TeamInterface";


export class BallOutcomeProcessor implements IBallOutcomeProcessor{
    private scoreManager: IScoreManager;
    constructor(scoreManager : IScoreManager){
        this.scoreManager = scoreManager;
    }
    processDotBall(bowler : IPlayer, bowlingTeam : ITeam, fantasyPoints : number): void {
        this.scoreManager.addBowlerFantasyPoints(fantasyPoints, bowler, bowlingTeam);
    }
    
    processWicket(batsman: IPlayer, bowler: IPlayer, battingTeam: ITeam, bowlingTeam: ITeam, fantasyPoints: number): void {
        bowler.increaseTakenWicket();
        battingTeam.increaseFallenWickets();
        
        batsman.setIsPlayed();
        batsman.setOutBy(bowler.getName());
    
        this.scoreManager.handleDuckPenalty(batsman, battingTeam);
        this.scoreManager.addBowlerFantasyPoints(fantasyPoints, bowler, bowlingTeam);
        
    }
    processNormalBall(runs : number, fantasyPoints : number, batsman: IPlayer, bowler: IPlayer, battingTeam: ITeam, bowlingTeam: ITeam): void{
        this.scoreManager.addBatsmanFantasyPoints(fantasyPoints, batsman, battingTeam);
        this.scoreManager.addBowlerFantasyPoints(fantasyPoints, bowler, bowlingTeam);   
        this.scoreManager.addRuns(runs, batsman, battingTeam);
    }
}