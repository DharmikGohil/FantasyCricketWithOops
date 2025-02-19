import { IBallOutcomeProcessor } from "../helper/BallOutcomeProcessorInterface";
import { IPlayer } from "../helper/PlayerInterface";
import { ITeam } from "../helper/TeamInterface";
import { Inning } from "../src/Inning";
import { createMockPlayer, createMockTeam, createMockBallOutcomeProcessor } from "./mocks/mockObjects";

describe("Inning", () => {
    let inning: Inning;
    let mockBallOutcomeProcessor: jest.Mocked<IBallOutcomeProcessor>;
    let mockBattingTeam: jest.Mocked<ITeam>
    let mockBowlingTeam: jest.Mocked<ITeam>;
    let mockBatsman: jest.Mocked<IPlayer>
    let mockBowler: jest.Mocked<IPlayer>;

    beforeEach(() => {
        jest.clearAllMocks();

        mockBallOutcomeProcessor = createMockBallOutcomeProcessor();
        mockBattingTeam = createMockTeam();
        mockBowlingTeam = createMockTeam();
        mockBatsman = createMockPlayer();
        mockBowler = createMockPlayer();

        mockBattingTeam.getNextBatsman.mockReturnValue(mockBatsman);
        mockBowlingTeam.getNextBowler.mockReturnValue(mockBowler);

        inning = new Inning(mockBattingTeam, mockBowlingTeam, 5, mockBallOutcomeProcessor);
    });

    test("should process dot ball correctly", () => {
        inning.play();
        expect(mockBallOutcomeProcessor.processDotBall).toHaveBeenCalled();
    });

    test("should process normal ball correctly", () => {
        inning.play();
        expect(mockBallOutcomeProcessor.processNormalBall).toHaveBeenCalled();
    });

    test("should process wicket correctly", () => {
        inning.play();
        expect(mockBallOutcomeProcessor.processWicket).toHaveBeenCalled();
    });

    test("should call increaseBallsPlayed on batsman", () => {
        inning.play();
        expect(mockBatsman.increaseBallsPlayed).toHaveBeenCalled();
    });

    test("should change bowler after every 6 balls", () => {
        inning.play();
        expect(mockBowlingTeam.getNextBowler).toHaveBeenCalledTimes(5); 
    });
});

