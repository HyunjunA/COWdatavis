import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    var margin = { top: 20, left: 80, bottom: 50, right: 10 };
    var width = 800 - margin.left - margin.right;
    var height = 600 - margin.top - margin.bottom;
    var numPoints = 0;
    var numTexts = 0;

    var svg = d3.select("#PieChart1Div").append("svg")
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');




    // var svg = d3.select("#pieChart1"),
    //     width = +svg.attr("width"),
    //     height = +svg.attr("height"),
    var radius = Math.min(width, height) / 2,
      g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    // var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00","#900bc5","#43cbc5","#f05d56"]);
    // var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#6b486b", "#d0743c", "#ff8c00"]);
    // var color = d3.scaleOrdinal([d3.schemeCategory10[2],d3.schemeCategory10[3],d3.schemeCategory10[5],d3.schemeCategory10[4],d3.schemeCategory10[9]])
    var color = d3.scaleOrdinal([d3.schemeSet3[3],d3.schemeSet3[4]])
    var pie = d3.pie<any>() //pie generator
      .sort(null)
      .value(function (d: any) {
        return d.value;
      });

    var countryName = [];
    var path = d3.arc<any>()
      .outerRadius(radius - 10)
      .innerRadius(0); //make != 0 for a donut chart

    var label = d3.arc()
      .outerRadius(radius - 60)
      .innerRadius(radius - 60);

    // d3.json("MILoneYear(A7)2016Ver3.json", function (d) {
    //     d.value = +d.value;
    //     return d;
    // }).then(function (data) {

    // d3.json("MILoneYear(A7)2016Ver3.json", function (d) {

    //     d.value = +d.value;
    //     return d;
    // }).then(function (data) {
    d3.select('#tooltip-mid').classed('hidden', false);
    d3.select('#tooltip-midInfor').classed('hidden', false);
    
    d3.json("tradeImportanceAndWarsPoint1.json").then(function (data: any) {

      data.value = +data.value;
      var arc = g.selectAll(".arc")
        .data(pie(data)) //use pie generator to create the data needed for the each slice of the pie
        .enter().append("g")
        .attr("class", "arc");
      arc.append("path") //for each slide use arc path generator to draw the pie
        .attr("d", path)
        .attr("class", "pathLine")
        .attr("id", function (d: any) {
          countryName.push(d.data.category); 
          countryName.sort()
          color.domain(countryName.sort());
          numPoints = numPoints + 1;
          return "pathLine1" + (numPoints + 1).toString();
        })
        .attr("fill", function (d: any) { return color(d.data.value); }); //get data from node (select and 0.__data__ in console)
      arc.append("text") //for each slide use label path generator to place the text
        .attr("transform", function (d: any) {
          // console.log(label.centroid(d));
          return "translate(" + label.centroid(d) + ")";
        })
        .attr("class", function () {
          return "textonpie"
        })
        .attr("id", function () {
          numTexts = numTexts + 1;
          return "textonpie" + (numTexts + 1).toString();
        })
        .attr("dy", "0.35em")
        .text(function (d: any) { return d.data.category; });


      arc.selectAll(".pathLine")
        .on('mouseover', function (this: any, d: any) {
          var idString = "#" + this.id.toString();
          idString = String(idString)

          d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
          d3.select(idString).attr("fill", "#f0027f")

          d3.select('#card-subtitle1').html('');
          d3.select('#card-subtitle2').html('');

          d3.select('#card-name-pie1').html("Information");
          
          d3.select('#card-desc-pie1').html('category: ' + d.data.category + '<br/>' +
            'Number of cases: ' + d.data.value + ' <br/>' + 
            'Percentage: ' + d.data.per + ' <br/>');
          d3.select('#card-desc2-pie1').html('');
          // d3.select('#card-subtitle2').html('');
          // d3.select('#card-desc').html('Expenditure: ' + d.data.value+ ' % of GDP<br/>');
        })
        .on('mouseout', function (this: any) {
          // console.log(this);
          var idString = "#" + this.id.toString()
          idString = String(idString)
          d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));

          d3.select('#card-subtitle1').html('Data');
          d3.select('#card-subtitle2').html('How to interact with this pie chart');

          d3.select('#card-name-pie1').html('Generic Information');
          
          d3.select('#card-desc-pie1').html('This data is about war records between two countries from 1823 to 2003. The data set is provided by <a href="http://www.correlatesofwar.org/">this the Correlates of War project</a>');
          // d3.select('#card-desc-pie1').html(' This data is about military expenditure for the 5 countries. Some information is from <a href="https://en.wikipedia.org/wiki/Military_budget">this wikipedia</a>. U.S.A has the highest average. On the other hand, China has the lowest value among the 5 countries.');
          
          d3.select('#card-desc2-pie1').html('By mouseovering the each pie, you can check the percentage. If "Less than 0.1" represents that War outbreaks between two countries whose maximum value of trade dependency is less than 0.1');
        });




      arc.selectAll(".textonpie")
        .on('mouseover', function (this: any, d: any) {
          // console.log("I am on the text!!!!");
          // console.log(this);
          var idString = "#" + this.id.toString();
          // console.log(idString);
          idString = String(idString)

          d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
          // d3.select(idString).attr("fill","#f0027f")

          d3.select('#card-subtitle1').html('');
          d3.select('#card-subtitle2').html('');

          d3.select('#card-name-pie1').html("Information");
          d3.select('#card-desc-pie1').html('category: ' + d.data.category + '<br/>' +
            'Number of cases: ' + d.data.value + ' <br/>'+ 
            'Percentage: ' + d.data.per + ' <br/>');
          d3.select('#card-desc2-pie1').html('');
          // d3.select('#card-subtitle2').html('');
          // d3.select('#card-desc').html('Expenditure: ' + d.data.value+ ' % of GDP<br/>');
        })
        .on('mouseout', function (this: any) {
          // console.log(this);
          var idString = "#" + this.id.toString()
          idString = String(idString)
          d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));

          d3.select('#card-subtitle1').html('Data');
          d3.select('#card-subtitle2').html('How to interact with this pie chart');

          // d3.select('#tooltip-pie1').classed('hidden', true);
          d3.select('#card-name-pie1').html('Generic Information');
          d3.select('#card-desc-pie1').html('This data is about war records between two countries from 1823 to 2003. The data set is provided by <a href="http://www.correlatesofwar.org/">this the Correlates of War project</a>');
          // d3.select('#card-desc-pie1').html(' This data is about military expenditure for the 5 countries. Some information is from <a href="https://en.wikipedia.org/wiki/Military_budget">this wikipedia</a>. U.S.A has the highest expenditure. On the other hand, Germany has the lowest value among the 5 countries.');
          // d3.select('#card-desc').html('5 countries.<br/><br/><br/>');
          d3.select('#card-desc2-pie1').html('By mouseovering the each pie, you can check the percentage. If "Less than 0.1" represents that War outbreaks between two countries whose maximum value of trade dependency is less than 0.1');
        });


    });


    
  }

}
