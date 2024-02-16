$(document).ready(function() {
    // Fetch and process data
    // Note: Adapt this function to fetch data from your source
    function fetchData() {
        // Example data structure
        return [
            { 
                date: "Today", 
                categories: [
                    { name: "Football", matches: ["Match 1", "Match 2"] },
                    { name: "Basketball", matches: ["Match 3", "Match 4"] }
                ]
            },
            { 
                date: "Tomorrow", 
                categories: [
                    { name: "Tennis", matches: ["Match 5", "Match 6"] },
                    { name: "Volleyball", matches: ["Match 7", "Match 8"] }
                ]
            }
        ];
    }

    function generateTabs(data) {
        const tabsContainer = $('#tabs-container');
        const contentContainer = $('#content-container');

        data.forEach((item, index) => {
            // Creating tab for each date
            const tab = $('<button>').addClass('tab').text(item.date).attr('data-index', index);
            tabsContainer.append(tab);

            // Creating content for each tab
            const content = $('<div>').addClass('content').attr('id', `content-${index}`);
            item.categories.forEach(category => {
                content.append($('<p>').text(category));
            });
            contentContainer.append(content);

            // Tab click event
            tab.on('click', function() {
                $('.tab').removeClass('active');
                $(this).addClass('active');
                $('.content').hide();
                $(`#content-${$(this).data('index')}`).show();
            });
        });

        // Activate the first tab
        $('.tab').first().click();
    }

    const data = fetchData();
    generateTabs(data);
});
