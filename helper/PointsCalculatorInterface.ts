import { IPlayer } from "./PlayerInterface";

export interface IPointsCalculator {
    calculatePoints(player: IPlayer, basepoints: number): number;
    calculateDuckPaneltyPoints(batsman: IPlayer): number;
}