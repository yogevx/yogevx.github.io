$(document).ready(function() {
    // Simulated data fetch function
    function fetchData() {
        // Example data structure
        return [
            { date: "Today", categories: ["Football", "Basketball"] },
            { date: "Tomorrow", categories: ["Tennis", "Volleyball"] }
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
