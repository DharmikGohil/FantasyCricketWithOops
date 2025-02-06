import { IPlayer } from "./PlayerInterface";

export interface ITeam {
    getTeam(): IPlayer[];
    getName(): string;
    getFantasyPoints(): number;
    getRuns(): number;
    isTossWon(): boolean;
    getCredits(): number;
    getBatsmanCount(): number;
    getBowlerCount(): number;
    getWicketKeeperCount(): number;
    getNextBatsman(): IPlayer | undefined;
    getNextBowler(): IPlayer | undefined;
  
    addFantasyPoints(points: number): void;
    addRuns(runs: number): void;
    increaseFallenWickets(): void;
    setTossWinner(): void;
    addPlayer(player: IPlayer): void;
  }
  