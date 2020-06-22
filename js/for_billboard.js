var chart_1 = bb.generate({
    data: {
        colors: {
            Clicks: '#fbcf71',
            "Sign ups": '#1abc9c',
            "Page view": '#1f7bb6'
        },
        columns: [
            ["Clicks", 20, 60, 20, -40, -30, 30, 50],
            ["Page view", -35, 25, 60, 20, -40, -35, 20],
            ["Sign ups", 40, 50, 0, -40, -20, 40, 55]

        ],
        types: {
            Clicks: "spline",
            "Page view": 'spline',
            "Sign ups": "spline"
        }
    },




    axis: {
        y: {
            tick: {
                count: 7,
                values: [-60, -40, -20, 0, 20, 40, 60]
            }
        },


        x: {
            show: false
        }
    },

    bindto: "#chart_1"
});







var chart_2 = bb.generate({
    data: {
        colors: {
            "Total Clicks": '#1f7bb6',            
            "Signups": '#1abc9c',
            "Total Views": '#fbcf71'
        },
        columns: [
            ["Total Clicks", 30],
            ["Signups", 20],
            ["Total Views", 50]
        ],
        order: [],
        type: "donut"
    },
    donut: {
        title: "50",
        label: {
            show: false
        }
    },
    legend: {
        show: false
    },
    bindto: "#chart_2"
});