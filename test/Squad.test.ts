import { Player } from '../src/Player';
import { Squad } from '../src/Squad';

describe("Initial state", () => {
    test("it should be start with empty squad", () => {
        const squad = new Squad("Royal Challengers Bangalore");
        expect(squad.getSquad().length).toBe(0);
    })
})

describe("After adding players", () => {
    let squad : Squad;
    beforeEach(() => {
        squad = new Squad("Royal Challengers Bangalore");
        squad.addPlayer(new Player("Virat Kohli", "Batsman", 10, false, false, 0, 0, false, 0, "", 0));
        squad.addPlayer(new Player("Jasprit Bumrah", "Bowler", 12, false, false, 0, 0, false, 0, "", 0));
        squad.addPlayer(new Player("Rohit Sharma", "Batsman", 11, false, false, 0, 0, false, 0, "", 0));
        squad.addPlayer(new Player("MS Dhoni", "Wicketkeeper", 10, false, false, 0, 0, false, 0, "", 0));
    })
    test("squad name should be defined", () => {
        expect(squad.getName()).toBeDefined();
    })

    test("squad length should be 4 after adding 4 players", () => {
        expect(squad.getSquad().length).toBe(4);
    })

    test("squad total credit should be 57", () => {
        expect(squad.getCredits()).toBe(57);
    })

    test("squad total batsman should be 2", () => {
        expect(squad.getBatsmanCount()).toBe(2);
    })
    
    test("squad total bowler should be 1", () => {
        expect(squad.getBowlerCount()).toBe(1);
    })

    test("squad total Wicketkeeper should be 1", () => {
        expect(squad.getWicketKeeperCount()).toBe(1);  
    })

    test("squad total fantasy points should be 21 after adding 21 points", () => {
        squad.addFantasyPoints(21);
        expect(squad.getFantasyPoints()).toBe(21);
    })

    test("squad total runs should be 10 after adding 10 runs", () => {
        squad.addRuns(10);
        expect(squad.getRuns()).toBe(10);
    })
})