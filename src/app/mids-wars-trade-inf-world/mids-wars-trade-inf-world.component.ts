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





    // d3.select("#res")
    //   .on("click", function () {
    //     //console.log("all")

    //     titleFirst = "The 10 countries"
    //     titleSort = "Alphabetical Order"

    //     setNumCouMode("#res")


    //     datasetCop = dataset.slice(0)


    //     setMode("#alpha")

    //     datasetCop.sort(function (a, b) {
    //       return d3.ascending(a.year, b.year);
    //     });

    //     x.domain(datasetCop.sort(
    //       function (a, b) { return d3.ascending(a.year, b.year); }
    //     ).map(function (d) {
    //       // console.log(d)
    //       return d.year;
    //     }));
    //     transitionAxis();
    //     transitionHeader();
    //     transitionHeaderLowPart();
    //     redrawbars(datasetCop);

    //   });



    // d3.select("#all")
    //   .on("click", function () {
    //     //console.log("all")

    //     titleFirst = "The 10 countries"

    //     setNumCouMode("#all")


    //     datasetCop = dataset.slice(0)

    //     if (mode == "#alpha") {
    //       // //console.log("inner alpha")
    //       setMode("#alpha")
    //       ////console.log(datasetCop);
    //       datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.year, b.year);
    //       });
    //       ////console.log(datasetCop);
    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.year, b.year); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeader();
    //       redrawbars(datasetCop)
    //     }

    //     if (mode == "#ascend") {
    //       setMode("#ascend")

    //       ////console.log(datasetCop);
    //       datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.countmids, b.countmids);
    //       });
    //       ////console.log(datasetCop);

    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));

    //       transitionAxis();
    //       transitionHeader();
    //       redrawbars(datasetCop)
    //     }
    //     if (mode == "#descen") {
    //       setMode("#descen")
    //       // //console.log("inner descen")
    //       ////console.log(datasetCop);
    //       datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });
    //       ////console.log(datasetCop);
    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.descending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));

    //       transitionAxis();
    //       transitionHeader();
    //       redrawbars(datasetCop)
    //     }

    //     // redrawbars(datasetCop)
    //   });



    // d3.select("#top")
    //   .on("click", function () {

    //     titleFirst = "The Top 5 countries"

    //     setNumCouMode("#top")

    //     if (mode == "#alpha") {
    //       datasetCop = dataset.slice(0)

    //       datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });

    //       ////console.log(datasetCop);
    //       datasetCop.splice(5, 5);
    //       ////console.log(datasetCop);
    //       setMode("#alpha")
    //       // ////console.log(datasetCop);
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.year, b.year);
    //         // return a.year-b.year;
    //       });


    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.countmids, b.countmidsy); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeader();
    //       redrawbars(datasetCop)
    //     }

    //     if (mode == "#ascend") {

    //       datasetCop = dataset.slice(0)

    //       datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });
    //       datasetCop.splice(5, 5)
    //       setMode("#ascend")
    //       ////console.log(datasetCop);
    //       datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.countmids, b.countmids);
    //       });
    //       ////console.log(datasetCop);
    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeader();
    //       redrawbars(datasetCop)
    //     }
    //     if (mode == "#descen") {

    //       datasetCop = dataset.slice(0)

    //       datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });

    //       setMode("#descen")
    //       ////console.log(datasetCop);
    //       datasetCop.splice(5, 5)
    //       datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });
    //       ////console.log(datasetCop);

    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.descending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeader();
    //       redrawbars(datasetCop)
    //     }

    //     // redrawbars(datasetCop)
    //   });


    // d3.select("#bot")
    //   .on("click", function () {

    //     titleFirst = "The Bottom 5 countries"


    //     if (mode == "#alpha") {

    //       setNumCouMode("#bot")
    //       datasetCop = dataset.slice(0)

    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });

    //       datasetCop.splice(0, 5)

    //       setMode("#alpha")
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.year, b.year);
    //       });

    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.year, b.year); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeader();
    //       redrawbars(datasetCop)
    //     }

    //     if (mode == "#ascend") {

    //       setNumCouMode("#bot")
    //       datasetCop = dataset.slice(0)

    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });

    //       datasetCop.splice(0, 5)

    //       setMode("#ascend")
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.countmids, b.countmids);
    //       });

    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeader();
    //       redrawbars(datasetCop)
    //     }
    //     if (mode == "#descen") {

    //       setNumCouMode("#bot")
    //       datasetCop = dataset.slice(0)

    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });

    //       datasetCop.splice(0, 5)

    //       setMode("#descen")
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });

    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.descending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeader();
    //       redrawbars(datasetCop)
    //     }

    //     // redrawbars(datasetCop)
    //   });


    // d3.select("#alpha")
    //   .on("click", function () {

    //     titleSort = "Alphabetical Order"

    //     setMode("#alpha")

    //     if (modeSortMet == "#res") {
    //       setNumCouMode("#res")
    //       datasetCop = dataset.slice(0)

    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.year, b.year);
    //       });


    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.year, b.year); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeaderLowPart();
    //       redrawbars(datasetCop)
    //     }


    //     if (modeSortMet == "#all") {
    //       setNumCouMode("#all")
    //       datasetCop = dataset.slice(0)

    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.year, b.year);
    //       });


    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.year, b.year); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeaderLowPart();
    //       redrawbars(datasetCop)
    //     }

    //     if (modeSortMet == "#top") {


    //       datasetCop = dataset.slice(0)
    //       // console.log(datasetCop.year)

    //       setNumCouMode("#top")
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.countmids, b.countmids);
    //       });

    //       datasetCop = datasetCop.splice(5, 5)

    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.year, b.year);
    //       });

    //       //console.log(datasetCop)
    //       datasetCop.splice(5, 5)
    //       //console.log(datasetCop)

    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.year, b.year); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeaderLowPart();
    //       redrawbars(datasetCop)
    //     }
    //     if (modeSortMet == "#bot") {
    //       setNumCouMode("#bot")
    //       datasetCop = dataset.slice(0)

    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.countmids, b.countmids);
    //       });

    //       datasetCop = datasetCop.splice(0, 5)

    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.year, b.year);
    //       });

    //       // //console.log(datasetCop)
    //       datasetCop = datasetCop.splice(0, 5)


    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.year, b.year); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeaderLowPart();
    //       redrawbars(datasetCop)

    //       // ////console.log(datasetCop)
    //     }

    //     // redrawbars(datasetCop)
    //   });


    // d3.select("#ascend")
    //   .on("click", function () {

    //     titleSort = "Ascending Order"
    //     //console.log("ascend")
    //     setMode("#ascend")

    //     if (modeSortMet == "#all") {
    //       datasetCop = dataset.slice(0)
    //       setNumCouMode("#all")
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.countmids, b.countmids);
    //       });
    //       ////console.log(datasetCop);

    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeaderLowPart();
    //       redrawbars(datasetCop);
    //     }

    //     if (modeSortMet == "#res") {
    //       datasetCop = dataset.slice(0)
    //       setNumCouMode("#res")
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.countmids, b.countmids);
    //       });
    //       ////console.log(datasetCop);

    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeaderLowPart();
    //       redrawbars(datasetCop);
    //     }

    //     if (modeSortMet == "#top") {
    //       datasetCop = dataset.slice(0)
    //       setNumCouMode("#top")
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.countmids, b.countmids);
    //       });

    //       ////console.log(datasetCop)
    //       datasetCop = datasetCop.splice(5, 5)
    //       ////console.log(datasetCop)

    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeaderLowPart();
    //       redrawbars(datasetCop)
    //     }
    //     if (modeSortMet == "#bot") {
    //       datasetCop = dataset.slice(0)
    //       setNumCouMode("#bot")
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.ascending(a.countmids, b.countmids);
    //       });
    //       ////console.log(datasetCop)
    //       datasetCop = datasetCop.splice(0, 5)
    //       ////console.log(datasetCop)

    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.ascending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeaderLowPart();
    //       redrawbars(datasetCop)
    //       // ////console.log(datasetCop)
    //     }

    //     // redrawbars(datasetCop)
    //   });

    // d3.select("#descen")
    //   .on("click", function () {

    //     titleSort = "Descending Order"
    //     //console.log("descen")
    //     setMode("#descen")
    //     datasetCop = dataset.slice(0)


    //     if (modeSortMet == "#all") {
    //       setNumCouMode("#all")
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });


    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.descending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeaderLowPart();
    //       redrawbars(datasetCop)
    //     }

    //     if (modeSortMet == "#res") {
    //       setNumCouMode("#res")
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });


    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.descending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeaderLowPart();
    //       redrawbars(datasetCop)
    //     }

    //     if (modeSortMet == "#top") {
    //       setNumCouMode("#top")
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });
    //       ////console.log(datasetCop)
    //       datasetCop = datasetCop.splice(0, 5)
    //       ////console.log(datasetCop)
    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.descending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));
    //       transitionAxis();
    //       transitionHeaderLowPart();
    //       redrawbars(datasetCop)
    //       // ////console.log(datasetCop)
    //     }
    //     if (modeSortMet == "#bot") {
    //       setNumCouMode("#bot")
    //       datasetCop = datasetCop.sort(function (a, b) {
    //         return d3.descending(a.countmids, b.countmids);
    //       });

    //       ////console.log(datasetCop)
    //       datasetCop = datasetCop.splice(5, 5)
    //       ////console.log(datasetCop)
    //       x.domain(datasetCop.sort(
    //         function (a, b) { return d3.descending(a.countmids, b.countmids); }
    //       ).map(function (d) {
    //         // console.log(d)
    //         return d.year;
    //       }));


    //       transitionAxis();
    //       transitionHeaderLowPart();
    //       redrawbars(datasetCop)
    //     }

    //   });




    // function transitionAxis() {

    //   // console.log("trainsitionBars")
    //   var transition = svgmidsBar.transition()
    //     .duration(750);

    //   // var delay = function (d, i) {
    //   //     return i * 50;
    //   // };


    //   transition.select("#x-axis")
    //     .call(xAxis);


    // }

    // function transitionHeader() {

    //   var newTitle = titleFirst + ' ' + titleSecond
    //   // newTitleLowPart = "In 2016" + "-" + titleSort

    //   d3.select("#barChartHead")
    //     .transition()
    //     .duration(300)
    //     .on("start", function transitionHeaderIn() {
    //       var t = d3.active(this)
    //         .style("opacity", 0)
    //         .remove();


    //       d3.select("#barChartHead")
    //         .style("opacity", 0)
    //         .text(newTitle)
    //         .transition(t)
    //         .style("opacity", 1)
    //         .transition()
    //         .delay(100);
    //     });





    // }

    // function transitionHeaderLowPart() {

    //   // newTitle = titleFirst + ' ' + titleSecond
    //   var newTitleLowPart = "In 2016" + "-" + titleSort


    //   d3.select("#barChartHiHead")
    //     .transition()
    //     .duration(300)
    //     .on("start", function transitionHeaderIn() {
    //       var t = d3.active(this)
    //         .style("opacity", 0)
    //         .remove();


    //       d3.select("#barChartHiHead")
    //         .style("opacity", 0)
    //         .text(newTitleLowPart)
    //         .transition(t)
    //         .style("opacity", 1)
    //         .transition()
    //         .delay(100);
    //     });



    // }

    // function redrawbars(data: any) {

    //   //update scale

    //   x.domain(datasetCop.map(function (d: any) { return d.year; }));

    //   ////////////////////////////////
    //   // DATA JOIN FOR BARS.
    //   var bars = svgmidsBar.selectAll(".bar")
    //     .data(datasetCop, function (d: any) { return d.year; });

    //   var delay = function (d, i) {
    //     return i * 50;
    //   }

    //   // UPDATE.
    //   bars.transition()
    //     .duration(750)
    //     .delay(delay)
    //     .attr("x", function (d) { return x(d.year); })
    //     .attr("width", x.bandwidth());

    //   // ENTER.
    //   bars.enter().append("rect")
    //     .attr("x", function (d) { return x(d.year); })
    //     .attr("y", function (d) { return y(d.countmids); })
    //     .transition()
    //     .duration(1000)
    //     .attr("class", "bar")
    //     .attr("x", function (d) { return x(d.year); })
    //     .attr("y", function (d) { return y(d.countmids); })
    //     .attr("width", x.bandwidth())
    //     .attr("height", function (d) { return heightMIDBar - y(d.countmids); });

    //   // EXIT.
    //   bars.exit()
    //     .transition()
    //     .duration(750)
    //     .style("opacity", 0)
    //     .remove();

    // }



    // function setMode(id) {
    //   d3.select("#alpha").style("background-color", "whitesmoke");
    //   d3.select("#ascend").style("background-color", "whitesmoke");
    //   d3.select("#descen").style("background-color", "whitesmoke");
    //   d3.select(id).style("background-color", "lightblue");
    //   mode = id;



    //   // //console.log(mode)
    // }

    // function setNumCouMode(id) {
    //   d3.select("#res").style("background-color", "#FFFF66");
    //   d3.select("#all").style("background-color", "#FFFF66");
    //   d3.select("#top").style("background-color", "#FFFF66");
    //   d3.select("#bot").style("background-color", "#FFFF66");

    //   d3.select(id).style("background-color", "#FF3366");
    //   modeSortMet = id;

    //   // //console.log(modeSortMet)
    // }


































    var svg = d3.select("#worldMid"),
      width = +svg.attr("width"),
      height = +svg.attr("height");



    // var files = ["us.json", "us-state-centroids.json"];
    // var files = ["map.geojson", "MIDLOCA_2.0.csv"];
    var files = ["map.geojson", "MIDLOCA_2.0.csv", "directed_dyadic_war_lati_long.csv", "COW country codes_lati_long.csv", "Dyadic_COW_4.0_flow2_1870.json", "MIDLOCA_2.0_groupbycountbyyear.csv"];


    var promises = [];

    files.forEach(function (url) {
      var partsOfurl = url.split('.');


      if (partsOfurl[partsOfurl.length - 1] == "geojson" || partsOfurl[partsOfurl.length - 1] == "json") { promises.push(d3.json(url)) }
      if (partsOfurl[partsOfurl.length - 1] == "csv") { promises.push(d3.csv(url)) }

    });



    // var colFleg = d3.scaleSequential(d3.interpolateBlues);
    // var microCo = [];


    // var intervCol = 0.001;
    // var i = 0
    // while (i <= 1) {
    //   // console.log(i)
    //   microCo.push(colFleg(i))
    //   i = i + intervCol;
    //   // console.log(i)
    // }

    // var legend = svg.selectAll(".rect")
    //   .data(microCo)
    //   .enter()
    //   .append("rect")
    //   .attr("fill", function (d: any) {
    //     // console.log(d)
    //     return d;
    //   })
    //   .attr("x", function (d, i) {
    //     return 800 + i * 0.2
    //   })
    //   .attr("y", 40)
    //   .attr("width", 0.19)
    //   .attr("height", 12);




    var percentMil = [0, 1];

    // var labels = svg.selectAll(".text")
    //   .data(percentMil)
    //   .enter()
    //   .append("text")
    //   .attr("x", function (d, i) {
    //     return 800 + i * 175
    //   })
    //   .attr("y", 65)
    //   .attr("font-size", '10px')
    //   .attr("dy", "0.1em")
    //   .text(d3.format(".0%"));

    // svg.append("text")
    //   .attr("x", 800)
    //   .attr("y", 30)
    //   .attr("font-size", '10px')
    //   .text("The share of world military expenditure (%)");

    Promise.all(promises).then(function (values) {

      // console.log(values[0]);
      // var colF = d3.scaleSequential(d3.interpolateOranges);
    
      // var colF = d3.scaleSequential(d3.interpolateBlues);
      //U.S.A location data
      var worldmapPath = values[0]

      //State population data in U.S.A 
      var midsRecord = values[1];

      var wardata = values[2];

      var whcounNaLatLong = values[3];



      // function setMode(id) {
      //   d3.select("#alpha").style("background-color", "whitesmoke");
      //   d3.select("#ascend").style("background-color", "whitesmoke");
      //   d3.select("#descen").style("background-color", "whitesmoke");
      //   d3.select(id).style("background-color", "lightblue");
      //   mode = id;
  
  
  
      //   // //console.log(mode)
      // }
  
      // function setNumCouMode(id) {
      //   d3.select("#res").style("background-color", "#FFFF66");
      //   d3.select("#all").style("background-color", "#FFFF66");
      //   d3.select("#top").style("background-color", "#FFFF66");
      //   d3.select("#bot").style("background-color", "#FFFF66");
  
      //   d3.select(id).style("background-color", "#FF3366");
      //   modeSortMet = id;
  
      //   // //console.log(modeSortMet)
      // }



      // MIDs Bar chart part
      // var margin = { top: 20, left: 80, bottom: 50, right: 10 };
      var margin = { top: 20, left: 10, bottom: 50, right: 10 };
      var widthMIDBar = 1000 - margin.left - margin.right;
      var heightMIDBar = 200 - margin.top - margin.bottom;

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
 
      // var mode = "#ascend";

      // var modeSortMet = "#all";
      // var datasetCop;

      // var titleFirst;
      // var titleSecond = "For Military Expenditure";
      // var titleSort = "Alphabetical Order";

      var maxCountMids;


      var dataset = values[5];
      maxCountMids = d3.max(dataset, function (d: any) { return +d.countmids; });

      // setMode("#alpha");
      // setNumCouMode("#res");


      // drawBars();



      x.domain(dataset.map(function (d) { return d.year; }))
        .range([0, widthMIDBar])
        .paddingInner(0.15);

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
        .attr("fill", "rgb(196, 50, 50)")
        .on('mouseover', function (this: any) {
          // console.log("hello!!!")
          var idString = "#" + this.id.toString();
          var yearString=idString.replace(/\D/g, "");

          idString = String(idString)
          d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
          d3.select(idString).attr("fill", "steelblue");

          var temp = values[1].filter(x => x.year == String(yearString))
          drawMIDs(temp)
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




      var xAxis: any = d3.axisBottom(this)
        .scale(x)



      svgmidsBar.append("g")
        .attr("id", "x-axis")
        .attr("class", "axis")
        .attr("transform", "translate(0," + heightMIDBar + ")")
        // .call(xAxis);



      var yAxis: any = d3.axisLeft(this)
        .scale(y)
      // .ticks(5, 'd');

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















     


      //Map parts
      d3.select('#tooltip-mid').classed('hidden', true);


      var projection = d3.geoMercator().fitSize([width, height], worldmapPath);
      // var projection2 = d3.geoAlbersUsa().fitSize([width, height], popuUS);

      var path = d3.geoPath().projection(projection);

      // console.log(expMilCountries)
      var count = 1820;
      var warCount = 1822;
      d3.select("#warres")
        .on("click", function () {
          // console.log(wardata)
          count = count + 1
          // console.log(count)

          var temp = values[1].filter(x => x.year == String(count))
          drawMIDs(temp)

        });


      d3.select("#warbot")
        .on("click", function () {
          console.log("click")
          warCount = warCount + 1
          console.log(warCount)
          // console.log(values[2])
          var temp = values[2].filter(x => x.year == String(warCount))
          // console.log(values[2])
          // console.log(temp)

          // midsRecord = temp
          // console.log(temp);
          drawWars(temp)

        });


      d3.select("#midsButton")
        .on("click", function () {

          d3.selectAll(".warDyadicPath").remove()
          var temp = values[1].filter(x => x.year == String(count))
          drawMIDs(temp)

        });

      d3.select("#warsButton")
        .on("click", function () {
          // console.log(wardata)
          d3.selectAll(".mid").remove()
          var temp = values[2].filter(x => x.year == String(warCount))
          drawWars(temp)
        });

      //MAP part
      svg.selectAll(".states")
        .data(worldmapPath.features)
        .enter()
        .append("path")
        .attr("fill", "white")
        .attr("id", function (d: any) {
          // console.log(d.properties.A3);
          //country name
          return d.properties.A3
        })
        .attr("stroke", "gray")
        .attr("d", path)

        .on('mouseover', function (this: any, d: any) {
          var centr = path.centroid(d)
          // console.log(t)
          var xPosition = centr[0] - 100;
          // xPosition += (xPosition > diameter) ? -200 : 50;  //switch sides
          // var yPosition = parseFloat(d3.mouse(this)[1]);
          var yPosition = centr[1];
          // yPosition += (yPosition > diameter) ? -50 : 80;  //switch up/bottom

          var tooltipSpan = document.getElementById('tooltip-mid');

          window.onmousemove = function (e) {
            var x = e.clientX,
              y = e.clientY;
            // console.log(x)
            // console.log(y)
            tooltipSpan.style.top = (y-20) + 'px';
            tooltipSpan.style.left = (x-55) + 'px';
          };

          d3.select('#tooltip-mid')
            // .style('left', xPosition + 'px')
            // .style('top', yPosition + 'px')
            .select('#country-info-mid')
            .html('<h4>' + d.properties.A3 + '</h4>');
          d3.select('#tooltip-mid').classed('hidden', false);

          var idString = "#" + this.id.toString();
          idString = String(idString)
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
        });


      var buttonA = 1;



      //Draw all Conflict
      // svg.selectAll(".conflict")
      //   .data(midsRecord)
      //   .enter()
      //   .append("circle")
      //   .attr("cx", function (d: any) {
      //     // console.log(+d.midloc11_longitude)
      //     var marker = projection([+d.midloc11_longitude, +d.midloc11_latitude])
      //     return marker[0]
      //   })
      //   .attr("cy", function (d: any) {
      //     var marker = projection([+d.midloc11_longitude, +d.midloc11_latitude])
      //     return marker[1]
      //   })
      //   .attr("id", function (d: any) {
      //     var tempId = "conflict" + String(d.dispnum)
      //     return String(tempId);
      //   })
      //   .attr("r", 2)
      //   .attr("fill", "blue")
      //   .attr("class", "mid")
      //   .on('mouseover', function (this: any, d: any) {
      //     // console.log("I am on the text!!!!");
      //     // console.log(this);
      //     var idString = "#" + this.id.toString();
      //     // console.log(idString);
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







      // var i;
      // for (i = 0; i < expMilCountries.length; i++) {


      //   var d = expMilCountries[i].expend / 100
      //   // console.log(d)
      //   var c = colF(d)
      //   // var c = colF(0.35)
      //   // console.log(c)
      //   var ID = "#" + expMilCountries[i].country
      //   svg.select(ID)
      //     .style("fill", c);
      // }


      // var i;
      // for (i = 0; i < expMilCountries.length; i++) {


      //   var coord: any = [expMilCountries[i].coordinates[1], expMilCountries[i].coordinates[0]];
      //   var marker = projection(coord);
      //   // console
      //   svg.append("circle")
      //     .attr("cx", marker[0])
      //     .attr("cy", marker[1])
      //     .attr("r", 5)
      //     .attr("fill", "red")
      //     .attr("class", "bubble")


      //   if (marker[0] < 600) {
      //     svg.append("line")

      //       .attr("x1", marker[0] - 3)
      //       .attr("y1", marker[1])
      //       .attr("x2", marker[0] - 70)
      //       .attr("y2", marker[1])
      //       // .attr("fill", "none")
      //       .attr("stroke", "black")
      //       .attr("stroke-width", 1);


      //     svg.append("text")

      //       .attr("x", marker[0] - 95)
      //       .attr("y", marker[1] + 3)
      //       // .attr("fill", "none")
      //       .attr("dy", "0.1em")
      //       .attr("font-size", '10px')
      //       .text(expMilCountries[i].country);
      //   }


      //   if (600 <= marker[0] && marker[0] < 700) {
      //     svg.append("line")
      //       // .attr("x1", marker[0]+(1.414/2)*expMilCountries[i].expend)
      //       // .attr("y1", marker[1]+(1.414/2)*expMilCountries[i].expend)
      //       .attr("x1", marker[0])
      //       .attr("y1", marker[1] + 3)
      //       .attr("x2", marker[0] + 10)
      //       .attr("y2", marker[1] + 50)
      //       // .attr("fill", "none")
      //       .attr("stroke", "black")
      //       .attr("stroke-width", 1);


      //     svg.append("text")

      //       .attr("x", marker[0] + 12)
      //       .attr("y", marker[1] + 55)
      //       .attr("font-size", '10px')
      //       // .attr("fill", "none")
      //       .attr("dy", "0.1em")
      //       .text(expMilCountries[i].country);



      //   }



      //   if (700 <= marker[0] && marker[0] < 800) {
      //     svg.append("line")
      //       // .attr("x1", marker[0]+(1.414/2)*expMilCountries[i].expend)
      //       // .attr("y1", marker[1]+(1.414/2)*expMilCountries[i].expend)
      //       .attr("x1", marker[0] - 3)
      //       .attr("y1", marker[1])
      //       .attr("x2", marker[0] - 20)
      //       .attr("y2", marker[1])
      //       // .attr("fill", "none")
      //       .attr("stroke", "black")
      //       .attr("stroke-width", 1);


      //     svg.append("text")

      //       .attr("x", marker[0] - 45)
      //       .attr("y", marker[1] + 4)
      //       // .attr("fill", "none")
      //       .attr("font-size", '10px')
      //       .attr("dy", "0.1em")
      //       .text(expMilCountries[i].country);



      //   }

      //   if (800 < marker[0]) {


      //     svg.append("line")

      //       .attr("x1", marker[0])
      //       .attr("y1", marker[1] + 3)
      //       .attr("x2", marker[0] + 10)
      //       .attr("y2", marker[1] + 50)
      //       // .attr("fill", "none")
      //       .attr("stroke", "black")
      //       .attr("stroke-width", 1);


      //     svg.append("text")

      //       .attr("x", marker[0] + 12)
      //       .attr("y", marker[1] + 55)
      //       .attr("font-size", '10px')
      //       // .attr("fill", "none")
      //       .attr("dy", "0.1em")
      //       .text(expMilCountries[i].country);



      //   }
      // }



      function drawMIDs(data: any) {


        // console.log("redrawMIDs")
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
          // console.log(+d.midloc11_longitude)
          var marker = projection([+d.midloc11_longitude, +d.midloc11_latitude])
          return marker[0]
        })
        // .transition()
        //   .duration(750)
          // .delay(delay)
          .attr("cy", function (d: any) {
            var marker = projection([+d.midloc11_longitude, +d.midloc11_latitude])
            return marker[1]
          })
          .attr("r", 5)
          .attr("fill", "rgb(196, 50, 50)")
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
            // console.log(+d.midloc11_longitude)
            var marker = projection([+d.midloc11_longitude, +d.midloc11_latitude])
            return marker[0]
          })
          .attr("cy", function (d: any) {
            var marker = projection([+d.midloc11_longitude, +d.midloc11_latitude])
            return marker[1]
          })


          .attr("id", function (d: any) {
            var tempId = "conflict" + String(d.dispnum)
            return String(tempId);
          })
          .attr("r", 5)
          .attr("fill", "rgb(196, 50, 50)")
          .attr("class", "mid")
          // .transition()
          // // .ease("elastic")
          // .duration(300)

          .on('mouseover', function (this: any, d: any) {
            // console.log("I am on the text!!!!");
            // console.log(this);
            var idString = "#" + this.id.toString();

            idString = String(idString)
            d3.select(idString).attr("fillX", String(d3.select(idString).attr("fill")));
            d3.select(idString).attr("fill", "steelblue")

            d3.select(idString).attr("rX", String(d3.select(idString).attr("r")));
            d3.select(idString).attr("r", "5")
          })
          .on('mouseout', function (this: any) {
            // console.log(this);
            var idString = "#" + this.id.toString()
            idString = String(idString)
            d3.select(idString).attr("fill", String(d3.select(idString).attr("fillX")));
            d3.select(idString).attr("r", String(d3.select(idString).attr("rX")));

          });


        // EXIT.
        mids.exit()
          // .transition()
          // .duration(300)
          .style("opacity", 0)
          .remove();

        // mids.exit()
        // .remove();

      }




      function drawWars(data: any) {

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