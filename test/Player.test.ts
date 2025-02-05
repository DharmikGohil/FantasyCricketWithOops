import { Player } from '../src/Player';
    
describe('Tests for player class', () => {
  let player: Player;
  beforeEach(() => {
    player = new Player("Virat Kohli", "Batsman", 10, false, false, 0, 0, false, 0, "", 0);
  });

  test('1. testing getter methods of players properties ', () => {
    expect(player.getName()).toBe("Virat Kohli");
    expect(player.getRole()).toBe("Batsman");
    expect(player.getCredit()).toBe(10);
    expect(player.getIsCaptain()).toBe(false);
    expect(player.getIsViceCaptain()).toBe(false);
    expect(player.getRuns()).toBe(0);
    expect(player.getFantasyPoints()).toBe(0);
    expect(player.getIsPlayed()).toBe(false);
    expect(player.getBallsPlayed()).toBe(0);
    expect(player.getOutBy()).toBe("");
    expect(player.getTakenWickets()).toBe(0);
  });

  test("2. Testing setter methods of player's properties", () => {
    player.setCaptain();
    player.addFantasyPoints(10);
    player.setIsPlayed();
    player.addRuns(102);
    player.increaseTakenWicket();
    player.increaseTakenWicket();
    player.increaseTakenWicket();
    player.setBallsPlayed(11);
    player.setViceCaptain();

    expect(player.getIsCaptain()).toBe(true);
    expect(player.getFantasyPoints()).toBe(10);
    expect(player.getIsPlayed()).toBe(true);
    expect(player.getRuns()).toBe(102);
    expect(player.getTakenWickets()).toBe(3);
    expect(player.getBallsPlayed()).toBe(11);
    expect(player.getIsViceCaptain()).toBe(true);
  })

  // test for negative values
  test("3. should throw error if negative fantasy points added", () => {
    expect(() => player.addFantasyPoints(-10)).toThrowError("Fantasy Points cannot be negative");
  })

  test("4. should throw error if negative runs added", () => {
    expect(() => player.addRuns(-10)).toThrowError("Runs cannot be negative");
  })

  test("5. should throw error if negative balls played added", () => {
    expect(() => player.setBallsPlayed(-10)).toThrowError("Balls Played cannot be negative");
  })
});
