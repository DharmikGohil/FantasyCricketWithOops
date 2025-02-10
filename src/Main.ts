import { createTeams } from "./createTeams";
import { Match } from "./Match";
import { ShowInningSummary } from "./ShowInningSummary";
import { BallOutcomeProcessor } from "./BallOutcomeProcessor";
import { ScoreManager } from "./ScoreManager";
import { PointsCalculator } from "./PointsCalculator";



const teams = createTeams(["RCB", "CSK"]);

// game dependencies
const inningSummary = new ShowInningSummary();
const pointsCalculator = new PointsCalculator(2, 1.5);
const scoreManager = new ScoreManager(pointsCalculator);
const ballOutcomeProcessor = new BallOutcomeProcessor(scoreManager); 

console.log(`Welcome to the Match between ${teams[0].getName()} and ${teams[1].getName()}!`);

// start the match
const match = new Match(teams[0], teams[1], inningSummary, ballOutcomeProcessor);
match.toss();
match.playInnings();
