import { ScoreManager } from "../src/ScoreManager";
import { PointsCalculator } from "../src/PointsCalculator";
import { IPlayer } from "../helper/PlayerInterface";
import { ITeam } from "../helper/TeamInterface";

jest.mock("../src/PointsCalculator");

describe("ScoreManager", () => {
    let scoreManager: ScoreManager;
    let batsman: jest.Mocked<IPlayer>;
    let bowler: jest.Mocked<IPlayer>;
    let battingTeam: jest.Mocked<ITeam>;
    let bowlingTeam: jest.Mocked<ITeam>;
    let pointsCalculator: jest.Mocked<PointsCalculator>;

    beforeEach(() => {
        // Create ScoreManager instance
        scoreManager = new ScoreManager();

        // Create mock player objects
        batsman = {
            addRuns: jest.fn(),
            addFantasyPoints: jest.fn(),
            getRuns: jest.fn().mockReturnValue(0),
            getIsCaptain: jest.fn().mockReturnValue(false),
            getIsViceCaptain: jest.fn().mockReturnValue(false)
        } as unknown as jest.Mocked<IPlayer>;

        bowler = {
            addFantasyPoints: jest.fn(),
        } as unknown as jest.Mocked<IPlayer>;

        // Create mock team objects
        battingTeam = {
            addRuns: jest.fn(),
            addFantasyPoints: jest.fn()
        } as unknown as jest.Mocked<ITeam>;

        bowlingTeam = {
            addFantasyPoints: jest.fn()
        } as unknown as jest.Mocked<ITeam>;

        // Mock PointsCalculator
        pointsCalculator = new PointsCalculator() as jest.Mocked<PointsCalculator>;
        pointsCalculator.calculatePoints.mockReturnValue(10);
        pointsCalculator.calculateDuckPaneltyPoints.mockReturnValue(2);

        // Replace ScoreManager's PointsCalculator instance with our mock
        (scoreManager as any).pointsCalculator = pointsCalculator;
    });

    test("should add runs to batsman and batting team", () => {
        scoreManager.addRuns(4, batsman, battingTeam);

        expect(batsman.addRuns).toHaveBeenCalledWith(4);
        expect(battingTeam.addRuns).toHaveBeenCalledWith(4);
    });

    test("should correctly add fantasy points for batsman", () => {
        scoreManager.addBatsmanFantasyPoints(5, batsman, battingTeam);

        expect(pointsCalculator.calculatePoints).toHaveBeenCalledWith(batsman, 5);
        expect(batsman.addFantasyPoints).toHaveBeenCalledWith(10);
        expect(battingTeam.addFantasyPoints).toHaveBeenCalledWith(10);
    });

    test("should correctly add fantasy points for bowler", () => {
        scoreManager.addBowlerFantasyPoints(6, bowler, bowlingTeam);

        expect(pointsCalculator.calculatePoints).toHaveBeenCalledWith(bowler, 6);
        expect(bowler.addFantasyPoints).toHaveBeenCalledWith(10);
        expect(bowlingTeam.addFantasyPoints).toHaveBeenCalledWith(10);
    });

    test("should apply duck penalty correctly", () => {
        scoreManager.handleDuckPenalty(batsman);

        expect(pointsCalculator.calculateDuckPaneltyPoints).toHaveBeenCalledWith(batsman);
        expect(batsman.addFantasyPoints).toHaveBeenCalledWith(-2);
    });
});
