import { Squad } from "./Squad";

export class Team{
    private teams : Squad[];
    constructor(){
        this.teams = [];
    }
    getTeams(){
        return this.teams;
    }
    addSquad(squad : Squad){
        this.teams.push(squad);
    }
}