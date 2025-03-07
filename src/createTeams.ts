import { Player } from './Player';
import { players } from './playersData';
import { Team } from './Team';

export const createTeams = (teamNames: string[]) => {
  let teams: Team[] = [];
  let availablePlayers = [...players];

  for (const teamName of teamNames) {
    const maxAttempts = 3000;
    let attempts = 0;
    const team = new Team(teamName);

    while (team.getTeam().length < 11 && attempts < maxAttempts) {
      attempts++;
      const randomIndex = Math.floor(Math.random() * availablePlayers.length);
      const selectedPlayer = availablePlayers[randomIndex];

      const player = new Player(selectedPlayer.name, selectedPlayer.playingRole, selectedPlayer.credit,false, false, 0, 0, false, 0, '', 0 );
      try {
        team.addPlayer(player);
        availablePlayers.splice(randomIndex, 1);
      } catch (e) {
        continue;
      }
    }
    if (team.getTeam().length < 11) {
      throw new Error(`Unable to create team with name ${teamName}`);
    }
    // setting up captain and viceCaptain at team players index 1 and 2
    team.getTeam()[1].setCaptain();
    team.getTeam()[2].setViceCaptain();

    teams.push(team);
  }
  return teams;
};