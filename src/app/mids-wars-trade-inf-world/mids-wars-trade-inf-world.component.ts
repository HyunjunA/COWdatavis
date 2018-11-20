import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-mids-wars-trade-inf-world',
  templateUrl: './mids-wars-trade-inf-world.component.html',
  styleUrls: ['./mids-wars-trade-inf-world.component.css']
})
export class MidsWarsTradeInfWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {







    // WorldMid is map
    var svg = d3.select("#worldMid"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    var files = [
      // "map.geojson",
      "map_COW.geojson",
      "MIDLOCA_2.0.csv",
      // "directed_dyadic_war_lati_long_stateName.csv",
      "directed_dyadic_war_lati_long_stateName_allYear.csv",
      "COW country codes_lati_long.csv",
      "Dyadic_COW_4.0_flow2_1870.json",
      // "MIDLOCA_2.0_groupbycountbyyear.csv",
      "MIDLOCA_2.0_groupbycountbyyear.csv__allYear.csv",
      // "directed_dyadic_war_lati_long_stateNamecountbyyear.csv",
      // "directed_dyadic_war_lati_long_stateNamecountbyyearAllVer2.csv",
      "directed_dyadic_war_lati_long_stateNamecountbyyearAllVer3.csv",
      "Dyadic_COW_4.0_Processed.csv",//trade dataset
      "Inter-StateWarsList-Ver2.csv",
      // "test.json"
    ];


    var promises = [];

    files.forEach(function (url) {
      var partsOfurl = url.split('.');


      if (partsOfurl[partsOfurl.length - 1] == "geojson" || partsOfurl[partsOfurl.length - 1] == "json") { promises.push(d3.json(url)) }
      if (partsOfurl[partsOfurl.length - 1] == "csv") { promises.push(d3.csv(url)) }

    });


    var percentMil = [0, 1];

    Promise.all(promises).then(function (values) {

      var worldmapPath = values[0]

      var midsRecord = values[1];

      var wardata = values[2];

      var whcounNaLatLong = values[3];



      drawBasicInforOnMap()







      // MIDs Bar chart part
      drawMIDSbars(values[5])

      // War Bar chart part
      drawWARSbars(values[6])

      // Trade Part
      drawTRADEbars(values[7])


      // World Map Part
      drawMapOrigin(width, height, worldmapPath)





      //MAP part
      d3.select('#tooltip-mid').classed('hidden', true);

      //South Korea
      // var projection = d3.geoMercator().fitSize([width, height], worldmapPath.features[40]);
      var projection = d3.geoMercator().fitSize([width, height], worldmapPath);
      // var projection2 = d3.geoAlbersUsa().fitSize([width, height], popuUS);

      var path = d3.geoPath().projection(projection);

      var warCount = 1828;

      var refixcoID = [];


      d3.select("#warbot")
        .on("click", function () {
          // console.log("click")
          warCount = warCount + 1
          // console.log(warCount)
          // console.log(values[2])
          var temp = values[2].filter(x => x.year == String(warCount))
          // console.log(values[2])
          // console.log(temp)

          // midsRecord = temp
          // console.log(temp);
          // drawWars(temp)

        });


      // d3.select("#midsButton")
      //   .on("click", function () {

      //     d3.selectAll(".warDyadicPath").remove()
      //     var temp = values[1].filter(x => x.year == String(count))
      //     drawMIDs(temp)

      //   });





      d3.select("#pills-mids-tab")
        .on("click", function () {
          // console.log("WARBUTTON")


          removeWarsVer3()

          d3.select("#worldMidChartHiHead")
            .style("color", "white")






          // d3.select("#WarMajorOnMap").remove()
          // d3.select("#WarTitleOnMap").remove()
          // d3.select("#WarYearOnMap").remove()


          // d3.select("#worldMidChartHead")
          // .append("br")
          // .attr("id","tempBlank1")

          // d3.select("#worldMidChartHiHead")
          // .text(" ")

          d3.selectAll(".mid").remove()

          var newTitle = "Militarized Interstate Disputes"
          d3.select("#worldMidChartHead")
            .transition()
            .duration(300)
            .on("start", function transitionHeaderIn() {
              var t = d3.active(this)
                .style("opacity", 0)
                .remove();


              d3.select("#worldMidChartHead")
                .style("opacity", 0)
                .text(newTitle)
                .transition(t)
                .style("opacity", 1)
                .transition()
                .delay(100);
            });
          // var temp = values[2].filter(x => x.year == String(warCount))
          // drawWars(temp)
          // drawWarsVer2(temp, values[3])
        });








      d3.select("#pills-wars-tab")
        .on("click", function () {
          // console.log("WARBUTTON")
          // <br id="tempBlank1">
          // d3.select("#worldMidChartHead")
          // .append("br")
          // .attr("id","tempBlank1");

          removeWarsVer3()
          d3.select("#worldMidChartHiHead")
            .style("color", "white")


          d3.selectAll(".mid").remove()

          var newTitle = "The countries at wars"
          d3.select("#worldMidChartHead")
            .transition()
            .duration(300)
            .on("start", function transitionHeaderIn() {
              var t = d3.active(this)
                .style("opacity", 0)
                .remove();


              d3.select("#worldMidChartHead")
                .style("opacity", 0)
                .text(newTitle)
                .transition(t)
                .style("opacity", 1)
                .transition()
                .delay(100);
            });



            d3.select("#WarMajorOnMap")
            // .attr("absolute","absolute")
            // .attr("top", "70px")
            // .attr("right", "15px")
            // .attr("y", 400)
            .transition()
            .duration(1000)
            .style("color", "black")
            .on("start", function transitionHeaderIn() {
  
              var t = d3.active(this)
                .style("opacity", 0)
                .remove();
              // console.log(t)
  
              d3.select("#WarMajorOnMap")
                .style("opacity", 0)
                .text("War Information")
                .transition(t)
                .style("opacity", 1)
                .style("color", "black")
                .transition()
                .delay(1000);
            });


            d3.select("#WarTitleOnMap")
          // .attr("absolute","absolute")
          // .attr("top", "70px")
          // .attr("right", "15px")
          // .attr("y", 400)
          .transition()
          .duration(1000)
          .style("color", "black")
          .on("start", function transitionHeaderIn() {

            var t = d3.active(this)
              .style("opacity", 0)
              .remove();
            // console.log(t)

            d3.select("#WarTitleOnMap")
              .style("opacity", 0)
              .text("from 1823-2003")
              .transition(t)
              .style("opacity", 1)
              .style("color", "black")
              .transition()
              .delay(1000);
          });


          d3.select("#WarYearOnMap")
              // .attr("absolute","absolute")
              // .attr("top", "70px")
              // .attr("right", "15px")
              // .attr("y", 400)
              .transition()
              .duration(1000)
              .style("color", "black")
              .on("start", function transitionHeaderIn() {

                var t = d3.active(this)
                  .style("opacity", 1)
                  .remove();
                // console.log(t)

                d3.select("#WarYearOnMap")
                  .style("opacity", 1)
                  // .text(String(selectedMIDYear))
                  // .text("#MIDs: " + MIDSelected[0].countmids)
                  .transition(t)
                  .style("opacity", 0)
                  .style("color", "black")
                  .transition()
                  .delay(1000);
              });


              
              d3.select("#forthInform")
              // .attr("absolute","absolute")
              // .attr("top", "70px")
              // .attr("right", "15px")
              // .attr("y", 400)
              .transition()
              .duration(1000)
              .style("color", "black")
              .on("start", function transitionHeaderIn() {

                var t = d3.active(this)
                  .style("opacity", 0)
                  .remove();
                // console.log(t)

                d3.select("#forthInform")
                  .style("opacity", 1)
                  // .text(String(selectedMIDYear))
                  // .text("#deaths: "+warSelectedBattDeath[0]['batdths'])
                  // .text("#Countries at War Information: " +countryAtWar[0].size)
                  // .text("Major war: "+String(charPart)+ yearString)
                  .transition(t)
                  .style("opacity", 0)
                  .style("color", "black")
                  .transition()
                  .delay(1000);
              });



              



          // var temp = values[2].filter(x => x.year == String(warCount))
          // drawWars(temp)
          // drawWarsVer2(temp, values[3])
        });










      d3.select("#pills-trade-tab")
        .on("click", function () {
          // console.log("TRde")

          removeWarsVer3()

          d3.select("#worldMidChartHiHead")
            .style("color", "white")

          d3.selectAll(".mid").remove()

          var newTitle = "International Trade"
          d3.select("#worldMidChartHead")
            .transition()
            .duration(300)
            .on("start", function transitionHeaderIn() {
              var t = d3.active(this)
                .style("opacity", 0)
                .remove();


              d3.select("#worldMidChartHead")
                .style("opacity", 0)
                .text(newTitle)
                .transition(t)
                .style("opacity", 1)
                .transition()
                .delay(100);
            });
          // var temp = values[2].filter(x => x.year == String(warCount))
          // drawWars(temp)
          // drawWarsVer2(temp, values[3])
        });







      d3.select("#pills-temp-tab")
        .on("click", function () {
          // console.log("WARBUTTON")
          removeWarsVer3()
          d3.selectAll(".country").remove()
          d3.selectAll(".mid").remove()
          drawMapOrigin(width, height, worldmapPath)


        });


      function drawBasicInforOnMap() {



        svg.append("text")
          .attr("id", "WarMajorOnMap")
          .attr("x", 0)
          .attr("y", 320)
          .attr("font-size", '25px')
          .attr("font-weight", "bold")
        // .text("War Information");


        d3.select("#WarMajorOnMap")
          // .attr("absolute","absolute")
          // .attr("top", "70px")
          // .attr("right", "15px")
          // .attr("y", 400)
          .transition()
          .duration(1000)
          .style("color", "black")
          .on("start", function transitionHeaderIn() {

            var t = d3.active(this)
              .style("opacity", 0)
              .remove();
            // console.log(t)

            d3.select("#WarMajorOnMap")
              .style("opacity", 0)
              .text("Militarized Conflicts")
              .transition(t)
              .style("opacity", 1)
              .style("color", "black")
              .transition()
              .delay(1000);
          });


        svg.append("text")
          .attr("id", "WarTitleOnMap")
          .attr("x", 0)
          .attr("y", 360)
          .attr("font-size", '17px')
          .attr("font-weight", "bold")
        // .text(String(warTitleArr[0]));

        svg.append("text")
          .attr("id", "WarYearOnMap")
          .attr("x", 0)
          .attr("y", 390)
          .attr("font-size", '17px')
          .attr("font-weight", "bold");



        svg.append("text")
          .attr("id", "forthInform")
          .attr("x", 0)
          .attr("y", 420)
          .attr("font-size", '17px')
          .attr("font-weight", "bold");


        d3.select("#WarTitleOnMap")
          // .attr("absolute","absolute")
          // .attr("top", "70px")
          // .attr("right", "15px")
          // .attr("y", 400)
          .transition()
          .duration(1000)
          .style("color", "black")
          .on("start", function transitionHeaderIn() {

            var t = d3.active(this)
              .style("opacity", 0)
              .remove();
            // console.log(t)

            d3.select("#WarTitleOnMap")
              .style("opacity", 0)
              .text("from 1816-2010")
              .transition(t)
              .style("opacity", 1)
              .style("color", "black")
              .transition()
              .delay(1000);
          });



        // d3.select("#WarYearOnMap")
        //   // .attr("absolute","absolute")
        //   // .attr("top", "70px")
        //   // .attr("right", "15px")
        //   // .attr("y", 400)
        //   .transition()
        //   .duration(1000)
        //   .style("color", "black")
        //   .on("start", function transitionHeaderIn() {

        //     var t = d3.active(this)
        //       .style("opacity", 0)
        //       .remove();
        //     // console.log(t)

        //     d3.select("#WarYearOnMap")
        //       .style("opacity", 0)
        //       .text(String(sillyString))
        //       .transition(t)
        //       .style("opacity", 1)
        //       .style("color", "black")
        //       .transition()
        //       .delay(1000);
        //   });


      }


      function drawMIDSbars(dataset: any) {
        var margin = { top: 20, left: 10, bottom: 50, right: 10 };
        var widthMIDBar = 1100 - margin.left - margin.right;
        var heightMIDBar = 200 - margin.top - margin.bottom;

        var svgmidsBar = d3.select("#barchartMIDs").append("svg").attr("id", "midsBar")
          .attr('width', widthMIDBar + margin.left + margin.right)
          .attr('height', heightMIDBar + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');


        var x = d3.scaleBand();
        var y = d3.scaleLinear();

        var xAxis;

        // var dataset;

        // var mode = "#ascend";

        // var modeSortMet = "#all";
        // var datasetCop;

        // var titleFirst;
        // var titleSecond = "For Military Expenditure";
        // var titleSort = "Alphabetical Order";

        var maxCountMids;


        // var dataset = values[5];


        maxCountMids = d3.max(dataset, function (d: any) { return +d.countmids; });

        var prvMids = 0;
        var onceClick = 0;

        var selectedMIDYear;
        var testInMIDs = 1;

        x.domain(dataset.map(function (d) { return d.year; }))
          .range([0, widthMIDBar])
          .paddingInner(0.15);

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
          .attr("fill", "rgb(196, 50, 50)")
          .on('mouseover', function (this: any) {
            // console.log("hello!!!")
            var idString = "#" + this.id.toString();
            var yearString = idString.replace(/\D/g, "");

            // console.log(yearString)

            selectedMIDYear = yearString
            var MIDSelected = values[5].filter(x => x.year == String(selectedMIDYear))
            // console.log(MIDSelected[0].countmids)
            //mid title part
            // svg.append("text")
            // .attr("x", 800)
            // .attr("y", 30)
            // .attr("font-size", '10px')
            // .text("The share of world military expenditure (%)");

            // d3.select("#tempBlank1").remove()
            d3.select('#card-desc-war').html("During 1")


            d3.select("#WarMajorOnMap")
              // .attr("absolute","absolute")
              // .attr("top", "70px")
              // .attr("right", "15px")
              // .attr("y", 400)
              .transition()
              .duration(1000)
              .style("color", "black")
              .on("start", function transitionHeaderIn() {

                var t = d3.active(this)
                  .style("opacity", 0)
                  .remove();
                // console.log(t)

                d3.select("#WarMajorOnMap")
                  .style("opacity", 0)
                  .text("Militarized Conflicts")
                  .transition(t)
                  .style("opacity", 1)
                  .style("color", "black")
                  .transition()
                  .delay(1000);
              });


            //Year of MIDs
            d3.select("#WarTitleOnMap")
              // .attr("absolute","absolute")
              // .attr("top", "70px")
              // .attr("right", "15px")
              // .attr("y", 400)
              .transition()
              .duration(1000)
              .style("color", "black")
              .on("start", function transitionHeaderIn() {

                var t = d3.active(this)
                  .style("opacity", 0)
                  .remove();
                // console.log(t)

                d3.select("#WarTitleOnMap")
                  .style("opacity", 0)
                  .text("Year: " + String(selectedMIDYear))
                  // .text("#states at MIDS: "+MIDSelected[0].countmids)
                  .transition(t)
                  .style("opacity", 1)
                  .style("color", "black")
                  .transition()
                  .delay(1000);
              });


            // #of MIDs
            d3.select("#WarYearOnMap")
              // .attr("absolute","absolute")
              // .attr("top", "70px")
              // .attr("right", "15px")
              // .attr("y", 400)
              .transition()
              .duration(1000)
              .style("color", "black")
              .on("start", function transitionHeaderIn() {

                var t = d3.active(this)
                  .style("opacity", 0)
                  .remove();
                // console.log(t)

                d3.select("#WarYearOnMap")
                  .style("opacity", 0)
                  // .text(String(selectedMIDYear))
                  .text("#MIDs: " + MIDSelected[0].countmids)
                  .transition(t)
                  .style("opacity", 1)
                  .style("color", "black")
                  .transition()
                  .delay(1000);
              });




            // #of MIDs
            d3.select("#forthInform")
              // .attr("absolute","absolute")
              // .attr("top", "70px")
              // .attr("right", "15px")
              // .attr("y", 400)
              .transition()
              .duration(1000)
              .style("color", "black")
              .on("start", function transitionHeaderIn() {

                var t = d3.active(this)
                  .style("opacity", 0)
                  .remove();
                // console.log(t)

                d3.select("#forthInform")
                  .style("opacity", 0)
                  // .text(String(selectedMIDYear))
                  .text("Most disputed areas: " + "Europe")
                  .transition(t)
                  .style("opacity", 1)
                  .style("color", "black")
                  .transition()
                  .delay(1000);
              });


            // Subtitle Year
            d3.select("#worldMidChartHiHead")
              .transition()
              .duration(100)
              .on("start", function transitionHeaderIn() {
                var t = d3.active(this)
                  .style("opacity", 0)
                  .remove();

                d3.select("#worldMidChartHiHead")
                  .style("opacity", 0)
                  .text("In " + yearString.toString())
                  .transition(t)
                  .style("opacity", 1)
                  .style("color", "black")
                  .transition()
                  .delay(50);
              });


            idString = String(idString)
            // console.log(idString)

            d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
            d3.select(idString).attr("fill", "steelblue");

            var temp = values[1].filter(x => x.year == String(yearString))

            drawMIDs(temp)

          })
          .on('mouseout', function (this: any) {

            var idString = "#" + this.id.toString()
            idString = String(idString)
            d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));
            var idString = "#" + this.id.toString();
            var yearString = idString.replace(/\D/g, "");

            idString = String(idString)

          })
          .on('click', function (this: any) {

            prvMids = prvMids + 1

          })
          ;

        // .attr("class","midscountbar");




        var xAxis: any = d3.axisBottom(this)
          .scale(x)

        svgmidsBar.append("g")
          .attr("id", "x-axis")
          .attr("class", "axis")
          .attr("transform", "translate(0," + heightMIDBar + ")")
        // .call(xAxis);

        var yAxis: any = d3.axisLeft(this)
          .scale(y)
        .ticks(5, 'd');

        svgmidsBar.append("g")
          .attr("id", "y-axis")
          .attr("class", "axis")
        // .call(yAxis);

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
      }

      function drawWARSbars(datasetWar: any) {

        // var margin = { top: 20, left: 80, bottom: 50, right: 10 };


        var margin = { top: 20, left: 10, bottom: 50, right: 10 };
        var widthMIDBar = 1100 - margin.left - margin.right;
        var heightMIDBar = 200 - margin.top - margin.bottom;

        var svgWarBar = d3.select("#barchartWars").append("svg").attr("id", "midsBar")
          .attr('width', widthMIDBar + margin.left + margin.right)
          .attr('height', heightMIDBar + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');


        var x = d3.scaleBand();
        var y = d3.scaleLinear();

        var xAxis;


        // var mode = "#ascend";
        // var modeSortMet = "#all";
        // var datasetCop;
        // var titleFirst;
        // var titleSecond = "For Military Expenditure";
        // var titleSort = "Alphabetical Order";

        var maxCountWars;


        // var datasetWar = values[6];
        maxCountWars = d3.max(datasetWar, function (d: any) { return +d.countCouWars; });

        // setMode("#alpha");
        // setNumCouMode("#res");


        // drawBars();
        var selectedWarYear;

        var testIn = 1;

        x.domain(datasetWar.map(function (d) { return d.year; }))
          .range([0, widthMIDBar])
          .paddingInner(0.15);

        y.domain([0, maxCountWars + 5])
          .range([heightMIDBar, 0]);

        // console.log(heightMIDBar)

        svgWarBar.selectAll(".bar")
          .data(datasetWar, function (d: any) { return d.year; })
          .enter()
          .append("rect")
          .attr("id", function (d: any) {
            // console.log(d)
            return "warscountbar" + d.year.toString();
          })
          .attr("class", "warscountbar")
          .attr("x", function (d: any) { return x(d.year); })
          .attr("y", function (d: any) { return y(d.countCouWars); })
          // .attr("")
          .attr("width", x.bandwidth())
          .attr("height", function (d: any) { return heightMIDBar - y(d.countCouWars); })
          .attr("fill", "steelblue")
          .on('mouseover', function (this: any, d: any) {
            // console.log("war")
            // console.log(d)
            var idString = "#" + this.id.toString();
            var yearString = idString.replace(/\D/g, "");

            selectedWarYear = yearString
            var warSelected = values[2].filter(x => x.year == String(selectedWarYear))

            // console.log(warSelected)
            var warTitleAndCountry = describeMajorWarInfForEachWar(warSelected, values[8])
            var warTitleAndCountryTest=describeAllWarInfForEachWar(warSelected, values[8])
            var warTitleAndCountryAdd=describeAdditioanlInf(warTitleAndCountryTest)
            // console.log(warTitleCounList)

            var warTitleAndCountryAll = describeWarInf(warSelected, values[8])
            // console.log(warTitleAndCountry[0])
            var warTitleArr = warTitleAndCountry[0];
            // console.log(warTitleAndCountry[0])

            var countryAtWar = warTitleAndCountry[1];

            // console.log("warTitleAndCountry")
            // console.log(warTitleAndCountry)

            var warTitleArrAll = Array.from(warTitleAndCountryAll[0]);
            // console.log(warTitleArr)
            var countryAtWarAll = Array.from(warTitleAndCountryAll[1]);
            // console.log("countryAtWar.length")
            // console.log(countryAtWar[0].length)
            // console.log(countryAtWar[0].size)
            // var iterator1 = warTitle.values();
            // console.log("values[8]")
            // console.log(values[6])
            var warSelectedBattDeath = values[6].filter(x => x.year == String(selectedWarYear))
            // var bettdeath=warSelected.
            // console.log(warSelectedBattDeath)

            d3.select('#card-desc-war').html(String(warTitleArrAll) + "<br>" + "Countries at Wars" + ":" + String(countryAtWarAll))
            // values[2]





            var st;
            // for (st=1)
            // for (st = 0; st < warTitleArr.length; st++) {
            // for (st = 0; st < warTitleArr.length; st++) {
            for (st = 0; st < 1; st++) {
              // var charPart = warTitleArr[st].replace(/\d/g, "");
              var charPart = warTitleArr.replace(/\d/g, "");
              var charPart = charPart.replace(/\-/g, ' ');
              // console.log(charPart)
              // var yearPart = warTitleArr[st].replace(/[^\d.-]/g, "");
              var yearPart = warTitleArr.replace(/[^\d.-]/g, "");

              if (yearPart[0] == '-') {
                // yearPart.shift(); 
                // yearPart.splice(0, 1);
                var sillyString = yearPart.substr(1);
              }

              if (yearPart[0] != '-') {
                // yearPart.shift(); 
                // yearPart.splice(0, 1);
                var sillyString = yearPart;
              }

              //   var tempStr=charPart.split( " " )
              //   for (st = tempStr.length-1; st >=0; st--) {
              //   // console.log(charPart.split( " " ))
              //     if(tempStr[st]=="" || tempStr[st]=="of"){
              //       console.log("Inside")
              //       console.log(tempStr[st])
              //     }
              // }

              // console.log(charPart.length)
              // console.log(sillyString)


              // console.log("ts")


              if (testIn == 1) {




                svg.append("circle")
                  .attr("id", "TestCir")
                  .attr("cx", 50)
                  .attr("cy", 30)
                  .attr("r", 20)
                  .attr("fill", "red")
                // .attr("font-size", '25px')
                // .attr("font-weight", "bold")
                // .text("War Information");


                d3.select("#TestCir")
                  // .attr("absolute","absolute")
                  // .attr("top", "70px")
                  // .attr("right", "15px")
                  // .attr("y", 400)
                  .transition()
                  .duration(1000)
                  .style("fill", "red")
                  .on("start", function transitionHeaderIn() {

                    var t = d3.active(this)
                      .style("opacity", 0)
                      .remove();
                    // console.log(t)

                    d3.select("#TestCir")
                      .style("opacity", 0)
                      // .text("War Information")
                      .transition(t)
                      .style("opacity", 1)
                      .attr("fill", "red")
                      .transition()
                      .delay(1000);
                  });
































                // svg.append("text")
                //   .attr("id", "WarMajorOnMap")
                //   .attr("x", 0)
                //   .attr("y", 330)
                //   .attr("font-size", '25px')
                //   .attr("font-weight", "bold")
                // .text("War Information");


                d3.select("#WarMajorOnMap")
                  // .attr("absolute","absolute")
                  // .attr("top", "70px")
                  // .attr("right", "15px")
                  // .attr("y", 400)
                  .transition()
                  .duration(1000)
                  .style("color", "black")
                  .on("start", function transitionHeaderIn() {

                    var t = d3.active(this)
                      .style("opacity", 0)
                      .remove();
                    // console.log(t)

                    d3.select("#WarMajorOnMap")
                      .style("opacity", 0)
                      .text("War Information")
                      .transition(t)
                      .style("opacity", 1)
                      .style("color", "black")
                      .transition()
                      .delay(1000);
                  });





                // svg.append("text")
                //   .attr("id", "WarTitleOnMap")
                //   .attr("x", 0)
                //   .attr("y", 360)
                //   .attr("font-size", '22px')
                //   .attr("font-weight", "bold")
                // // .text(String(warTitleArr[0]));

                // svg.append("text")
                //   .attr("id", "WarYearOnMap")
                //   .attr("x", 0)
                //   .attr("y", 390)
                //   .attr("font-size", '17px')
                //   .attr("font-weight", "bold");


                // svg.append("text")
                //   .attr("id", "WarTitle2OnMap")
                //   .attr("x", 0)
                //   .attr("y", 420)
                //   .attr("font-size", '25px')
                //   .attr("font-weight", "bold")


                testIn = testIn + 1




              }



              if (st == 0) {
                d3.select("#WarTitleOnMap")
                  // .attr("absolute","absolute")
                  // .attr("top", "70px")
                  // .attr("right", "15px")
                  // .attr("y", 400)
                  .transition()
                  .duration(1000)
                  .style("color", "black")
                  .on("start", function transitionHeaderIn() {

                    var t = d3.active(this)
                      .style("opacity", 0)
                      .remove();
                    // console.log(t)

                    d3.select("#WarTitleOnMap")
                      .style("opacity", 0)
                      // .text(String(charPart))
                      // warTitleAndCountryAdd
                      .text("The number of Wars: "+String(warTitleAndCountryAdd[0]))
                      .transition(t)
                      .style("opacity", 1)
                      .style("color", "black")
                      .transition()
                      .delay(1000);
                  });



                d3.select("#WarYearOnMap")
                  // .attr("absolute","absolute")
                  // .attr("top", "70px")
                  // .attr("right", "15px")
                  // .attr("y", 400)
                  .transition()
                  .duration(1000)
                  .style("color", "black")
                  .on("start", function transitionHeaderIn() {

                    var t = d3.active(this)
                      .style("opacity", 0)
                      .remove();
                    // console.log(t)

                    d3.select("#WarYearOnMap")
                      .style("opacity", 0)
                      // .text(String(sillyString))
                      .text("The number of Countries at Wars: "+String(warTitleAndCountryAdd[1]))
                      .transition(t)
                      .style("opacity", 1)
                      .style("color", "black")
                      .transition()
                      .delay(1000);
                  });


                d3.select("#WarMajorOnMap")
                  // .attr("absolute","absolute")
                  // .attr("top", "70px")
                  // .attr("right", "15px")
                  // .attr("y", 400)
                  .transition()
                  .duration(1000)
                  .style("color", "black")
                  .on("start", function transitionHeaderIn() {

                    var t = d3.active(this)
                      .style("opacity", 0)
                      .remove();
                    // console.log(t)

                    d3.select("#WarMajorOnMap")
                      .style("opacity", 0)
                      .text("War Information")
                      .transition(t)
                      .style("opacity", 1)
                      .style("color", "black")
                      .transition()
                      .delay(1000);
                  });


                d3.select("#forthInform")
                  // .attr("absolute","absolute")
                  // .attr("top", "70px")
                  // .attr("right", "15px")
                  // .attr("y", 400)
                  .transition()
                  .duration(1000)
                  .style("color", "black")
                  .on("start", function transitionHeaderIn() {

                    var t = d3.active(this)
                      .style("opacity", 0)
                      .remove();
                    // console.log(t)

                    d3.select("#forthInform")
                      .style("opacity", 0)
                      // .text(String(selectedMIDYear))
                      // .text("#deaths: "+warSelectedBattDeath[0]['batdths'])
                      // .text("#Countries at War Information: " +countryAtWar[0].size)
                      .text("Major war: "+String(charPart)+ yearString)
                      .transition(t)
                      .style("opacity", 1)
                      .style("color", "black")
                      .transition()
                      .delay(1000);
                  });


              }



              if (st == 1) {
                d3.select("#WarTitle2OnMap")
                  // .attr("absolute","absolute")
                  // .attr("top", "70px")
                  // .attr("right", "15px")
                  // .attr("y", 400)
                  .transition()
                  .duration(1000)
                  .style("color", "black")
                  .on("start", function transitionHeaderIn() {

                    var t = d3.active(this)
                      .style("opacity", 0)
                      .remove();
                    // console.log(t)

                    d3.select("#WarTitle2OnMap")
                      .style("opacity", 0)
                      .text(String(charPart))
                      .transition(t)
                      .style("opacity", 1)
                      .style("color", "black")
                      .transition()
                      .delay(1000);
                  });
              }




            }


            d3.select("#worldMidChartHiHead")
              .transition()
              .duration(100)
              .style("color", "black")
              .on("start", function transitionHeaderIn() {
                var t = d3.active(this)
                  .style("opacity", 0)
                  .remove();

                d3.select("#worldMidChartHiHead")
                  .style("opacity", 0)
                  .text("In " + yearString.toString())
                  .transition(t)
                  .style("opacity", 1)
                  .style("color", "black")
                  .transition()
                  .delay(50);
              });

            idString = String(idString)
            // console.log(idString)



            d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
            d3.select(idString).attr("fill", "rgb(196, 50, 50)");


            var temp = values[2].filter(x => x.year == String(yearString))
            // console.log(temp)
            // drawMIDs(temp)

            if (refixcoID.length != 0) {
              var i;
              // console.log("sdgdagsdg")
              // console.log(d3.select(refixcoID[0]).attr("fillX"))
              // d3.select(String(refixcoID[0])).attr("fill",'red')
              // console.log(String(String(d3.select(refixcoID[0]).attr("fillX"))
              for (i = 0; i < refixcoID.length; i++) {

                //   if(d3.select(refixcoID[i]).attr("fillX")!=null)
                //   {
                d3.select(String(refixcoID[i])).attr("fill", "#bdbdbd");

                if (String(refixcoID[i]) == "#AUH") {
                  d3.select("#AUS").attr("fill", "#bdbdbd");
                  d3.select("#HUN").attr("fill", "#bdbdbd");
                }
                //   }
              }
            }




            // console.log("still")
            refixcoID = []
            drawWarsVer2(temp)


          })
          .on('mouseout', function (this: any, d: any) {
            // d3.select('#tooltip-mid').classed('hidden', true);




            var idString = "#" + this.id.toString()
            idString = String(idString)

            console.log("mouseout")
            console.log(idString)
            d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));

            // if (idString=="#AUH")
            // {
            //   d3.select("#AUS").attr("fill", "#bdbdbd");
            //   d3.select("#HUN").attr("fill", "#bdbdbd");
            // }

            var idString = "#" + this.id.toString();
            var yearString = idString.replace(/\D/g, "");

            var temp = values[2].filter(x => x.year == String(yearString))

            var idString = "#" + this.id.toString()
            // console.log(idString)

            // var i;
            // // console.log("sdgdagsdg")
            // console.log(d3.select(refixcoID[0]).attr("fillX"))
            // // d3.select(String(refixcoID[0])).attr("fill",'red')
            // // console.log(String(String(d3.select(refixcoID[0]).attr("fillX"))
            // for (i = 0; i < refixcoID.length; i++) 
            // {

            // //   if(d3.select(refixcoID[i]).attr("fillX")!=null)
            // //   {
            //     d3.select(String(refixcoID[i])).attr("fill", "#bdbdbd");
            // //   }
            // }

            // removeWarsVer2(temp,idString)

            // // d3.select('#card-name-bub1').html('Country Information');
            // // d3.select('#card-desc-bub1').html('Mouse over bars for quick facts.<br/><br/><br/>');
          });
        // .attr("class","midscountbar");




        var xAxis: any = d3.axisBottom(this)
          .scale(x)

        svgWarBar.append("g")
          .attr("id", "x-axis")
          .attr("class", "axis")
          .attr("transform", "translate(0," + heightMIDBar + ")")
        // .call(xAxis);

        var yAxis: any = d3.axisLeft(this)
          .scale(y)
        // .ticks(5, 'd');

        svgWarBar.append("g")
          .attr("id", "y-axis")
          .attr("class", "axis")
        // .call(yAxis);

        svgWarBar.append("text")
          .attr("x", - heightMIDBar / 2 + 800)
          .attr("y", - margin.left + 30)

          .attr("transform", "rotate(-90)")
          .attr('class', 'ylabel')
          .append("tspan").text("Expenditure(% of GDP)")
          // .append("tspan").text("-2")
          .style("baseline-shift", "super")
          .style("font-size", "0.7em");
      }


      function drawTRADEbars(datasetTrade: any) {
        var margin = { top: 20, left: 10, bottom: 50, right: 10 };
        var widthMIDBar = 1100 - margin.left - margin.right;
        var heightMIDBar = 200 - margin.top - margin.bottom;
        var svgTradeBar = d3.select("#barchartTrades").append("svg").attr("id", "midsBar")
          .attr('width', widthMIDBar + margin.left + margin.right)
          .attr('height', heightMIDBar + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');


        var x = d3.scaleBand();
        var y = d3.scaleLinear();

        var xAxis;


        // var mode = "#ascend";
        // var modeSortMet = "#all";
        // var datasetCop;
        // var titleFirst;
        // var titleSecond = "For Military Expenditure";
        // var titleSort = "Alphabetical Order";

        var maxCountWars;


        // var datasetTrade = values[7];
        maxCountWars = d3.max(datasetTrade, function (d: any) { return +d.numCountry; });

        // setMode("#alpha");
        // setNumCouMode("#res");


        // drawBars();

        x.domain(datasetTrade.map(function (d) { return d.year; }))
          .range([0, widthMIDBar])
          .paddingInner(0.15);

        y.domain([0, maxCountWars + 5])
          .range([heightMIDBar, 0]);

        // console.log(heightMIDBar)

        svgTradeBar.selectAll(".bar")
          .data(datasetTrade, function (d: any) { return d.year; })
          .enter()
          .append("rect")
          .attr("id", function (d: any) {
            // console.log(+d.year)
            return "tradescountbar" + (+d.year).toString();

          })
          .attr("class", "tradescountbar")
          .attr("x", function (d: any) { return x(d.year); })
          .attr("y", function (d: any) { return y(d.numCountry); })
          .attr("width", x.bandwidth())
          .attr("height", function (d: any) { return heightMIDBar - y(d.numCountry); })
          .attr("fill", "steelblue")
          .on('mouseover', function (this: any) {
            // console.log("hello!!!")
            var idString = "#" + this.id.toString();
            var yearString = idString.replace(/\D/g, "");


            d3.select("#worldMidChartHiHead")
              .transition()
              .duration(100)
              .style("color", "black")
              .on("start", function transitionHeaderIn() {
                var t = d3.active(this)
                  .style("opacity", 0)
                  .remove();

                d3.select("#worldMidChartHiHead")
                  .style("opacity", 0)
                  .text("In " + yearString.toString())
                  .transition(t)
                  .style("opacity", 1)
                  .style("color", "black")
                  .transition()
                  .delay(50);
              });



            idString = String(idString)
            // console.log(idString)



            d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
            d3.select(idString).attr("fill", "rgb(196, 50, 50)");


            var temp = values[2].filter(x => x.year == String(yearString))
            // console.log(temp)
            // drawMIDs(temp)



            if (refixcoID.length != 0) {
              var i;
              // console.log("sdgdagsdg")
              // console.log(d3.select(refixcoID[0]).attr("fillX"))
              // d3.select(String(refixcoID[0])).attr("fill",'red')
              // console.log(String(String(d3.select(refixcoID[0]).attr("fillX"))
              for (i = 0; i < refixcoID.length; i++) {

                //   if(d3.select(refixcoID[i]).attr("fillX")!=null)
                //   {
                d3.select(String(refixcoID[i])).attr("fill", "#bdbdbd");
                //   }
              }
            }




            // console.log("still")
            refixcoID = []

            refixcoID = []
            drawWarsVer2(temp)


          })
          .on('mouseout', function (this: any, d: any) {
            // d3.select('#tooltip-mid').classed('hidden', true);




            var idString = "#" + this.id.toString()
            idString = String(idString)
            d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));

            var idString = "#" + this.id.toString();
            var yearString = idString.replace(/\D/g, "");

            var temp = values[2].filter(x => x.year == String(yearString))

            // d3.select("#country").attr("fill", "white");

            // removeWarsVer2(temp)

            // // d3.select('#card-name-bub1').html('Country Information');
            // // d3.select('#card-desc-bub1').html('Mouse over bars for quick facts.<br/><br/><br/>');
          });
        // .attr("class","midscountbar");




        var xAxis: any = d3.axisBottom(this)
          .scale(x)

        svgTradeBar.append("g")
          .attr("id", "x-axis")
          .attr("class", "axis")
          .attr("transform", "translate(0," + heightMIDBar + ")")
        // .call(xAxis);

        var yAxis: any = d3.axisLeft(this)
          .scale(y)
        // .ticks(5, 'd');

        svgTradeBar.append("g")
          .attr("id", "y-axis")
          .attr("class", "axis")
        // .call(yAxis);

        svgTradeBar.append("text")
          .attr("x", - heightMIDBar / 2 + 800)
          .attr("y", - margin.left + 30)

          .attr("transform", "rotate(-90)")
          .attr('class', 'ylabel')
          .append("tspan").text("Expenditure(% of GDP)")
          // .append("tspan").text("-2")
          .style("baseline-shift", "super")
          .style("font-size", "0.7em");







      }


      function drawMIDs(data: any) {


        // console.log(data)
        // console.log(expMilCountries)

        // DATA JOIN
        var mids = svg.selectAll(".mid")
          .data(data);

        // console.log(mids)

        var delay = function (d, i) {
          return i * 50;
        }

        // UPDATAE.
        // mids.transition()
        //   .duration(750)
        //   .delay(delay)
        mids.attr("cx", function (d: any) {
          // console.log(+d.midloc2_xlongitude)
          var marker = projection([+d["midloc2_xlongitude"], +d["midloc2_ylatitude"]])
          return marker[0]
        })
          // .transition()
          //   .duration(750)
          // .delay(delay)
          .attr("cy", function (d: any) {
            var marker = projection([+d["midloc2_xlongitude"], +d["midloc2_ylatitude"]])
            return marker[1]
          })
          .attr("id", function (d: any) {
            var tempId = "conflict" + String(d.dispnum)
            return String(tempId);
          })
          .attr("r", 5)
          .attr("fill", "rgb(196, 50, 50)")
          // .attr("fill", "blue")
          // .attr("fill", "white")
          .attr("class", "mid")
          .style("fill", "red")



        // .transition()
        // .duration(1000)
        // .style("fill", "red")
        // .on("start", function transitionHeaderIn() {

        //   var t = d3.active(this)
        //     .style("opacity", 0)
        //     .remove();
        //   // console.log(t)

        //   d3.select(".mid")
        //     .style("opacity", 0)
        //     // .text("War Information")
        //     .transition(t)
        //     .style("opacity", 1)
        //     .attr("fill", "red")
        //     .transition()
        //     .delay(1000);
        // })


























        // ENTER.
        mids.enter()
          .append("circle")
          .attr("cx", function (d: any) {
            // console.log("Enter")
            // console.log(+d["midloc2_xlongitude"])
            var marker = projection([+d["midloc2_xlongitude"], +d["midloc2_ylatitude"]])
            return marker[0]
          })
          .attr("cy", function (d: any) {
            var marker = projection([+d["midloc2_xlongitude"], +d["midloc2_ylatitude"]])
            return marker[1]
          })


          .attr("id", function (d: any) {
            var tempId = "conflict" + String(d.dispnum)
            return String(tempId);
          })
          .attr("r", 5)
          .attr("fill", "rgb(196, 50, 50)")
          // .attr("fill", "white")
          .attr("class", "mid")





          // .transition()
          // .duration(1000)
          // .style("fill", "red")
          // .on("start", function transitionHeaderIn() {

          //   var t = d3.active(this)
          //     .style("opacity", 0)
          //     .remove();
          //   // console.log(t)

          //   d3.select(".mid")
          //     .style("opacity", 0)
          //     // .text("War Information")
          //     .transition(t)
          //     .style("opacity", 1)
          //     .attr("fill", "red")
          //     .transition()
          //     .delay(1000);
          // })












          .on('mouseover', function (this: any, d: any) {
            // console.log("I am on the text!!!!");
            // console.log(this);
            var idString = "#" + this.id.toString();

            idString = String(idString)
            d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
            d3.select(idString).attr("fill", "steelblue")

            d3.select(idString).attr("rX", String(d3.select(idString).attr("r")));
            d3.select(idString).attr("r", "5")
            // console.log("MIDs Information")
            // console.log(d)
            var idString = "#" + this.id.toString()
            // console.log(idString)
            dothandleMouseOver(idString, d)

          })
          .on('mouseout', function (this: any) {
            // console.log(this);
            var idString = "#" + this.id.toString()
            idString = String(idString)
            d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));
            d3.select(idString).attr("r", String(d3.select(idString).attr("rX")));

            var idString = "#" + this.id.toString()
            // console.log(idString)
            dothandleMouseOut(idString)
          });









        // EXIT.
        mids.exit()
          // .transition()
          // .duration(300)

          // .transition()
          // .duration(1000)



          .style("opacity", 0)
          .remove();









        // d3.select(".mid")
        // // .attr("absolute","absolute")
        // // .attr("top", "70px")
        // // .attr("right", "15px")
        // // .attr("y", 400)
        // .transition()
        // .duration(1000)
        // .style("fill", "red")
        // .on("start", function transitionHeaderIn() {

        //   var t = d3.active(this)
        //     .style("opacity", 0)
        //     .remove();
        //   // console.log(t)

        //   d3.select(".mid")
        //     .style("opacity", 0)
        //     // .text("War Information")
        //     .transition(t)
        //     .style("opacity", 1)
        //     .attr("fill", "red")
        //     .transition()
        //     .delay(1000);
        // })




      }


      function drawWarsVer2(data: any) {

        // console.log(data)
        var cirId = 1;
        var couNaId = 1;
        var areaId = 1;
        // console.log(data)
        // war Curve
        refixcoID = []
        // console.log("draw color coutriy!!@#")
        // console.log(data)

        // d3.select("#USA").attr("fill", "steelblue");
        var wars = svg.selectAll(".warDyadicEach")
          .data(data)

        wars.attr("class", "warDyadicEach")
          .attr("fill", function (d: any) {

            // console.log("hello!")
            // var te=data.statea.toString()
            // console.log("hELLO")
            // console.log("inside")
            // console.log(d)
            var coun = '#' + d.stateAbbA.toString()


            refixcoID.push(coun)

            // console.log(refixcoID)


            d3.select(coun).attr("fill", "steelblue");
            // var idString = "#" + this.id.toString();  
            // idString = String(idString)
            // d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
            // d3.select(idString).attr("fill", "steelblue");
            return "steelblue"

          })

        // console.log("refix")
        // console.log(refixcoID)

        wars.enter()
          .append("path")
          .attr("class", "warDyadicPath")
          .attr("fill", function (this: any, d: any) {

            // var te=dataS.statea.toString()
            // console.log("dataS")
            // console.log(d.stateAbbA)
            // console.log("hello!")

            // console.log("inside")
            // console.log(d)
            var coun = '#' + d.stateAbbA.toString()
            if (coun == '#AUH') {
              d3.select("#AUS").attr("fill", "steelblue");
              // HUN
              d3.select("#HUN").attr("fill", "steelblue");
            }

            if (coun == '#YUG') {
              d3.select("#AUS").attr("fill", "steelblue");
              // HUN
              d3.select("#HUN").attr("fill", "steelblue");
            }

            d3.select(coun).attr("fill", "steelblue");


            refixcoID.push(coun)

            // console.log(refixcoID)
            // console.log(d)
            // var idString = "#" + this.id.toString();
            // idString = String(idString)
            // d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
            // d3.select(idString).attr("fill", "steelblue");
            return "steelblue"

          });
        // .on('mouseover', function (this: any, d: any) {
        //   // console.log("I am on the text!!!!");
        //   // console.log(this);
        //   var idString = "#" + this.id.toString();
        //   console.log("Here")
        //   console.log(idString)

        //   idString = String(idString)
        //   d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
        //   d3.select(idString).attr("fill", "steelblue")

        //   d3.select(idString).attr("rX", String(d3.select(idString).attr("r")));
        //   d3.select(idString).attr("r", "5")
        // })
        // .on('mouseout', function (this: any) {
        //   // console.log(this);
        //   var idString = "#" + this.id.toString()
        //   idString = String(idString)
        //   d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));
        //   d3.select(idString).attr("r", String(d3.select(idString).attr("rX")));

        // });



        // EXIT.
        wars.exit()
          // .transition()
          // .duration(750)
          .style("opacity", 0)
          .remove();













      }

      function removeWarsVer2(data: any, id: any) {

        // console.log(data)
        var cirId = 1;
        var couNaId = 1;
        var areaId = 1;
        // console.log(data)
        // war Curve


        // d3.select("#USA").attr("fill", "steelblue");
        var wars = svg.selectAll(".warDyadicEach")
          .data(data)

        wars.attr("class", "warDyadicEach")
          .attr("fill", function (d: any) {

            // console.log("hello!")
            // var te=data.statea.toString()
            // console.log(te)
            var coun = '#' + d.stateAbbA.toString()
            d3.select(coun).attr("fill", "#bdbdbd");
            // var idString = "#" + this.id.toString();
            // idString = String(idString)
            // d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
            // d3.select(idString).attr("fill", "steelblue");
            return "#bdbdbd"

          })



        wars.enter()
          .append("path")
          .attr("class", "warDyadicPath")
          .attr("fill", function (this: any, d: any) {

            // var te=dataS.statea.toString()
            // console.log("dataS")
            // console.log(d.stateAbbA)
            // console.log("hello!")
            var coun = '#' + d.stateAbbA.toString()
            d3.select(coun).attr("fill", "#bdbdbd");
            // console.log(d)
            // var idString = "#" + this.id.toString();
            // idString = String(idString)
            // d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
            // d3.select(idString).attr("fill", "steelblue");
            return "#bdbdbd"

          });
        // .on('click', function (this: any, d: any) {
        // console.log("I am on the text!!!!");
        // // console.log(this);
        // var idString = "#" + this.id.toString();
        // // console.log("Here")
        // console.log(idString)

        // idString = String(idString)
        // d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
        // d3.select(idString).attr("fill", "steelblue")

        // d3.select(idString).attr("rX", String(d3.select(idString).attr("r")));
        // d3.select(idString).attr("r", "5")
        // })
        // .on('mouseout', function (this: any) {
        //   // console.log(this);
        //   var idString = "#" + this.id.toString()
        //   idString = String(idString)
        //   d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));
        //   d3.select(idString).attr("r", String(d3.select(idString).attr("rX")));

        // });



        // EXIT.
        wars.exit()
          // .transition()
          // .duration(750)
          .style("opacity", 0)
          .remove();



      }


      function removeWarsVer3() {

        svg.selectAll(".country")
          .attr("fill", "#bdbdbd")


      }


      function dothandleMouseOver(st: string, d: any) {
        // console.log(this.id);
        // var idString = "#" + this.id.toString()
        var idString = st
        var yearString = st.replace(/\D/g, "");
        // console.log("hello!")
        console.log(d)
        idString = String(idString)

        console.log(String(d3.select(idString).attr("fill")));

        d3.select(idString)
          .attr("fillX", String(d3.select(idString).attr("fill")));


        d3.select(idString)

          .attr("fill", function (data) {
            return "steelblue";
          })
          .attr("r", 10);

        var tooltipSpan = document.getElementById('tooltip-midInfor');

        window.onmousemove = function (e) {
          var x = e.clientX,
            y = e.clientY;
          console.log(x)
          console.log(y)
          tooltipSpan.style.top = (y - 20) + 'px';
          tooltipSpan.style.left = (x - 300) + 'px';
        };


        d3.select('#tooltip-midInfor')
          // .style('left', xPosition + 'px')
          // .style('top', yPosition + 'px')
          .select('#info-mid')
          // .html('<h4>' + "Location: " + d["midloc2_location"] + '</h4>' + 'Year: ' + d.year + '<br/>' + '</h4>' + '#Dispute: ' + d.dispnum + '<br/>');
          .html('<h4>' + "Location: " + d["midloc2_location"] + '</h4>' + 'Year: ' + d.year + '<br/>' + '</h4>');

        // d3.select('#tooltip-midInfor')
        //   .style('left', xPosition + 'px')
        //   .style('top', yPosition + 'px')
        //   .select('#info-mid')
        //   .html('<h4>' + "Location: " + d["midloc2_location"] + '</h4>' + 'Year: ' + d.year+'<br/>'+'</h4>' + '#Dispute: ' + d.dispnum+'<br/>');
        // .html('<h4>' + "Country: " + "South Korea" + '</h4>' + 'Expenditure: ' + "100000"+' % of GDP<br/>');

        d3.select('#tooltip-midInfor').classed('hidden', false);








        // var tooltipSpan = document.getElementById('tooltip-mid');

        //   window.onmousemove = function (e) {
        //     var x = e.clientX,
        //       y = e.clientY;
        //     // (x)
        //     // console.log(y)
        //     tooltipSpan.style.top = (y - 20) + 'px';
        //     tooltipSpan.style.left = (x - 55) + 'px';
        //   };

        //   d3.select('#tooltip-mid')
        //     // .style('left', xPosition + 'px')
        //     // .style('top', yPosition + 'px')
        //     .select('#country-info-mid')
        //   .html('<h4>' + d.properties.A3 + '</h4>');

        // d3.select('#tooltip-mid').classed('hidden', false);

        // var idString = "#" + this.id.toString();
        // idString = String(idString)

        // console.log(this.id.toString())

        // d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
        // d3.select(idString).attr("fill", "steelblue");







        // d3.select('#card-name-line1').html('country: ' + d3.select(this.parentNode).attr("country"));
        // d3.select('#card-desc-line1').html('Expenditure: ' + d3.select(idString).attr("expend"));








      }

      function dothandleMouseOut(st: any) {

        // var idString = "#" + this.id.toString()
        var idString = st
        idString = String(idString)
        // console.log(idString);
        // console(this);
        d3.select(idString)

          .attr("r", 5);

        // document.getElementById(this.id.toString()).removeAttribute("fill");
        d3.select(idString)
          .attr("fill", "rgb(196, 50, 50)");

        d3.select('#tooltip-midInfor').classed('hidden', true);
        // d3.select('#info-mid').classed('hidden', true);
        // d3.select('#card-name-line1').html('Country Information');
        // d3.select('#card-desc-line1').html('Mouse over bars for quick facts.<br/><br/><br/>');


      }

      function describeWarInf(warInf: any, warList: any) {
        console.log("warInf")
        console.log(warInf)

        var warTitle = [];
        var countryWar = []
        var i;
        for (i = 0; i < warInf.length; i++) {

          var warNum = warInf[i].warnum
          countryWar.push(warInf[i].stateNameA)
          countryWar.push(warInf[i].stateNameB)

          // console.log("hello!!!")
          // console.log(warList)
          // console.log(warNum)

          var tempWarList = warList.filter(x => String(x["War#"]) == String(warNum))
          // console.log("tempWarList")
          // console.log(tempWarList)

          var j;
          for (j = 0; j < tempWarList.length; j++) {
            warTitle.push(tempWarList[j]["Name"])
          }


          // warTitle.push(tempWarList["Name"])

        }
        // console.log("warTitle")
        var warTitleset = new Set(warTitle);
        var counset = new Set(countryWar)
        // var numCountryAtwar = countryWar

        // console.log(countryWar)

        var inform = [warTitleset, counset];

        // console.log(inform)


        // console.log(set)
        return inform;
      }


      function describeAllWarInfForEachWar(warInf: any, warList: any) {
        // console.log("describeAllWarInfForEachWar")
        // console.log(warInf)

        var warTitle = [];
        var countryWar = []
        var i;
        var tj;

        var testallWarNum = []
        var len = 0;

        var curnumC;
        
        var totalInf=[]

        for (i = 0; i < warInf.length; i++) {

          var warNum = warInf[i].warnum
          testallWarNum.push(warNum)

        }

        // console.log("allWarNum")
        // console.log(testallWarNum)
        
        // console.log(typeof(allWarNum))
        var allWarNumset = new Set(testallWarNum);
        var temp=allWarNumset.values();
        var allWarNum = Array.from(temp)

        // const values = set.values();
        // const array = Array.from(values);
        // console.log(allWarNum)

        for (i = 0; i < allWarNum.length; i++) {

          countryWar = []

          for (tj = 0; tj < warInf.length; tj++) {

            var warNum = warInf[tj].warnum
            if (allWarNum[i] == warNum) {
              countryWar.push(warInf[tj].stateNameA)
              countryWar.push(warInf[tj].stateNameB)
            }


          }
          var countryWarSet = new Set(countryWar)
          var countryWarArray = new Array(countryWarSet)
          
          var tempWarList = warList.filter(x => String(x["War#"]) == String(allWarNum[i]))

          var WarTitleAndConList = new Array(tempWarList[0].Name, countryWarArray) 
          totalInf.push(WarTitleAndConList)
          
          curnumC = countryWarArray[0].size
          
          

          if (len < curnumC) {
            len = countryWarArray[0].size
            var majorWarNum = allWarNum[i]

          }

        }

        var tempWarList = warList.filter(x => String(x["War#"]) == String(majorWarNum))


        var WarTitleAndConList = new Array(tempWarList[0].Name, countryWarArray)

        console.log("totalInf")
        console.log(totalInf)
        return totalInf
      }


      function describeAdditioanlInf(eachwarInf: any)
      {
        // console.log("describeAdditioanlInf")
        // console.log(eachwarInf)
        // console.log(eachwarInf.length)

        var numberofWars=eachwarInf.length
        var totalCountryAtwar=0;
        var total=[]

        var i;
        for (i = 0; i < eachwarInf.length; i++) {
          console.log("Hello!!!")
          console.log(eachwarInf[i][1][0].size)
          totalCountryAtwar=totalCountryAtwar+eachwarInf[i][1][0].size

        }
        console.log(totalCountryAtwar)
        // #wars, #countries at war
        total=[numberofWars,totalCountryAtwar]
        console.log(total)
        return total
      }

      function describeMajorWarInfForEachWar(warInf: any, warList: any) {
        // console.log("describeWarInfForEachWar")
        // console.log(warInf)

        var warTitle = [];
        var countryWar = []
        var i;
        var tj;

        var allWarNum = []
        var len = 0;

        var curnumC;

        for (i = 0; i < warInf.length; i++) {

          var warNum = warInf[i].warnum
          allWarNum.push(warNum)

        }

        // console.log("allWarNum")
        // console.log(allWarNum)

        for (i = 0; i < allWarNum.length; i++) {

          // var warNum = allWarNum[i]

          countryWar = []

          for (tj = 0; tj < warInf.length; tj++) {

            var warNum = warInf[tj].warnum
            if (allWarNum[i] == warNum) {
              countryWar.push(warInf[tj].stateNameA)
              countryWar.push(warInf[tj].stateNameB)

              // new Set(countryWar)


            }


          }
          var countryWarSet = new Set(countryWar)
          var countryWarArray = new Array(countryWarSet)
          curnumC = countryWarArray[0].size
          // console.log("warleng")
          // console.log(allWarNum[i])
          // console.log(countryWarArray[0].size)
          if (len < curnumC) {
            len = countryWarArray[0].size
            var majorWarNum = allWarNum[i]
            // console.log(majorWarNum)
            // console.log(countryWarArray.length)

          }

        }

        // console.log("majorWarNum")
        // console.log(majorWarNum)
        var tempWarList = warList.filter(x => String(x["War#"]) == String(majorWarNum))
        // console.log("tempWarList")
        // console.log(tempWarList[0].Name)

        // var j;
        // for (j = 0; j < tempWarList.length; j++) {
        //   warTitle.push(tempWarList[j]["Name"])
        // }

        // console.log(majorWarNum)
        // console.log(countryWarArray)

        var WarTitleAndConList = new Array(tempWarList[0].Name, countryWarArray)

        // console.log(WarTitleAndConList)

        return WarTitleAndConList
      }






      function drawMap(worldmap: any, countryNamCh: any) {

        var t;
        var spe;
        // console.log(worldmap)

        // console.log(countryNamCh)

        d3.selectAll(".mid").remove()
        d3.selectAll(".country").remove()

        for (t = 0; t < worldmap.features.length; t++) {
          // console.log("R")
          if (worldmap.features[t].properties.A3.toString() == countryNamCh) {
            // console.log("ROK")
            // var l = worldmap.features.length + 1
            var ROKmap = worldmap.features[t]
            spe = t
            // ROKmap=worldmap.features[t]
            // console.log(t)



            // delete worldmap.features[t]
          }
        }


        d3.selectAll(".country").remove()
        var selectCouMap = worldmap.features[spe]

        projection = d3.geoMercator().fitSize([width, height], selectCouMap);

        // var projection = d3.geoMercator().fitSize([width, height], worldmap);
        // var projection2 = d3.geoAlbersUsa().fitSize([width, height], popuUS);

        var path = d3.geoPath().projection(projection);

        // console.log(expMilCountries)
        var count = 1820;
        var warCount = 1828;

        svg.selectAll(".states")
          .data(worldmap.features)
          // .data(worldmap.features,function(d:any){
          //   // console.log(d)
          //   if (d.properties.A3=="ROK")
          //   {
          //     console.log("ROK")
          //     console.log(d.properties)
          //     var data=d
          //   }
          //   return data
          // })
          .enter()
          .append("path")
          // .attr("fill", "#bdbdbd")
          .attr("fill", "#bdbdbd")
          .attr("id", function (d: any) {
            // console.log(d);
            //country name
            return d.properties.A3
          })
          .attr("class", "country")
          .attr("stroke", "white")
          .attr("stroke-width", "0.2px")
          .attr("d", path)

          .on('mouseover', function (this: any, d: any) {
            // var centr = path.centroid(d)


            var tooltipSpan = document.getElementById('tooltip-mid');

            window.onmousemove = function (e) {
              var x = e.clientX,
                y = e.clientY;
              // (x)
              // console.log(y)
              tooltipSpan.style.top = (y - 20) + 'px';
              tooltipSpan.style.left = (x - 55) + 'px';
            };


            d3.select('#tooltip-mid')
              // .style('left', xPosition + 'px')
              // .style('top', yPosition + 'px')
              .select('#country-info-mid')
              .html('<h4>' + d.properties.A3 + '</h4>');

            d3.select('#tooltip-mid').classed('hidden', false);

            var idString = "#" + this.id.toString();
            idString = String(idString)

            // console.log(this.id.toString())

            d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
            d3.select(idString).attr("fill", "steelblue");

          })
          .on('mouseout', function (this: any) {
            d3.select('#tooltip-mid').classed('hidden', true);
            var idString = "#" + this.id.toString()
            idString = String(idString)
            d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));
            // d3.select('#card-name-bub1').html('Country Information');
            // d3.select('#card-desc-bub1').html('Mouse over bars for quick facts.<br/><br/><br/>');
          })
          .on('click', function (this: any, d: any) {
            // console.log("I am on the text!!!!");
            // console.log(this);
            // var idString = "#" + this.id.toString();
            d3.selectAll(".mid").remove()
            var countryNamCh = this.id.toString();
            // console.log("Here")
            // console.log(countryNamCh);
            drawMap(worldmapPath, countryNamCh)
            // console.log("!!!!!!")
          });



      }

      function drawMapOrigin(width: any, height: any, worldmapPath: any) {


        // d3.selectAll(".country").remove()

        d3.select('#tooltip-mid').classed('hidden', true);

        //South Korea
        // var projection = d3.geoMercator().fitSize([width, height], worldmapPath.features[40]);
        var projection = d3.geoMercator().fitSize([width, height], worldmapPath);
        // var projection2 = d3.geoAlbersUsa().fitSize([width, height], popuUS);

        var path = d3.geoPath().projection(projection);

        var warCount = 1828;





        //MAP part
        svg.selectAll(".states")
          .data(worldmapPath.features)
          // .data(worldmapPath.features,function(d:any){
          //   // console.log(d)
          //   if (d.properties.A3=="ROK")
          //   {
          //     console.log("ROK")
          //     console.log(d.properties)
          //     var data=d
          //   }
          //   return data
          // })
          .enter()
          .append("path")
          // .attr("fill", "#bdbdbd")
          .attr("fill", "#bdbdbd")
          .attr("id", function (d: any) {
            // console.log(d);
            //country name
            return d.properties.A3
          })
          .attr("class", "country")
          .attr("stroke", "white")
          .attr("stroke-width", "0.5px")
          .attr("d", path)

          .on('mouseover', function (this: any, d: any) {
            // var centr = path.centroid(d)


            var tooltipSpan = document.getElementById('tooltip-mid');

            window.onmousemove = function (e) {
              var x = e.clientX,
                y = e.clientY;
              // (x)
              // console.log(y)
              tooltipSpan.style.top = (y - 20) + 'px';
              tooltipSpan.style.left = (x - 55) + 'px';
            };


            d3.select('#tooltip-mid')
              // .style('left', xPosition + 'px')
              // .style('top', yPosition + 'px')
              .select('#country-info-mid')
              .html('<h4>' + d.properties.A3 + '</h4>');

            d3.select('#tooltip-mid').classed('hidden', false);

            var idString = "#" + this.id.toString();
            idString = String(idString)

            console.log(idString)

            d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
            d3.select(idString).attr("fill", "steelblue");

          })
          .on('mouseout', function (this: any) {
            d3.select('#tooltip-mid').classed('hidden', true);
            var idString = "#" + this.id.toString()
            idString = String(idString)
            d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));
            // d3.select('#card-name-bub1').html('Country Information');
            // d3.select('#card-desc-bub1').html('Mouse over bars for quick facts.<br/><br/><br/>');
          })
          .on('click', function (this: any, d: any) {
            // console.log("I am on the text!!!!");
            // console.log(this);
            // var idString = "#" + this.id.toString();
            var countryNamCh = this.id.toString();
            // console.log("Here")
            // console.log(countryNamCh);

            //You can see the map of specific country
            // drawMap(worldmapPath, countryNamCh)

          });

      }






      function removedrawMIDs(data: any) {


        // console.log("redrawMIDs")
        // console.log(expMilCountries)

        // DATA JOIN
        var mids = svg.selectAll(".mid").remove()
        // .data(data);

        // console.log(mids)

        var delay = function (d, i) {
          return i * 50;
        }

        // UPDATAE.
        // mids.transition()
        //   .duration(750)
        //   .delay(delay)
        mids.attr("cx", function (d: any) {
          // console.log(+d["midloc2_xlongitude"])
          var marker = projection([+d["midloc2_xlongitude"], +d["midloc2_ylatitude"]])

          return marker[0]
        })
          // .transition()
          //   .duration(750)
          // .delay(delay)
          .attr("cy", function (d: any) {
            var marker = projection([+d["midloc2_xlongitude"], +d["midloc2_ylatitude"]])
            return marker[1]
          })
          .attr("r", 5)
          .attr("fill", "white")
          .attr("class", "mid")
        // .transition()
        // .duration(300)

        // .attr("id", function (d: any) {
        //   var tempId = "conflict" + String(d.dispnum) +"re"
        //   console.log(tempId)
        //   return String(tempId);
        // })
        // .attr("r", 5)
        // .attr("fill", "blue")
        // .attr("class", "bubble")

        // console.log("mids")

        // ENTER.
        mids.enter()
          .append("circle")
          .attr("cx", function (d: any) {
            // console.log("Enter")
            // console.log(+d["midloc2_xlongitude"])
            var marker = projection([+d["midloc2_xlongitude"], +d["midloc2_ylatitude"]])
            return marker[0]
          })
          .attr("cy", function (d: any) {
            var marker = projection([+d["midloc2_xlongitude"], +d["midloc2_ylatitude"]])
            return marker[1]
          })


          .attr("id", function (d: any) {
            var tempId = "conflict" + String(d.dispnum)
            return String(tempId);
          })
          .attr("r", 5)
          .attr("fill", "white")
          .attr("class", "mid")
          .transition()
          // .ease("elastic")
          .duration(300);

        // .on('mouseover', function (this: any, d: any) {
        //   // console.log("I am on the text!!!!");
        //   // console.log(this);
        //   var idString = "#" + this.id.toString();

        //   idString = String(idString)
        //   d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
        //   d3.select(idString).attr("fill", "steelblue")

        //   d3.select(idString).attr("rX", String(d3.select(idString).attr("r")));
        //   d3.select(idString).attr("r", "5")
        // })
        // .on('mouseout', function (this: any) {
        //   // console.log(this);
        //   var idString = "#" + this.id.toString()
        //   idString = String(idString)
        //   d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));
        //   d3.select(idString).attr("r", String(d3.select(idString).attr("rX")));

        // });


        // EXIT.
        mids.exit()
          // .transition()
          // .duration(300)
          .style("opacity", 0)
          .remove();

        // mids.exit()
        // .remove();

      }



      // Modify to present trade flow
      // It can be used for graph.
      // Never delete this function.
      function drawWarsDydapath(data: any) {

        var cirId = 1;
        var couNaId = 1;
        var areaId = 1;
        // console.log(data)
        // war Curve
        var wars = svg.selectAll(".warDyadicPath")
          .data(data)

        wars.attr("class", "warDyadicPath")
          .attr("d", function (d: any) {
            // console.log(+d.a_longitude)
            var target = projection([+d.a_longitude, +d.a_latitude])
            var source = projection([+d.b_longitude, +d.b_latitude])

            var dx = target[0] - source[0],
              dy = target[1] - source[1],
              dr = Math.sqrt(dx * dx + dy * dy);
            return "M" + source[0] + "," + source[1] + "A" + dr + "," + dr +
              " 0 0,1 " + target[0] + "," + target[1];
          })
          .attr("stroke", function (d: any) {
            return "blue";

          })
          .attr("stroke-width", "1");


        wars.enter()
          .append("path")
          .attr("class", "warDyadicPath")
          .attr("d", function (d: any) {
            // console.log(+d.a_longitude)
            var target = projection([+d.a_longitude, +d.a_latitude])
            var source = projection([+d.b_longitude, +d.b_latitude])

            var dx = target[0] - source[0],
              dy = target[1] - source[1],
              dr = Math.sqrt(dx * dx + dy * dy);
            return "M" + source[0] + "," + source[1] + "A" + dr + "," + dr +
              " 0 0,1 " + target[0] + "," + target[1];
          })
          .attr("fill", "none")
          .attr("stroke", function (d: any) {
            // if (d.statea == 2) {
            //   return "blue";
            // }

            // if (d.statea == 230) {
            //   return "red";
            // }

            // else {
            //   return "none"
            // }


            return "blue";

          })
          .attr("stroke-width", "1");

        // EXIT.
        wars.exit()
          // .transition()
          // .duration(750)
          .style("opacity", 0)
          .remove();



        // svg.selectAll(".war")
        //   .data(whcounNaLatLong)
        //   .enter()
        //   .append("text")
        //   .attr("x", function (d: any) {
        //     // console.log([+d.latitude, +d.longitude])
        //     // var marker=projection([+d.alatitude,+d.alongitude])
        //     var marker = projection([+d.longitude, +d.latitude])
        //     // console.log(marker[0])
        //     return marker[0]
        //   })
        //   .attr("y", function (d: any) {
        //     var marker = projection([+d.longitude, +d.latitude])
        //     return marker[1]
        //   })
        //   .attr("id", function (d: any) {
        //     // console.log(d.StateNme)
        //     var tid = d.StateAbb + couNaId.toString()
        //     // console.log(tid)
        //     couNaId++
        //     return tid;
        //     // idString=idString + couNaId.toString()
        //     // couNaId++

        //     // return d.StateNme; 
        //   })
        //   .text(function (d: any) { return d.StateNme; })
        //   .attr("font-family", "sans-serif")
        //   .attr("font-size", "2px")
        //   .attr("text-anchor", "middle")
        //   .attr("fill", "gray")
        //   .on('mouseover', function (this: any, d: any) {
        //     // console.log("I am on the text!!!!");
        //     // console.log(this);
        //     var idString = "#" + this.id.toString();
        //     // console.log(idString)
        //     // console.log(String(d3.select(idString).attr("font-size")));


        //     // console.log(d3.select(idString).attr("cz"));
        //     // console.log(d3.select(idString).attr("cy"));

        //     idString = String(idString)
        //     d3.select(idString).attr("font-sizeX", String(d3.select(idString).attr("font-size")));
        //     d3.select(idString).attr("font-size", "10")

        //     // d3.select(idString).attr("rX", String(d3.select(idString).attr("r")));
        //     // d3.select(idString).attr("r", "5")
        //   })
        //   .on('mouseout', function (this: any) {
        //     // console.log(this);
        //     var idString = "#" + this.id.toString()
        //     idString = String(idString)
        //     d3.select(idString).attr("font-size", String(d3.select(idString).attr("font-sizeX")));
        //     // d3.select(idString).attr("r", String(d3.select(idString).attr("rX")));
        //   });


        // svg.selectAll(".war")
        //   .data(whcounNaLatLong)
        //   .enter()
        //   .append("circle")
        //   .attr("cx", function (d: any) {
        //     // console.log([+d.latitude, +d.longitude])
        //     // var marker=projection([+d.alatitude,+d.alongitude])
        //     var marker = projection([+d.longitude, +d.latitude])
        //     // console.log(marker[0])
        //     return marker[0]
        //   })
        //   .attr("cy", function (d: any) {
        //     var marker = projection([+d.longitude, +d.latitude])
        //     return marker[1]
        //   })

        //   .attr("cz", function (d: any) {
        //     // console.log(d)
        //     // var marker=projection([+d.alatitude,+d.alongitude])
        //     // var marker = projection([+d.longitude, +d.latitude])
        //     // console.log(marker[0])
        //     return d.longitude.toString() + " " + d.latitude.toString() + " " + d.StateNme
        //     // return d.StateAbb
        //   })

        //   .attr("r", "1.5")
        //   .attr("id", function (d: any) {
        //     'circle' + cirId.toString()
        //     cirId++
        //     return 'circle' + cirId.toString();
        //   })
        //   .on('mouseover', function (this: any, d: any) {
        //     // console.log("I am on the text!!!!");
        //     // console.log(this);
        //     var idString = "#" + this.id.toString();

        //     // console.log(d3.select(idString).attr("cz"));
        //     // console.log(d3.select(idString).attr("cy"));

        //     idString = String(idString)
        //     d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
        //     d3.select(idString).attr("fill", "red")

        //     d3.select(idString).attr("rX", String(d3.select(idString).attr("r")));
        //     d3.select(idString).attr("r", "5")
        //   })
        //   .on('mouseout', function (this: any) {
        //     // console.log(this);
        //     var idString = "#" + this.id.toString()
        //     idString = String(idString)
        //     d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));
        //     d3.select(idString).attr("r", String(d3.select(idString).attr("rX")));
        //   });









      }
    });





  }

}
