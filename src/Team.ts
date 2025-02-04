import { checkForNegative } from "../helper/error";
import { Player } from "./Player";
const TEAM_RULES = {
    MAX_BATSMAN: 5,
    MAX_BOWLER: 5,
    MAX_WICKETKEEPER: 1,
    MAX_PLAYERS: 11,
    TOTAL_CREDITS: 100,
}
export class Team { 
    private team : Player[];
    private name : string;
    private fantasyPoints : number = 0;
    private runs : number = 0;
    private isTossWinner : boolean = false;
    private credits : number = TEAM_RULES.TOTAL_CREDITS;
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
        if(this.team.includes(player)) {
            throw new Error('Player already added');
        }
        if (this.team.length >= TEAM_RULES.MAX_PLAYERS) {
            throw new Error('Maximum team size reached');
        } 
        if (this.credits - player.getCredit() < 0) {
            throw new Error('Not enough credits');
        }
        if(player.getRole() === "Batsman" && this.batsmanCount >= TEAM_RULES.MAX_BATSMAN) {
            throw new Error('Maximum Batsman limit reached');
        }
        if(player.getRole() === "Bowler" && this.bowlerCount >= TEAM_RULES.MAX_BOWLER) {
            throw new Error('Maximum Bowler limit reached');
        }
        if(player.getRole() === "Wicketkeeper" && this.wicketKeeperCount >= TEAM_RULES.MAX_WICKETKEEPER) {
            throw new Error('Maximum Wicketkeeper limit reached');
        }

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