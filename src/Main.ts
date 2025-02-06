import { createTeams } from "./createTeams";
import { Match } from "./Match";

const teams = createTeams(['RCB', 'CSK']);
const match = new Match(teams[0], teams[1]);
match.play();
