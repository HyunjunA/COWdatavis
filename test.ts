.on('mouseover', function (this: any, d: any) {



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