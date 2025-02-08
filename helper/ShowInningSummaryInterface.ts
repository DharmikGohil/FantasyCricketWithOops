import { ITeam } from "./TeamInterface";

export interface IShowInningSummary{
    displayMatchSummary(battingTeam: ITeam, bowlingTeam: ITeam) : void;
}