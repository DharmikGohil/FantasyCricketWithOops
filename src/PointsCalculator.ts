import { IPlayer } from "../helper/PlayerInterface";
import { IPointsCalculator } from "../helper/PointsCalculatorInterface";

export class PointsCalculator implements IPointsCalculator{
     calculatePoints(player : IPlayer, basepoints : number) : number{
        if(player.getIsCaptain()) return basepoints * 2;
        if(player.getIsViceCaptain()) return basepoints * 1.5;
        return basepoints;
    }

     calculateDuckPaneltyPoints(batsman : IPlayer) : number{
        if(batsman.getRuns() !== 0) return 0;
        if(batsman.getIsCaptain()) return 4;
        if(batsman.getIsViceCaptain()) return 3;
        return 2;
    }
}