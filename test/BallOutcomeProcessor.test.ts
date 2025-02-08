import { IBallOutcomeProcessor } from "../helper/BallOutcomeProcessorInterface";
import { IScoreManager } from "../helper/ScoreManagerInterface";
import { BallOutcomeProcessor } from "../src/BallOutcomeProcessor";
import { createMockScoreManager } from "./mocks/mockObjects";

describe("Test for BallOutcomepRocessor class", () => {
    let ballOutcomeProcessor : IBallOutcomeProcessor;
    let scoreManager : IScoreManager;
    beforeEach(() => {
        scoreManager = createMockScoreManager();
        ballOutcomeProcessor = new BallOutcomeProcessor(scoreManager);
    })
    test("it should be contains method to handle dotBall", () => {
        expect(typeof ballOutcomeProcessor.processDotBall).toBe("function");
    })
    test("it should be contains method to handle wicket ball", () => {
        expect(typeof ballOutcomeProcessor.processWicket).toBe("function");
    })
    test("it should be contains method to handle normal ball", () => {
        expect(typeof ballOutcomeProcessor.processNormalBall).toBe("function");
    })

})