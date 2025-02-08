import { checkForNegative } from "../helper/error";
import { IPlayer } from "../helper/PlayerInterface";
import { ITeam } from "../helper/TeamInterface";

const TEAM_RULES = {
    MAX_BATSMAN: 5,
    MAX_BOWLER: 5,
    MAX_WICKETKEEPER: 1,
    MAX_PLAYERS: 11,
    TOTAL_CREDITS: 100,
}

export class Team implements ITeam { 
    private players: IPlayer[];
    private name: string;
    private fantasyPoints: number = 0;
    private runs: number = 0;
    private isTossWinner: boolean = false;
    private credits: number = TEAM_RULES.TOTAL_CREDITS;
    private fallenWickets: number = 0;
    private batsmanCount: number = 0;
    private bowlerCount: number = 0;
    private wicketKeeperCount: number = 0;
    
    constructor(name: string) {
        this.name = name;
        this.players = [];
    }
    
    getTeam(): IPlayer[] {
        return this.players;
    }
    getName(): string {
        return this.name;
    }
    getFantasyPoints(): number {
        return this.fantasyPoints;
    }
    getRuns(): number {
        return this.runs;
    }
    isTossWon(): boolean {
        return this.isTossWinner;
    }
    getCredits(): number {
        return this.credits;
    }
    getBatsmanCount(): number {
        return this.batsmanCount;
    }
    getBowlerCount(): number {
        return this.bowlerCount;
    }
    getWicketKeeperCount(): number {
        return this.wicketKeeperCount;
    }
    getNextBatsman(): IPlayer | undefined {
        return this.players.find(player => {
            if(this.fallenWickets < 5 && player.getRole() === "Batsman" && !player.getIsPlayed()){
                return true;
            }
            else if(this.fallenWickets >= 5 && this.fallenWickets < 10 && player.getRole() === "Bowler" && !player.getIsPlayed()){
                return true;
            }
            else if(this.fallenWickets === 10 && player.getRole() === "Wicketkeeper" && !player.getIsPlayed()){
                return true;
            }
            return false;
        });
    }
    getNextBowler(): IPlayer | undefined {
        return this.players.find(player => player.getRole() === "Bowler" && !player.getIsPlayed());
    }

    addFantasyPoints(points: number): void {
        // checkForNegative("Fantasy Points", points);
        this.fantasyPoints += points;
    }
    addRuns(runs: number): void {
        checkForNegative("Runs", runs); 
        this.runs += runs;
    }
    increaseFallenWickets(): void {
        this.fallenWickets += 1;
    }
    setTossWinner(): void {
        this.isTossWinner = true;
    }
    addPlayer(player: IPlayer) { 
        this.validatePlayer(player);
        this.players.push(player);
        this.decreaseCredits(player.getCredit());
        this.increaseRoleCount(player.getRole());
    }
    
    private validatePlayer(player: IPlayer) {
        if(this.players.find(p => p.getName() === player.getName())) {
            throw new Error('Player already added');
        }
        if (this.players.length >= TEAM_RULES.MAX_PLAYERS) {
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
    }

    private decreaseCredits(credit: number) {
        this.credits -= credit;
    }

    private increaseRoleCount(role: string) {
        switch(role) {
            case "Batsman": 
                this.batsmanCount += 1;
                break;
            case "Bowler":
                this.bowlerCount += 1;
                break;
            case "Wicketkeeper":
                this.wicketKeeperCount += 1;
                break;
        }
    } 
}