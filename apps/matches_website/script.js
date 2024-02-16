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
                        { time: "19:00", teams: "Player K vs Player L", link: "#" }
                    ]
                }
            ]
        }
    ];

    // Initialize tabs
    $('.tabs').tabs();

    function generateSchedule() {
        const daysTabs = $('#days-tabs');
        const categoriesContent = $('#categories-content');

        scheduleData.forEach((day, dayIndex) => {
            // Create tabs for days
            daysTabs.append(`<li class="tab"><a href="#day-${dayIndex}">${day.day}</a></li>`);

            // Create content container for each day
            const dayContent = $(`<div id="day-${dayIndex}" class="col s12"></div>`);
            categoriesContent.append(dayContent);

            // Create tabs for categories within each day
            const categoriesTabs = $('<ul class="tabs"></ul>');
            dayContent.append(categoriesTabs);

            const categoriesContentContainer = $('<div></div>');
            dayContent.append(categoriesContentContainer);

            day.categories.forEach((category, categoryIndex) => {
                // Add category tab
                categoriesTabs.append(`<li class="tab"><a href="#category-${dayIndex}-${categoryIndex}">${category.name}</a></li>`);

                // Add matches for each category
                const categoryContent = $(`<div id="category-${dayIndex}-${categoryIndex}" class="col s12"></div>`);
                categoriesContentContainer.append(categoryContent);

                category.matches.forEach(match => {
                    // Add match button
                    const matchButton = $(`<a href="${match.link}" class="waves-effect waves-light btn-small">${match.time} - ${match.teams}</a>`);
                    categoryContent.append(matchButton);
                });
            });
        });

        // Reinitialize tabs to account for dynamically added content
        $('.tabs').tabs();
    }

    generateSchedule();
});
