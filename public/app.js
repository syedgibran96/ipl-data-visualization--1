function fetchDataAndVisualize() {
    fetch("./data.json")  // ** fetch module is availabe in browser not part of node ** 
    .then(d => d.json())
    .then(visualizeData);

    fetch("./data1.json")
    .then(d => d.json())
    .then(visualizeData1);

    fetch("./data2.json")
    .then(d => d.json())
    .then(visualizeData2);

    fetch("./data3.json")
    .then(d => d.json())
    .then(visualizeData3)

    fetch("./data4.json")
    .then(d=> d.json())
    .then(visualizeData4)
}

fetchDataAndVisualize();



function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear)
    return 
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear){
    const seriesData = []
    for (let year in matchesPlayedPerYear){
        seriesData.push([year,matchesPlayedPerYear[year]])
    }

    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column",
      },
      title: {
        text: "Total number of Macthes Played Per Year",
      },
      subtitle: {
        text:
          'Source: <a href="hhttps://www.kaggle.com/nowke9/ipldata/data">kaggle</a>',
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of matches",
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        pointFormat: "Matches: <b>{point.y:.1f}</b>",
      },
      series: [
        {
          name: "year",
          data: seriesData,
        },
      ],
    });
}



function visualizeData1(data){
   visualizeMatchesWonPerYear(data.matchesWonPerYear)
    return
}

function visualizeMatchesWonPerYear(matchesWonByEachTeam) {
  // const seriesData = [];
  // let sum = new Array(12).fill(0);
  // let sum1 = [];
  // for(let d in data) {
  //   for(let year of data[d].length) {
  //     sum1.push(year)
  //   }
  //   let res = {
  //     "name" : d,
  //     "data" : data[d]
  //   }
  // res["name"] = d
  // res["data"] =
  // sum=[data[d].forEach(e => sum[e%2008]+=1)];
  // sum = Array.from(Object.values(data[d]))
  // for(let s of sum){
  //   sum1[s%2008]
  //   // }
  //   seriesData.push(res)
  // }
  // console.log(sum1);
  // console.log(seriesData);
  const seriesData = [];
  for (let team in matchesWonByEachTeam) {
    seriesData.push([team, matchesWonByEachTeam[team]]);
  }
  Highcharts.chart("matches-won-per-year", {
    chart: {
      type: "column",
    },
    title: {
      text: "Wins By Each Teams",
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "wins",
      },
    },
    series: [
      {
        name: "Teams",
        data: seriesData,
      },
    ],
  });
}


function visualizeData2(data) {
  visualizeExtraRunPerTeam(data.extraRunsPerTeam);
  return;
}

function visualizeExtraRunPerTeam(extraRuns) {
  const seriesData = [];
  for (let team in extraRuns) {
    seriesData.push([team, extraRuns[team]]);
  }

  Highcharts.chart("extra-runs-per-team", {
    chart: {
      type: "column",
    },
    title: {
      text: "Extra Runs Conceded By Each Team",
    },
    subtitle: {
      text:
        'Source: <a href="hhttps://www.kaggle.com/nowke9/ipldata/data">IPL Data</a>',
    },
    xAxis: {
      type: "category",
      labels: {
                rotation: -25,
                style: {
                    fontSize: "13px",
                    fontFamily: "Verdana, sans-serif"
                }
            }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Runs: <b>{point.y:.1f}</b>",
    },
    series: [
      {
        name: "year",
        data: seriesData,
      },
    ],
  });
}

function visualizeData3(data){
  visualizeEconomicBowlers(data.economicBowlers);
  return 
}

function visualizeEconomicBowlers(economy){
  
  const seriesData = Object.entries(economy)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 10);

  Highcharts.chart("economy-per-bowler", {
    chart: {
      type: "column",
    },
    title: {
      text: "Top 10 Economical Bowlers for 2015 Season",
    },
    subtitle: {
      text:
        'Source: <a href="hhttps://www.kaggle.com/nowke9/ipldata/data">IPL Data</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -25,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Economy: <b>{point.y:.1f}</b>",
    },
    series: [
      {
        name: "year",
        data: seriesData,
      },
    ],
  });
}

function visualizeData4(data) {
  visualizeMatchesPerVenue(data.matchesPerVenue);
  return;
}

function visualizeMatchesPerVenue(matches) {
  const seriesData = []
  for(let venue in matches){
    seriesData.push([venue,matches[venue]])
  }
  console.log(seriesData)

  Highcharts.chart("matches-per-venue", {
    chart: {
      type: "column",
    },
    title: {
      text: "Matches Per Venue",
    },
    subtitle: {
      text:
        'Source: <a href="hhttps://www.kaggle.com/nowke9/ipldata/data">IPL Data</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -60,
        style: {
          fontSize: "12px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Matches: <b>{point.y:.1f}</b>",
    },
    series: [
      {
        name: "year",
        data: seriesData,
      },
    ],
  });
  
}