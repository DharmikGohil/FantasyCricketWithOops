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
        let currentBallCount = 1;
        let batsman = this.battingTeam.getNextBatsman();
        let bowler = this.bowlingTeam.getNextBowler();

        while(currentBallCount <= 30){
            const shot = new Shot();
            const runs = shot.getRuns();
            const fantPoints = shot.getFantasyPoints();
            const batsmanFantPoints = batsman?.getIsCaptain() ? fantPoints * 2 : batsman?.getIsViceCaptain() ? fantPoints * 1.5 : fantPoints;
            const bowlerFantPoints = bowler?.getIsCaptain() ? fantPoints * 2 : bowler?.getIsViceCaptain() ? fantPoints * 1.5 : fantPoints;
    

            if(runs === 0){ // dot ball
                this.bowlingTeam.addFantasyPoints(bowlerFantPoints);
                bowler?.addFantasyPoints(bowlerFantPoints);
            }
            else if(runs === -1){ // wicket
                this.bowlingTeam.addFantasyPoints(bowlerFantPoints);
                bowler?.addFantasyPoints(bowlerFantPoints);
                bowler?.increaseTakenWicket();
                if(batsman?.getRuns() === 0){
                    const penaltyPoints = batsman.getIsCaptain() ? -4 : batsman.getIsViceCaptain() ? -3 : -2;
                    this.battingTeam.addFantasyPoints(penaltyPoints);
                    batsman.addFantasyPoints(penaltyPoints);
                }
                batsman?.setIsPlayed();
                batsman?.setOutBy(bowler?.getName()!);
                this.battingTeam.increaseFallenWickets();
                batsman = this.battingTeam.getNextBatsman();
            }
            else{
                this.battingTeam.addRuns(runs);
                this.battingTeam.addFantasyPoints(batsmanFantPoints);
                batsman?.addRuns(runs);
                batsman?.addFantasyPoints(batsmanFantPoints);
                
                this.bowlingTeam.addFantasyPoints(bowlerFantPoints);
                bowler?.addFantasyPoints(runs);
            }
            currentBallCount++;
            batsman?.increaseBallsPlayed();
            if(currentBallCount % 6 == 0){
                bowler = this.bowlingTeam.getNextBowler();
                bowler?.setIsPlayed();
            }
        }
    }
}