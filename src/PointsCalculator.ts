import { IPlayer } from "../helper/PlayerInterface";
import { IPointsCalculator } from "../helper/PointsCalculatorInterface";

export class PointsCalculator implements IPointsCalculator{
    constructor(private captainMultiplier: number, private viceCaptainMultiplier: number){

    }
     calculatePoints(player : IPlayer, basepoints : number) : number{
        if(player.getIsCaptain()) return basepoints * this.captainMultiplier;
        if(player.getIsViceCaptain()) return basepoints * this.viceCaptainMultiplier;
        return basepoints;
    }

     calculateDuckPaneltyPoints(batsman : IPlayer) : number{
        if(batsman.getRuns() !== 0) return 0;
        if(batsman.getIsCaptain()) return 4;
        if(batsman.getIsViceCaptain()) return 3;
        return 2;
    }
}