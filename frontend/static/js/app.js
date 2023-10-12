function init() {
    // Use d3.json to load the data
    d3.json("/movies").then((data) => {
      // Get unique genre values
      let genres = [...new Set(data.map((row) => row.Genre))];
  
      // Select the genre dropdown menu
      let dropdown = document.getElementById("genre-dropdown");
  
      // Add options for each unique genre value
      genres.forEach((genre) => {
        let option = document.createElement("option");
        option.value = genre;
        option.text = genre;
        dropdown.appendChild(option);
      });
  
      // Set the initial genre to "All genres"
      let initialGenre = "";
      buildCharts(initialGenre);
    });
  }

  init();

  function buildCharts(genre) {
    // Use d3.json to load the data
    d3.json("/movies").then((data) => {
      // Filter the data based on the selected genre
      let filteredData = data.filter((row) => genre === "" || row.Genre === genre);
  
      // Create a trace for the bar chart
      let trace = {
        x: filteredData.map((row) => row.IMDB_Rating),
        y: filteredData.map((row) => row.Series_Title),
        type: "bar",
        orientation: "h"
      };
  
      // Create a layout for the bar chart
      let layout = {
        title: `Top IMDB Ratings${genre ? ` for ${genre}` : ""}`,
        xaxis: { title: "IMDB Rating" },
        yaxis: { title: "Title" }
      };
  
      // Plot the bar chart
      Plotly.newPlot("bar", [trace], layout);
  
      // Add additional charts here based on selected genre
    });
  }

  init();

  function buildCharts(genre) {
    // Use d3.json to load the data
    d3.json("/movies").then((data) => {
      // Filter the data based on the selected genre
      let filteredData = data.filter((row) => genre === "" || row.Genre === genre);
  
      // Create a trace for the bar chart
      let trace = {
        x: filteredData.map((row) => row.Gross),
        y: filteredData.map((row) => row.Series_Title),
        type: "line",
        orientation: "h"
      };
  
      // Create a layout for the bar chart
      let layout = {
        title: `Top IMDB gross${genre ? ` for ${genre}` : ""}`,
        xaxis: { title: "IMDB gross" },
        yaxis: { title: "Title" }
      };
  
      // Plot the bar chart
      Plotly.newPlot("line", [trace], layout);
  
      // Add additional charts here based on selected genre
    });
  }



init();