import { IPlayer } from "./PlayerInterface";
import { ITeam } from "./TeamInterface";

export interface IBallOutcomeProcessor {
    processDotBall(bowler : IPlayer, bowlingTeam : ITeam, fantasyPoints : number) : void;
    processWicket(batsman : IPlayer, bowler : IPlayer, battingTeam : ITeam, bowlingTeam : ITeam, fantasyPoints : number) : void;
    processNormalBall(runs : number, fantasyPoints: number, batsman : IPlayer, bowler : IPlayer, battingTeam : ITeam, bowlingTeam : ITeam) : void;
}