import { Player } from '../src/Player';
import { Team } from '../src/Team';

const createPlayer = (name: string, role: string, credits: number) => {
    return new Player(name, role, credits, false, false, 0, 0, false, 0, "", 0);
}

const createBatsman = (name : string, credits : number) => {
    return createPlayer(name, "Batsman", credits);
}
const createBowler = (name : string, credits : number) => {
    return createPlayer(name, "Bowler", credits);
}
const createWicketkeeper = (name : string, credits : number) => {
    return createPlayer(name, "Wicketkeeper", credits);
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
        team.addPlayer(createBatsman("Rohit Sharma", 11));;
        team.addPlayer(createBowler("Jasprit Bumrah", 12));
        team.addPlayer(createWicketkeeper("Dinesh Karthik", 10));  
    })
    test("team name should be defined", () => {
        team.addPlayer(createBatsman("Virat Kohli", 10));
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

    test("team should throw error if negative runs added", () => {
        expect(() => team?.addRuns(-10)).toThrowError("Runs cannot be negative");
    })
})

describe("Testing team rules", () => {
        let team : Team | null;
        beforeEach(() => {
            team = new Team("RCB");
        })
        afterEach(() => {
            team = null;
        })

        test("team should throw error if same player added twice", () => {
            const player = createBatsman("Virat Kohli", 10);
            team?.addPlayer(player);
            expect(() => team?.addPlayer(player)).toThrowError("Player already added");  
        })
        
        test("team should throw error if more than 5 batsmen are add", () => {
            const batsmen = Array.from({length : 5}, (_, i) => createBatsman(`Batsman ${i}`, 10));
            batsmen.forEach(batsman => team?.addPlayer(batsman));
            expect(() => team?.addPlayer(createBatsman("extra batsman", 10))).toThrowError("Maximum Batsman limit reached");
        })
     
        test("team should throw error if more than 5 bowlers are add", () => {
            const bowlers = Array.from({length : 5}, (_, i) => createBowler(`Bowler ${i}`, 10));
            bowlers.forEach(bowler => team?.addPlayer(bowler));
            expect(() => team?.addPlayer(createBowler("Extra Bowler",10))).toThrowError("Maximum Bowler limit reached");
        })
    
        test("team should throw error if more than 1 wicketkeeper is added", () => {
            const player = createWicketkeeper("Dinesh Karthik", 10);
            team?.addPlayer(player);
            expect(() => team?.addPlayer(createWicketkeeper("KL Rahul", 10))).toThrowError("Maximum Wicketkeeper limit reached");
        }) 
        
        test("team should throw error if more than 11 players are added", () => {
            const players = [
                ...Array.from({length : 5}, (_, i) => createBatsman(`Batsman ${i}`, 5)),
                ...Array.from({length : 5}, (_, i) => createBowler(`Bowler ${i}`, 6)),
                createWicketkeeper("Dinesh Karthik", 10)
            ]
            players.forEach(player => team?.addPlayer(player));
            expect(() => team?.addPlayer(createBatsman("12th Batsman", 10))).toThrowError("Maximum team size reached");
        })

        test("team should throw error if not enough credits", () => {
            const player = createBatsman("Virat Kohli", 100); 
            team?.addPlayer(player);
            expect(() => team?.addPlayer(createBowler("Costly Bowler", 12))).toThrowError("Not enough credits");   
        })
})
describe("getting next player who hasn'r played", () => {

    test("team should return next batsman for batting", () => {
        const team = new Team("RCB"); 
        const batsmen = Array.from({length : 5}, (_, i) => createBatsman(`Batsman ${i}`, 10));
        batsmen.forEach(batsman => team.addPlayer(batsman));
        expect(team.getNextBatsman()).toBe(batsmen[0]);
    })
    test("team should return next bowler for bowling", () => {
        const team = new Team("RCB"); 
        const bowlers = Array.from({length : 5}, (_, i) => createBowler(`Bowler ${i}`, 10));
        bowlers.forEach(bowler => team.addPlayer(bowler));
        expect(team.getNextBowler()).toBe(bowlers[0]);
    })
})