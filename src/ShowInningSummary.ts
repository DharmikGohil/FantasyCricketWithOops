import { IPlayer } from "../helper/PlayerInterface";
import { IShowInningSummary } from "../helper/ShowInningSummaryInterface";
import { ITeam } from "../helper/TeamInterface";

export class ShowInningSummary implements IShowInningSummary{
    public displayMatchSummary(battingTeam: ITeam, bowlingTeam: ITeam): void {
        this.displayTeamSummary(battingTeam, "Batting");
        console.log("\n");
        this.displayTeamSummary(bowlingTeam, "Bowling");
    }

    private displayTeamSummary(team: ITeam, inningsType: "Batting" | "Bowling"): void {
        console.log("=".repeat(50));
        console.log(`${inningsType} Team Summary`);
        console.log("=".repeat(50));

        // Team Overview
        console.log("\n----- Team Details -----");
        console.log(`Name: ${team.getName()}`);
        console.log(`Fantasy Points: ${team.getFantasyPoints()}`);
        console.log(`Total Runs: ${team.getRuns()}`);
        console.log(`Toss Winner: ${team.isTossWon() ? "Yes" : "No"}`);
        console.log(`Available Credits: ${team.getCredits()}`);
        console.log(`Team Composition: ${team.getBatsmanCount()} Batsmen, ${team.getBowlerCount()} Bowlers, ${team.getWicketKeeperCount()} Wicketkeepers`);

        // Player Details
        console.log("\n----- Player Details -----");
        if (inningsType === "Batting") {
            console.table(
                team.getTeam().map((player: IPlayer) => ({
                    Name: player.getName(),
                    Role: player.getRole(),
                    Captain: player.getIsCaptain() ? "Yes" : "No",
                    ViceCaptain: player.getIsViceCaptain() ? "Yes" : "No",
                    Runs: player.getRuns(),
                    "Balls Played": player.getBallsPlayed(),
                    "Strike Rate": player.getBallsPlayed() ? 
                        Number(((player.getRuns() / player.getBallsPlayed()) * 100).toFixed(2)) : 0,
                    "Out By": player.getOutBy() || "Not Out",
                    "Fantasy Points": player.getFantasyPoints(),
                }))
            );
        } else {
            console.table(
                team.getTeam().map((player: IPlayer) => ({
                    Name: player.getName(),
                    Role: player.getRole(),
                    Captain: player.getIsCaptain() ? "Yes" : "No",
                    ViceCaptain: player.getIsViceCaptain() ? "Yes" : "No",
                    "Wickets": player.getTakenWickets(),
                    "Fantasy Points": player.getFantasyPoints(),
                }))
            );
        }
    }
}