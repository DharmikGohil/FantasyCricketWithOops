import { IPlayer } from '../helper/PlayerInterface';
import { Player } from '../src/Player';
import { PointsCalculator } from '../src/PointsCalculator';

describe('Test for PointsCalculator class', () => {
  let pointsCalculator: PointsCalculator;
  let captainPlayer: IPlayer;
  let viceCaptainPlayer: IPlayer;
  let normalPlayer: IPlayer;
  beforeAll(() => {
    pointsCalculator = new PointsCalculator(2, 1.5);
    captainPlayer = new Player('Virat Kohli', 'Batsman', 10, true, false, 0, 100, true, 30, '', 0 );
    viceCaptainPlayer = new Player('Jasprit Bumrah','Bowler',10, false, true, 0, 100, true, 30, '', 0 );
    normalPlayer = new Player( 'Abhishek Sharma', 'Batsman', 10, false, false, 0, 100, true, 30, '', 0 );
  });

  describe('test for player points', () => {
    test('it should retunr 2x points if player if captain', () => {
      expect(pointsCalculator.calculatePoints(captainPlayer, 5)).toBe(10);
    });
    test('should be return 1.5x points if players is vicecaptain', () => {
      expect(pointsCalculator.calculatePoints(viceCaptainPlayer, 3)).toBe(4.5);
    });
    test('it should be return normal points if players is neither captain or viceCaptain', () => {
      expect(pointsCalculator.calculatePoints(normalPlayer, 2)).toBe(2);
    });
  });

  describe('testing duck panelty for batsman', () => {
    test('it should return -4 if batsman is captain', () => {
      expect(pointsCalculator.calculateDuckPaneltyPoints(captainPlayer)).toBe(4); 
    });
    test('it should return -3 if batsman is viceCaptain', () => {
        expect(pointsCalculator.calculateDuckPaneltyPoints(viceCaptainPlayer)).toBe(3); 
    });
    test('it should return -2 if batsman is normal player', () => {
        expect(pointsCalculator.calculateDuckPaneltyPoints(normalPlayer)).toBe(2);  
    });
  });
});
