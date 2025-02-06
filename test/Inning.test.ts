import { ITeam } from "../helper/TeamInterface";
import { Inning } from "../src/Inning";
import { Team } from "../src/Team";

describe("Inning", () => { 
    let team1: ITeam;
    let team2: ITeam;
    let inning: Inning;
    beforeEach(() => {
        team1 = new Team("Batting Team");
        team2 = new Team("Bowling Team");
        inning = new Inning(team1, team2);
    })

    test("should create a new inning", () => { 
        expect(inning).toBeInstanceOf(Inning);
    })
    test("should return batting team", () => {
        expect(inning.getBattingTeam()).toBe(team1);
    })
    test("should return bowling team", () => {
        expect(inning.getBowlingTeam()).toBe(team2);
    })
    test("should be have play method", () => {
        expect(typeof inning.play).toBe("function");
    })
}) 