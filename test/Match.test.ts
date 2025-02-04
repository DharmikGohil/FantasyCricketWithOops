import { Team } from "../src/Team";
import { Match } from "../src/Match";

describe("Initial state", () => {
    test("it should be start with empty match", () => {
        const match = new Match();
        expect(match.getTeams().length).toEqual(0);
    })
})

describe("Testing Team class", () => {
    let match : Match;
    beforeAll(() => {
        match = new Match();
    })

    // adding squad into team
    test("Team should have two squad", () => {
        match.addTeam(new Team("RCB"));
        match.addTeam(new Team("CSK"));
        expect(match.getTeams().length).toBe(2);
    })
})