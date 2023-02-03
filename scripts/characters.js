//ELEMENT IDs
var spoilers_toggle_checkbox = "chara_toggle_checkbox";

$(document).ready(function () {
  page_load();

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

  checkBox = document.getElementById(spoilers_toggle_checkbox).addEventListener('click', event => {
    if(event.target.checked) {
      var spoilerConfirmationBox = confirm("By clicking on this button, you are turning on spoilers that are revealed only in the middle of Book 3. If you still would like to proceed, press OK.");
      if(spoilerConfirmationBox){
        spoilers(true);
      }
      else{
        document.getElementById(spoilers_toggle_checkbox).checked = false;
      }
    }
    else{ spoilers(false); }
  });

});

function page_load(){
  var checkBox = document.getElementById(spoilers_toggle_checkbox);
  if(checkBox.checked) { spoilers(true); }
  else{ spoilers(false); }
}

function spoilers(spoilers_on){
  if(spoilers_on){
    console.log("Checkbox checked!");
    $('body .spoilers_on').addClass("spoilers_off");
    $('body .spoilers_on').removeClass("spoilers_on");
  }
  else{
    console.log("Checkbox unchecked.");
    $('body .spoilers_off').addClass("spoilers_on");
    $('body .spoilers_off').removeClass("spoilers_off");
  }
}