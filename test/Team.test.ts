import { Squad } from "../src/Squad";
import { Team } from "../src/Team";

describe("Initial state", () => {
    test("it should be start with empty team", () => {
        const team = new Team();
        expect(team.getTeams().length).toEqual(0);
    })
})

describe("Testing Team class", () => {
    let team : Team;
    beforeAll(() => {
        team = new Team();
    })

    // adding squad into team
    test("Team should have two squad", () => {
        team.addSquad(new Squad("RCB"));
        team.addSquad(new Squad("CSK"));
        expect(team.getTeams().length).toBe(2);
    })
})