export interface IPlayer {
    getName(): string;
    getRole(): string;
    getCredit(): number;
    getIsCaptain(): boolean;
    getIsViceCaptain(): boolean;
    getRuns(): number;
    getFantasyPoints(): number;
    getIsPlayed(): boolean;
    getBallsPlayed(): number;
    getOutBy(): string;
    getTakenWickets(): number;
  
    setCaptain(): void;
    setViceCaptain(): void;
    addRuns(runs: number): void;
    addFantasyPoints(fantasyPoints: number): void;
    setIsPlayed(): void;
    setBallsPlayed(ballsPlayed: number): void;
    setOutBy(outBy: string): void;
    increaseBallsPlayed(): void;
    increaseTakenWicket(): void;
}
  
