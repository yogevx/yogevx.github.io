$(document).ready(function() {
    // Mock data - replace with your actual data fetching logic
    const scheduleData = [
        {
            day: "2024-02-20",
            categories: [
                {
                    name: "Football",
                    matches: [
                        { time: "18:00", teams: "Team A vs Team B", link: "#" },
                        { time: "20:00", teams: "Team C vs Team D", link: "#" }
                    ]
                },
                {
                    name: "Basketball",
                    matches: [
                        { time: "18:30", teams: "Team E vs Team F", link: "#" },
                        { time: "21:00", teams: "Team G vs Team H", link: "#" }
                    ]
                }
            ]
        },
        {
            day: "2024-02-21",
            categories: [
                {
                    name: "Tennis",
                    matches: [
                        { time: "17:00", teams: "Player I vs Player J", link: "#" },
                        { time: "19:00", teams: "Player K vs Player L", link: "#"
