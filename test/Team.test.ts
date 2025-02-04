import { Player } from '../src/Player';
import { Team } from '../src/Team';

const createPlayer = (name: string, role: string, credits: number) => {
    return new Player(name, role, credits, false, false, 0, 0, false, 0, "", 0);
}


describe("Initial state", () => {
    test("it should be start with empty team", () => {
        const team = new Team("CSK");
        expect(team.getTeam().length).toBe(0);
    })
})

describe("Basic team operations", () => {
    let team : Team;
    beforeEach(() => {
        team = new Team("RCB");
        team.addPlayer(new Player("Virat Kohli", "Batsman", 10, false, false, 0, 0, false, 0, "", 0));
        team.addPlayer(new Player("Jasprit Bumrah", "Bowler", 12, false, false, 0, 0, false, 0, "", 0));
        team.addPlayer(new Player("Rohit Sharma", "Batsman", 11, false, false, 0, 0, false, 0, "", 0));
        team.addPlayer(new Player("Dinesh Karthik", "Wicketkeeper", 10, false, false, 0, 0, false, 0, "", 0));
        
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
})

describe("Testing edge cases", () => {
    let team : Team | null;
    beforeEach(() => {
        team = new Team("RCB");
    })
    afterEach(() => {
        team = null;
    })
    // adding same player twice
    test("team should throw error if same player added twice", () => {
        const player = new Player("Virat Kohli", "Batsman", 10, false, false, 0, 0, false, 0, "", 0);
        team?.addPlayer(player);
        expect(() => team?.addPlayer(player)).toThrowError("Player already added");  
    })
    
    // adding more than 5 batsmen
    test("team should throw error if more than 5 batsmen are add", () => {
        const batsmen = Array.from({length : 5}, (_, i) => new Player(`Batsman ${i}`, "Batsman", 10, false, false, 0, 0, false, 0, "", 0));
        batsmen.forEach(batsman => team?.addPlayer(batsman));
        expect(() => team?.addPlayer(new Player("Ravindra Jadeja", "Batsman", 10, false, false, 0, 0, false, 0, "", 0))).toThrowError("Maximum Batsman limit reached");
    })
 
    // adding more than 5 bowlers
    test("team should throw error if more than 5 bowlers are add", () => {
        const bowlers = Array.from({length : 5}, (_, i) => new Player(`Bowler ${i}`, "Bowler", 10, false, false, 0, 0, false, 0, "", 0));
        bowlers.forEach(bowler => team?.addPlayer(bowler));
        expect(() => team?.addPlayer(new Player("Ravichandran Ashwin", "Bowler", 11, false, false, 0, 0, false, 0, "", 0))).toThrowError("Maximum Bowler limit reached");
    })

    // adding more than 1 wicketkeeper
    test("team should throw error if more than 1 wicketkeeper is added", () => {
        team?.addPlayer(new Player("Dinesh Karthik", "Wicketkeeper", 10, false, false, 0, 0, false, 0, "", 0));
        expect(() => team?.addPlayer(new Player("KL Rahul", "Wicketkeeper", 10, false, false, 0, 0, false, 0, "", 0))).toThrowError("Maximum Wicketkeeper limit reached");
    })
    
    // adding more than 11 players
    test("team should throw error if more than 11 players are added", () => {
        const players = [
            ...Array.from({length : 5}, (_, i) => new Player(`Batsman ${i}`, "Batsman", 5, false, false, 0, 0, false, 0, "", 0)),
            ...Array.from({length : 5}, (_, i) => new Player(`Bowler ${i}`, "Bowler", 5, false, false, 0, 0, false, 0, "", 0)),
            new Player("Dinesh Karthik", "Wicketkeeper", 10, false, false, 0, 0, false, 0, "", 0)
        ]
        players.forEach(player => team?.addPlayer(player));
        expect(() => team?.addPlayer(new Player("KL Rahul", "Wicketkeeper", 10, false, false, 0, 0, false, 0, "", 0))).toThrowError("Maximum team size reached");
    })
    // checking for negative values 
    test("team should throw error if negative fantasy points added", () => {
        expect(() => team?.addFantasyPoints(-10)).toThrowError("Fantasy Points cannot be negative");
    })

    test("team should throw error if negative runs added", () => {
        expect(() => team?.addRuns(-10)).toThrowError("Runs cannot be negative");
    })
    // checking for enough credits
    test("team should throw error if not enough credits", () => {
        const player = new Player("Virat Kohli", "Batsman", 100, false, false, 0, 0, false, 0, "", 0);
        team?.addPlayer(player);
        expect(() => team?.addPlayer(new Player("Jasprit Bumrah", "Bowler", 12, false, false, 0, 0, false, 0, "", 0))).toThrowError("Not enough credits");   
    })
})