import { ScoreManager } from "../src/ScoreManager";
import { IPlayer } from "../helper/PlayerInterface";
import { ITeam } from "../helper/TeamInterface";
import { IPointsCalculator } from "../helper/PointsCalculatorInterface";
import { createMockPlayer, createMockPointsCalculator, createMockTeam } from "./mocks/mockObjects";

jest.mock("../src/PointsCalculator");

describe("ScoreManager", () => {
    let scoreManager: ScoreManager;
    let mockBatsman : jest.Mocked<IPlayer>;
    let mockBowler : jest.Mocked<IPlayer>;
    let mockBattingTeam : jest.Mocked<ITeam>;
    let mockBowlingTeam : jest.Mocked<ITeam>;
    let mockPointsCalculator: jest.Mocked<IPointsCalculator>; 

    beforeEach(() => {
        jest.clearAllMocks(); // for seperate test we clear all before calls
        // mocking needed objects 
        mockBatsman = createMockPlayer();
        mockBowler = createMockPlayer();
        mockBattingTeam = createMockTeam();
        mockBowlingTeam = createMockTeam();
        
        mockPointsCalculator = createMockPointsCalculator();
        scoreManager = new ScoreManager(mockPointsCalculator);
        

    });

    test("should add runs to batsman and batting team", () => {
        scoreManager.addRuns(4, mockBatsman, mockBattingTeam);

        expect(mockBatsman.addRuns).toHaveBeenCalledWith(4);
        expect(mockBattingTeam.addRuns).toHaveBeenCalledWith(4);
    });

    test("should correctly add 2x fantasy points for captain batsman", () => {
        mockBatsman.getIsCaptain.mockReturnValue(true);
        mockPointsCalculator.calculatePoints.mockReturnValue(20);

        scoreManager.addBatsmanFantasyPoints(10, mockBatsman, mockBattingTeam);

        expect(mockPointsCalculator.calculatePoints).toHaveBeenCalledWith(mockBatsman, 10);
        expect(mockBatsman.addFantasyPoints).toHaveBeenCalledWith(20);
        expect(mockBattingTeam.addFantasyPoints).toHaveBeenCalledWith(20);
    });

    test("should correctly add 1.5x fantasy points for viceCaptain bowler", () => {
        mockBowler.getIsViceCaptain.mockReturnValue(true);
        mockPointsCalculator.calculatePoints.mockReturnValue(15);

        scoreManager.addBowlerFantasyPoints(10, mockBowler, mockBowlingTeam);

        expect(mockPointsCalculator.calculatePoints).toHaveBeenCalledWith(mockBowler, 10);
        expect(mockBowler.addFantasyPoints).toHaveBeenCalledWith(15);
        expect(mockBowlingTeam.addFantasyPoints).toHaveBeenCalledWith(15);
    });
    
    test("should correcty add duck panelty points when batsman out with 0 runs", () => {

        mockPointsCalculator.calculateDuckPaneltyPoints.mockReturnValue(2);
        
        scoreManager.handleDuckPenalty(mockBatsman, mockBattingTeam);
        expect(mockBatsman.addFantasyPoints).toHaveBeenCalledWith(-2);
    })
});  
 