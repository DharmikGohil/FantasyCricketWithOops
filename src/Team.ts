import { checkForNegative } from "../helper/error";
import { Player } from "./Player";

export class Team { 
    private team : Player[];
    private name : string;
    private fantasyPoints : number = 0;
    private runs : number = 0;
    private isTossWinner : boolean = false;
    private credits : number = 100;
    private batsmanCount : number = 0;
    private bowlerCount : number = 0;
    private wicketKeeperCount : number = 0;
    
    constructor(name: string) {
        this.name = name;
        this.team = [];
    }
    
    getTeam() {
        return this.team;
    }
    getName(){
        return this.name;
    }
    getFantasyPoints() {
        return this.fantasyPoints;
    }
    getRuns() {
        return this.runs;
    }
    isTossWon() {
        return this.isTossWinner;
    }
    getCredits() {
        return this.credits;
    }
    getBatsmanCount() {
        return this.batsmanCount;
    }
    getBowlerCount() {
        return this.bowlerCount;
    }
    getWicketKeeperCount() {
        return this.wicketKeeperCount;
    }


    addFantasyPoints(points: number) {
        checkForNegative("Fantasy Points", points);
        this.fantasyPoints += points;
    }
    addRuns(runs: number) {
        checkForNegative("Runs", runs); 
        this.runs += runs;
    }
    setTossWinner() {
        this.isTossWinner = true;
    }
    addPlayer(player: Player) { 
        this.team.push(player);
        this.decreaseCredits(player.getCredit());
        if(player.getRole() === "Batsman") {
            this.increaseBatsmanCount();
        }
        else if(player.getRole() === "Bowler") {
            this.increaseBowlerCount();
        }
        else if(player.getRole() === "Wicketkeeper") {
            this.increaseWicketKeeperCount();
        }
    }

    private decreaseCredits(credit: number) {
        this.credits -= credit;
    }
    private increaseBatsmanCount() {
        this.batsmanCount += 1;
    }
    private increaseBowlerCount(){
        this.bowlerCount += 1;
    }
    private increaseWicketKeeperCount() {
        this.wicketKeeperCount += 1;
    }
} 