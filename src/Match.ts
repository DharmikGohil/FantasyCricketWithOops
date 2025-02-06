import { createTeams } from "./createTeams";
import { Inning } from "./Inning";
import { Team } from "./Team";

export class Match{
    private team1! : Team;
    private team2! : Team;
    private tossWinner! : string;
    constructor(team1: Team, team2 : Team){
        this.team1 = team1;
        this.team2 = team2;
    }

    startMatch(){
        this.toss();
        console.log(`Toss won by ${this.tossWinner}`);
        const battingTeam = this.tossWinner === this.team1.getName() ? this.team1 : this.team2;
        const bowlingTeam = this.tossWinner === this.team1.getName() ? this.team2 : this.team1;
        battingTeam.setTossWinner();
        const inning1 = new Inning(battingTeam, bowlingTeam);
        inning1.play();
        // const inning2 = new Inning(bowlingTeam, battingTeam);
        // inning2.play();
    }
    
    private toss(){
        this.tossWinner = Math.random() > 0.5 ? this.team1.getName() : this.team2.getName();
    }
}

        const teams = createTeams(["RCB", "CSK"]);
        const match = new Match(teams[0], teams[1]);
        const rcbTeam = teams[0]
        match.startMatch();
        // console.log("-----------------------")
        // console.log("===== Team Details =====");
        // console.log(`Name: ${rcbTeam.getName()}`);
        // console.log(`Fantasy Points: ${rcbTeam.getFantasyPoints()}`);
        // console.log(`Total Runs: ${rcbTeam.getRuns()}`);
        // console.log(`Toss Winner: ${rcbTeam.isTossWon() ? "Yes" : "No"}`);
        // console.log(`Available Credits: ${rcbTeam.getCredits()}`);
        // console.log(`Batsmen: ${rcbTeam.getBatsmanCount()}, Bowlers: ${rcbTeam.getBowlerCount()}, Wicketkeepers: ${rcbTeam.getWicketKeeperCount()}`);
        
        // console.log("\n===== Player Details =====");
        // console.table(
        //   rcbTeam.getTeam().map(player => ({
        //     Name: player.getName(),
        //     Role: player.getRole(),
        //     Credit: player.getCredit(),
        //     Captain: player.getIsCaptain() ? "Yes" : "No",
        //     ViceCaptain: player.getIsViceCaptain() ? "Yes" : "No",
        //     Runs: player.getRuns(),
        //     "Fantasy Points": player.getFantasyPoints(),
        //     Played: player.getIsPlayed() ? "Yes" : "No",
        //     "Balls Played": player.getBallsPlayed(),
        //     "Out By": player.getOutBy() || "-",
        //     "Wickets Taken": player.getTakenWickets(),
        //   }))
        // );
        