var userInput = [

];

var testData = [
{x:50, y:7},
{x:60, y:8},
{x:70, y:8},
{x:80, y:9},
{x:90, y:9},
{x:100, y:9},
{x:110, y:10},
{x:120, y:11},
{x:130, y:14},
{x:140, y:14},
{x:150, y:15}
];


const data = {
    datasets: [{
        label: 'Your Input',
        pointRadius: 4,
        pointBackgroundColor: "rgba(0,0,250,1)",
        data:userInput
    }]
};

function handleClick(e) {
    const canvasPosition = Chart.helpers.getRelativePosition(e, scatterPlot);

    var xPos = scatterPlot.scales["x-axis-1"].getValueForPixel(canvasPosition.x)
    var yPos = scatterPlot.scales["y-axis-1"].getValueForPixel(canvasPosition.y)

    console.log("xPos: " + xPos)
    console.log("yPos: " + yPos)

    // Retreive the new point
    // Add it to the dataset
    // Show the new graph with that data point
    userInput.push({x: xPos, y: yPos});
            
    //scatterPlot.data.datasets[0].data.push({x: xPos, y: yPos});
    scatterPlot.update();
}

// CONFIG
const config = {
    type: "scatter",
    datasets: [{
        label: 'Your Input',
        pointRadius: 4,
        pointBackgroundColor: "rgba(0,0,250,1)",
        data:userInput
    }],
    options: {
        maintainAspectRatio: false,
        
        // RESPONDS when canvas is clicked on
        onClick: (e) => {
            handleClick(e);
        },
        scales: {
            x: {
                max: 160
            },
            y: {
                max: 16
            }
        },

        

    }
}

const scatterPlot = new Chart(
    "scatterPlot", 
    config
);



// Called by "Show results button" 
// - Adds user's input into total data
// - Displays all the data
function showAllPoints() {
console.log("Show all points")

scatterPlot.data = {
    label: "User Data",
    //labels: ["Your Data", "All Data"],
    datasets: [{
    data: userInput,
    pointBackgroundColor: "rgba(0, 0, 250,1)",
    }, {
    data:xyValues,
    pointBackgroundColor: "rgba(200, 0, 0, 1)"
    }]
}

scatterPlot.update();
}