$(document).ready(function () {

  var $container = $(".grid");
  var filters = {};
  var $grid = $container.isotope({
    itemSelector: ".muse",
    transitionDuration: '0s',
    masonry: {
      gutter: 60,
      horizontalOrder: true,
      fitWidth: true,
      percentPosition: false,
    }
  });

  $(".option-set a").mousedown(function (e) {
    var $this = $(this);
    var filterAttr = "data-filter-value";
    var filterValue = $this.attr(filterAttr);
    var $optionSet = $this.parents(".option-set");
    var group = $optionSet.attr("data-filter-group");
    var filterGroup = filters[group];
    if (!filterGroup) {
      filterGroup = filters[group] = [];
    }
    var $selectAll = $optionSet.find('a[' + filterAttr + '=""]');
    var activeClass = "selected",
      exclClass = "exclusive";
    comboFiltering($this, filters, filterAttr, filterValue, $optionSet, group, $selectAll, activeClass, exclClass);
    var comboFilter = getComboFilter(filters);
    $grid.isotope({
      filter: comboFilter
    });
    $this.toggleClass(activeClass);
    e.preventDefault();
  });

  $(".muse").click(function () {
    $('.muse').not(this).removeClass('selected');
    $(this).toggleClass('selected')
  });
});