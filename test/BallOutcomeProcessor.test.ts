import { IBallOutcomeProcessor } from "../helper/BallOutcomeProcessorInterface";
import { BallOutcomeProcessor } from "../src/BallOutcomeProcessor";

describe("Test for BallOutcomepRocessor class", () => {
    let ballOutcomeProcessor : IBallOutcomeProcessor;
    beforeEach(() => {
        ballOutcomeProcessor = new BallOutcomeProcessor();
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