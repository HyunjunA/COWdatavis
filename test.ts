// var margin = { top: 20, left: 80, bottom: 50, right: 10 };
var margin = { top: 20, left: 10, bottom: 50, right: 10 };
var widthMIDBar = 1300 - margin.left - margin.right;
var heightMIDBar = 250 - margin.top - margin.bottom;

var svgmidsBar = d3.select("#chart").append("svg").attr("id", "midsBar")
  .attr('width', widthMIDBar + margin.left + margin.right)
  .attr('height', heightMIDBar + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');


// console.log(widthMIDBar)
// console.log(heightMIDBar)

var x = d3.scaleBand();
var y = d3.scaleLinear();

var xAxis;

var dataset;
// var mode = "#all";
var mode = "#ascend";
// var modeSortMet = "#alpha";
var modeSortMet = "#all";
var datasetCop;

var titleFirst;
var titleSecond = "For Military Expenditure";
var titleSort = "Alphabetical Order";

var maxCountMids;


  data = value[5];
  maxCountMids = d3.max(data, function (d) { return +d.countmids; });

  setMode("#alpha");
  setNumCouMode("#res");


  // drawBars();



  x.domain(dataset.map(function (d) { return d.year; }))
    .range([0, widthMIDBar])
    .paddingInner(0.25);

  // console.log(widthMIDBar)

  // y.domain([0, d3.max(dataset, function (d) { return d.countmids; })])
  //     .range([height, 0]);
  y.domain([0, maxCountMids + 5])
    .range([heightMIDBar, 0]);

  // console.log(heightMIDBar)

  svgmidsBar.selectAll(".bar")
    .data(dataset, function (d: any) { return d.year; })
    .enter()
    .append("rect")
    .attr("id", function (d: any) {
      return "midscountbar" + d.year.toString();
    })
    .attr("class", "midscountbar")
    .attr("x", function (d: any) { return x(d.year); })
    .attr("y", function (d: any) { return y(d.countmids); })
    .attr("width", x.bandwidth())
    .attr("height", function (d: any) { return heightMIDBar - y(d.countmids); })
    .on('mouseover', function (this: any) {
      // console.log("hello!!!")
      var idString = "#" + this.id.toString();
      // console.log(String(idString))
      // var tooltipSpan = document.getElementById('tooltip-mid');

      idString = String(idString)
      d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
      d3.select(idString).attr("fill", "steelblue");
      // console.log(value[1]);

      // var temp = this.values[1].filter(x => x.year == String(count))
      // console.log(values[1])
      // drawMIDs(temp)
      // this.drawMIDs(temp:any)


      // var centr = path.centroid(d)
      // // console.log(t)
      // var xPosition = centr[0] - 100;
      // // xPosition += (xPosition > diameter) ? -200 : 50;  //switch sides
      // // var yPosition = parseFloat(d3.mouse(this)[1]);
      // var yPosition = centr[1];
      // // yPosition += (yPosition > diameter) ? -50 : 80;  //switch up/bottom

      // var tooltipSpan = document.getElementById('tooltip-mid');

      // window.onmousemove = function (e) {
      //   var x = e.clientX,
      //     y = e.clientY;
      //   // console.log(x)
      //   // console.log(y)
      //   tooltipSpan.style.top = (y) + 'px';
      //   tooltipSpan.style.left = (x - 300) + 'px';
      // };

      // d3.select('#tooltip-mid')
      //   // .style('left', xPosition + 'px')
      //   // .style('top', yPosition + 'px')
      //   .select('#country-info-mid')
      //   .html('<h4>' + d.properties.A3 + '</h4>');
      // d3.select('#tooltip-mid').classed('hidden', false);

      // var idString = "#" + this.id.toString();
      // idString = String(idString)
      // d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
      // d3.select(idString).attr("fill", "steelblue");

    })
    .on('mouseout', function (this: any) {
      // d3.select('#tooltip-mid').classed('hidden', true);
      var idString = "#" + this.id.toString()
      idString = String(idString)
      d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));
      // // d3.select('#card-name-bub1').html('Country Information');
      // // d3.select('#card-desc-bub1').html('Mouse over bars for quick facts.<br/><br/><br/>');
    });
  // .attr("class","midscountbar");




  var xAxis = d3.axisBottom(this)
    .scale(x)



  svgmidsBar.append("g")
    .attr("id", "x-axis")
    .attr("class", "axis")
    .attr("transform", "translate(0," + heightMIDBar + ")")
    .call(xAxis);



  var yAxis = d3.axisLeft(this)
    .scale(y)
  // .ticks(5, 'd');

  svgmidsBar.append("g")
    .attr("id", "y-axis")
    .attr("class", "axis")
    .call(yAxis);

  svgmidsBar.append("text")
    .attr("x", - heightMIDBar / 2 + 800)
    .attr("y", - margin.left + 30)

    .attr("transform", "rotate(-90)")
    .attr('class', 'ylabel')
    .append("tspan").text("Expenditure(% of GDP)")
    // .append("tspan").text("-2")
    .style("baseline-shift", "super")
    .style("font-size", "0.7em");


  //resize()

