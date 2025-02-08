import { IPlayer } from "./PlayerInterface";
import { ITeam } from "./TeamInterface";

export interface IScoreManager{
    addRuns( runs : number, batsman : IPlayer, battingTeam : ITeam) : void;
    addBatsmanFantasyPoints(fantasyPoints : number, batsman : IPlayer, battingTeam : ITeam) : void;
    addBowlerFantasyPoints(fantasyPoints : number, bowler : IPlayer, bowlingTeam : ITeam) : void;
    handleDuckPenalty(batman : IPlayer, battingTeam : ITeam) : void;
}