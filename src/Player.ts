import { checkForNegative } from "../helper/error";
import { IPlayer } from "../helper/PlayerInterface";

export class Player implements IPlayer {
  constructor(
    private name: string,
    private role: string,
    private credit: number,
    private isCaptain: boolean = false,
    private isViceCaptain: boolean = false,
    private runs: number  = 0,
    private fantasyPoints: number = 0,
    private isPlayed: boolean = false,
    private ballsPlayed: number  = 0,
    private outBy: string,
    private takenWickets: number = 0
  ) {}

  getName() : string {
    return this.name;
  }
  getRole() : string {
    return this.role;
  }
  getCredit() : number {
    return this.credit;
  }
  getIsCaptain() : boolean {
    return this.isCaptain;
  }
  getIsViceCaptain() : boolean {
    return this.isViceCaptain;
  }
  getRuns() : number {
    return this.runs;
  }
  getFantasyPoints() : number {
    return this.fantasyPoints;
  }
  getIsPlayed() : boolean {
    return this.isPlayed;
  }
  getBallsPlayed() : number {
    return this.ballsPlayed;
  }
  getOutBy() : string {
    return this.outBy;
  }
  getTakenWickets() : number{
    return this.takenWickets;
  }
  
  setCaptain() : void{
    this.isCaptain = true;
  }
  setViceCaptain() : void {
    this.isViceCaptain = true;
  }
  addRuns(runs: number) : void {
    checkForNegative("Runs", runs);
    this.runs += runs;
  }
  addFantasyPoints(fantasyPoints: number) : void {
    // checkForNegative("Fantasy Points", fantasyPoints);
    this.fantasyPoints += fantasyPoints;
  }
  setIsPlayed() : void {
    this.isPlayed = true;
  }
  setBallsPlayed(ballsPlayed: number) : void {
    checkForNegative("Balls Played", ballsPlayed);
    this.ballsPlayed = ballsPlayed;
  }
  setOutBy(outBy: string) : void{
    this.outBy = outBy;
  }
  increaseBallsPlayed() : void {
    this.ballsPlayed += 1;
  }
  increaseTakenWicket() : void {
    this.takenWickets += 1;
  }
}
