import { IPlayer } from "./PlayerInterface";
import { ITeam } from "./TeamInterface";

export interface IScoreManager{
    addRuns(batsman : IPlayer, runs : number) : void;
    addFantasyPoint(fantasyPoints : number, batsman : IPlayer, bowler : IPlayer, battingTeam : ITeam, bowlingTeam : ITeam) : void;
    handleDuckPenalty(batman : IPlayer, fantasyPoints : number) : void;
}