//ELEMENT IDs
var spoilers_toggle_checkbox = "history_toggle_checkbox";

var cont_history = "page_history";
var cont_spoilers = "history_s";

$( document ).ready(function() {
  page_load();

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
  checkBox = document.getElementById(spoilers_toggle_checkbox);
  if(checkBox.checked) { spoilers(true); }
  else{ spoilers(false); }
}

function spoilers(spoilers_on){
  if(spoilers_on){
    console.log("Checkbox checked!");
    $('#' + cont_history).addClass('spoilers_on');
    $('#' + cont_spoilers).css("display", "block");
  }
  else{
    console.log("Checkbox unchecked.");
    $('#' + cont_history).removeClass('spoilers_on');
    $('#' + cont_spoilers).css("display", "none");
  }
}
