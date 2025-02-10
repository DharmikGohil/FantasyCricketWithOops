import { IBallOutcomeProcessor } from '../../helper/BallOutcomeProcessorInterface';
import { IPlayer } from '../../helper/PlayerInterface';
import { IPointsCalculator } from '../../helper/PointsCalculatorInterface';
import { IScoreManager } from '../../helper/ScoreManagerInterface';
import { IShowInningSummary } from '../../helper/ShowInningSummaryInterface';
import { ITeam } from '../../helper/TeamInterface';

// Create a full mock of IPlayer but override only required methods
export const createMockPlayer = (): jest.Mocked<IPlayer> => {
  return {
    getName: jest.fn(),
    getRole: jest.fn(),
    getCredit: jest.fn(),
    getIsCaptain: jest.fn(),
    getIsViceCaptain: jest.fn(),
    getRuns: jest.fn(),
    getFantasyPoints: jest.fn(),
    addRuns: jest.fn(),
    addFantasyPoints: jest.fn(),
    setCaptain: jest.fn(),
    setViceCaptain: jest.fn(),
    getIsPlayed: jest.fn(),
    getBallsPlayed: jest.fn(),
    getOutBy: jest.fn(),
    getTakenWickets: jest.fn(),
    setIsPlayed: jest.fn(),
    setBallsPlayed: jest.fn(),
    setOutBy: jest.fn(),
    increaseBallsPlayed: jest.fn(),
    increaseTakenWicket: jest.fn(),
  };
};

// Create a full mock of ITeam but override only required methods
export const createMockTeam = (): jest.Mocked<ITeam> => {
  return {
    getTeam: jest.fn(),
    getName: jest.fn(),
    getFantasyPoints: jest.fn(),
    getRuns: jest.fn(),
    addRuns: jest.fn(),
    addFantasyPoints: jest.fn(),
    isTossWon: jest.fn(),
    getCredits: jest.fn(),
    getBatsmanCount: jest.fn(),
    getBowlerCount: jest.fn(),
    getWicketKeeperCount: jest.fn(),
    getNextBatsman: jest.fn(),
    getNextBowler: jest.fn(),
    increaseFallenWickets: jest.fn(),
    setTossWinner: jest.fn(),
    addPlayer: jest.fn(),
  };
};

// Create a mock of PointsCalculator
export const createMockPointsCalculator = (): jest.Mocked<IPointsCalculator> => {
  return {
    calculatePoints: jest.fn(),
    calculateDuckPaneltyPoints: jest.fn(),
  };
};

export const createMockScoreManager = () : jest.Mocked<IScoreManager> => {
  return {
    addRuns : jest.fn(),
    addBatsmanFantasyPoints : jest.fn(),
    addBowlerFantasyPoints : jest.fn(),
    handleDuckPenalty : jest.fn(),
  }
}

export const createMockBallOutcomeProcessor = (): jest.Mocked<IBallOutcomeProcessor> => {
    return {
        processDotBall: jest.fn(),
        processWicket: jest.fn(),
        processNormalBall: jest.fn(),
    } 
};


export const createMockShowInningSummary = (): jest.Mocked<IShowInningSummary> =>{
  return {
    displayMatchSummary: jest.fn(),
  }
}