import { Shot } from "./Shot";
import { Team } from "./Team";

export class Inning{

    constructor(private battingTeam: Team, private bowlingTeam: Team) {}
    getBattingTeam(){
        return this.battingTeam;
    }
    getBowlingTeam(){
        return this.bowlingTeam;
    }
    play(){
        const batsman = this.battingTeam.getNextBatsman();
        const bowler = this.bowlingTeam.getNextBowler();
        let currentBallCount = 0;
        while(currentBallCount < 30){
            currentBallCount++;
            const shot = new Shot();
            const runs = shot.getRuns();
            const fantPoints = shot.getFantasyPoints();
            this.battingTeam.addRuns(runs);
            this.battingTeam.addFantasyPoints(fantPoints);
            batsman?.addRuns(runs);
            batsman?.addFantasyPoints(fantPoints);

            this.bowlingTeam.addFantasyPoints(fantPoints);
            bowler?.addFantasyPoints(runs);

            if(runs === -1){
                this.battingTeam.addWicket(batsman!);
                bowler?.increaseTakenWicket();
                break;
            }
        }
    }
    
}