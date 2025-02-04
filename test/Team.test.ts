import { Player } from '../src/Player';
import { Team } from '../src/Team';

describe("Initial state", () => {
    test("it should be start with empty team", () => {
        const team = new Team("Chennai Super Kings");
        expect(team.getTeam().length).toBe(0);
    })
})

describe("After adding players", () => {
    let team : Team;
    beforeEach(() => {
        team = new Team("Royal Challengers Bangalore");
        team.addPlayer(new Player("Virat Kohli", "Batsman", 10, false, false, 0, 0, false, 0, "", 0));
        team.addPlayer(new Player("Jasprit Bumrah", "Bowler", 12, false, false, 0, 0, false, 0, "", 0));
        team.addPlayer(new Player("Rohit Sharma", "Batsman", 11, false, false, 0, 0, false, 0, "", 0));
        team.addPlayer(new Player("MS Dhoni", "Wicketkeeper", 10, false, false, 0, 0, false, 0, "", 0));
    })
    test("team name should be defined", () => {
        expect(team.getName()).toBeDefined();
    })

    test("team length should be 4 after adding 4 players", () => {
        expect(team.getTeam().length).toBe(4);
    })

    test("team total credit should be 57", () => {
        expect(team.getCredits()).toBe(57);
    })

    test("team total batsman should be 2", () => {
        expect(team.getBatsmanCount()).toBe(2);
    })
    
    test("team total bowler should be 1", () => {
        expect(team.getBowlerCount()).toBe(1);
    })

    test("team total Wicketkeeper should be 1", () => {
        expect(team.getWicketKeeperCount()).toBe(1);  
    })

    test("team total fantasy points should be 21 after adding 21 points", () => {
        team.addFantasyPoints(21);
        expect(team.getFantasyPoints()).toBe(21);
    })

    test("team total runs should be 10 after adding 10 runs", () => {
        team.addRuns(10);
        expect(team.getRuns()).toBe(10);
    })

    // // checking for negative values
    test("team should throw error if negative fantasy points added", () => {
        expect(() => team.addFantasyPoints(-10)).toThrowError("Fantasy Points cannot be negative");
    })

    test("team should throw error if negative runs added", () => {
        expect(() => team.addRuns(-10)).toThrowError("Runs cannot be negative");
    })
})