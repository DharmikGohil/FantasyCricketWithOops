import { Team } from "./Team";

export class Match{
    private teams : Team[];
    constructor(){
        this.teams = [];
    }
    getTeams(){
        return this.teams;
    }
    addTeam(team : Team){
        this.teams.push(team);
    }
}