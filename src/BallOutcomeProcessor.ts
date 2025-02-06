import { IBallOutcomeProcessor } from "../helper/BallOutcomeProcessorInterface";
import { IPlayer } from "../helper/PlayerInterface";
import { ITeam } from "../helper/TeamInterface";

export class BallOutcomeProcessor implements IBallOutcomeProcessor{
    processDotBall(bowler : IPlayer, bowlingTeam : ITeam, fantasyPoints : number): void {
        bowler.addFantasyPoints(fantasyPoints);
        bowlingTeam.addFantasyPoints(fantasyPoints);
    }
    
    processWicket(batsman: IPlayer, bowler: IPlayer, battingTeam: ITeam, bowlingTeam: ITeam, fantasyPoints: number): void {
        bowler.addFantasyPoints(fantasyPoints);
        bowlingTeam.addFantasyPoints(fantasyPoints);
        bowler.increaseTakenWicket();


        batsman.setIsPlayed();
        batsman.setOutBy(bowler.getName());
        battingTeam.increaseFallenWickets();
        
    }
    processNormalBall(batsman: IPlayer, bowler: IPlayer, battingTeam: ITeam, bowlingTeam: ITeam, fantasyPoints: number): void {
        battingTeam.addRuns(runs);
        battingTeam.addFantasyPoints(batsmanFantPoints);
        batsman?.addRuns(runs);
        batsman?.addFantasyPoints(batsmanFantPoints);
                
        bowlingTeam.addFantasyPoints(bowlerFantPoints);
        bowler?.addFantasyPoints(runs);
    }
}