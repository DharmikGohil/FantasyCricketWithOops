export class Player {
  constructor(
    private name: string,
    private role: string,
    private credit: number,
    private isCaptain: boolean = false,
    private isViceCaptain: boolean = false,
    private runs: number,
    private fantasyPoints: number,
    private isPlayed: boolean = false,
    private ballsPlayed: number,
    private outBy: string,
    private takenWickets: number
  ) {}

  getName() {
    return this.name;
  }
  getRole() {
    return this.role;
  }
  getCredit() {
    return this.credit;
  }
  getIsCaptain() {
    return this.isCaptain;
  }
  getIsViceCaptain() {
    return this.isViceCaptain;
  }
  getRuns() {
    return this.runs;
  }
  getFantasyPoints() {
    return this.fantasyPoints;
  }
  getIsPlayed() {
    return this.isPlayed;
  }
  getBallsPlayed() {
    return this.ballsPlayed;
  }
  getOutBy() {
    return this.outBy;
  }
  getTakenWickets() {
    return this.takenWickets;
  }
  
  setCaptain(isCaptain: boolean) {
    this.isCaptain = isCaptain;
  }
  setViceCaptain(isViceCaptain: boolean) {
    this.isViceCaptain = isViceCaptain;
  }
  setRuns(runs: number) {
    this.runs = runs;
  }
  setFantasyPoints(fantasyPoints: number) {
    this.fantasyPoints = fantasyPoints;
  }
  setIsPlayed(isPlayed: boolean) {
    this.isPlayed = isPlayed;
  }
  setBallsPlayed(ballsPlayed: number) {
    this.ballsPlayed = ballsPlayed;
  }
  setOutBy(outBy: string) {
    this.outBy = outBy;
  }
  setTakenWickets(takenWickets: number) {
    this.takenWickets = takenWickets;
  }
}
