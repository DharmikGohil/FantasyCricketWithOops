import { IBallOutcomeProcessor } from "../helper/BallOutcomeProcessorInterface";
import { IShowInningSummary } from "../helper/ShowInningSummaryInterface";
import { ITeam } from "../helper/TeamInterface";
import { Inning } from "../src/Inning";
import { Match } from "../src/Match"
import { createMockBallOutcomeProcessor, createMockShowInningSummary, createMockTeam } from "./mocks/mockObjects";

describe("Testing Match class", () => {
    let match : Match;
    let mockBattingTeam : jest.Mocked<ITeam>;
    let mockBowlingTeam : jest.Mocked<ITeam>;
    let mockShowInningSummary: jest.Mocked<IShowInningSummary>;
    let mockBallOutcomeProcessor: jest.Mocked<IBallOutcomeProcessor>;

    beforeEach(() => {
        jest.clearAllMocks();

        mockBattingTeam = createMockTeam();
        mockBowlingTeam = createMockTeam();
        mockShowInningSummary = createMockShowInningSummary();
        mockBallOutcomeProcessor = createMockBallOutcomeProcessor();

        mockBattingTeam.getName.mockReturnValue("RCB");
        mockBowlingTeam.getName.mockReturnValue("CSK");

        match = new Match(mockBattingTeam, mockBowlingTeam, mockShowInningSummary, mockBallOutcomeProcessor);
    }) 

    test("should throw error if playInnings() method called before toss()", () => {
        expect(() => match.playInnings()).toThrow("toss of match has not been conducted. Call toss() before playInnings().")
    })

    test("should call displayMatchSummary twice for both innings", () => {
        match.toss();
        match.playInnings();
        expect(mockShowInningSummary.displayMatchSummary).toHaveBeenCalledTimes(2);
    })

    test("should set tossWinner flag for tossWinnerteam", () => {
        match.toss();
        match.playInnings();
        expect(mockBattingTeam.setTossWinner).toHaveBeenCalledTimes(1);
    })  

    test("should create and play two innings", () => {
        jest.spyOn(Inning.prototype, "play"); 
    
        match.toss();
        match.playInnings();
    
        expect(Inning.prototype.play).toHaveBeenCalledTimes(2); 
    });
    
})