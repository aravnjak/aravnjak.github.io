function loadJSON(json, success, error) {
  xhttp = new XMLHttpRequest();
  xhttp.overrideMimeType("application/json");
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.readyState === 4 && this.status == 200) { 
        var response = JSON.parse(this.responseText);
        success(response);
       }
      if (this.status == 404) { 
        error('Not found')
      }
    }
  }
  xhttp.open("GET", json, true);
  xhttp.send();
  /* Exit the function: */
  return;
}