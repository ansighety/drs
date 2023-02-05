//UI SELECTORS
var sFilterVolume = '#filters_volume_tags';
var sFilterPlot = '#filters_plot_tags';
var sFilterTags = '#filters_tags_tags';

var sPointTag = 'span.tag';
var sPointVolume = '.point_volume';
var sPointPlot = '.point_plot';
var sPointTags = '.point_tags';

var allVols = [];
var allPoints = [];
var allTags = [];

$(document).ready(function(){
  page_load();
});

function page_load(){
  //GET ALL VOLUME TAGS
  for(i=0;i<$(sPointVolume + ' ' + sPointTag).length;i++){
    allVols.push({id: $(sPointVolume + ' ' + sPointTag).eq(i).attr("data-id"), name: $(sPointVolume + ' ' + sPointTag).eq(i).text()});
  }
  uniqueSet = new Set(allVols.map(JSON.stringify));
  uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  allVols = [];
  allVols = Array.from(uniqueArray);

  //GET ALL POINT TAGS
  for(j=0;j<$(sPointPlot + ' ' + sPointTag).length;j++){
    allPoints.push({id: $(sPointPlot + ' ' + sPointTag).eq(j).attr("data-id"), name: $(sPointPlot + ' ' + sPointTag).eq(j).text()});
  }
  uniqueSet = new Set(allPoints.map(JSON.stringify));
  uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  allPoints = [];
  allPoints = Array.from(uniqueArray);
  //GET ALL TAGS
  for(k=0;k<$(sPointTags + ' ' + sPointTag).length;k++){
    allTags.push({id: $(sPointTags + ' ' + sPointTag).eq(k).attr("data-id"), name: $(sPointTags + ' ' + sPointTag).eq(k).text()});
  }
  uniqueSet = new Set(allTags.map(JSON.stringify));
  uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  allTags = [];
  allTags = Array.from(uniqueArray);

  allVols.forEach(vol => {
    $(sFilterVolume).append('<li vol-id="'+vol.id+'">'+vol.name+'</li>');
  });
  allPoints.forEach(point => {
    $(sFilterPlot).append('<li point-id="'+point.id+'">'+point.name+'</li>');
  });
  allTags.forEach(tag => {
    $(sFilterTags).append('<li tag-id="'+tag.id+'">'+tag.name+'</li>');
  });
}