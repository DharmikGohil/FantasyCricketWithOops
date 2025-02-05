import { Team } from "../src/Team";
import { Match } from "../src/Match";
import { createTeams } from "../src/createTeams";

describe("Testing Match class", () => {
    test("Match class should takes two teams as arguments", () => {
        const team1 = new Team("RCB");
        const team2 = new Team("CSK")
        const match = new Match(team1, team2);
    })
    
    // test("tesing startMatch method", () => {
    //     const teams = createTeams(["RCB", "CSK"]);
    //     const match = new Match(teams[0], teams[1]);
    //     match.play();
    //     console.log(teams[0]);
    //     expect(teams[0].getRuns()).toBeGreaterThanOrEqual(1);
    // })
})