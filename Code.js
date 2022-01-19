function myFunction() {
  
}
//function doGet(request) {
  function doGet() {
//  return HtmlService.createTemplateFromFile('index')
//      .evaluate();
  
  var html = HtmlService.createHtmlOutputFromFile("index");
  return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

//function doGet(request) {
//  return HtmlService.createTemplateFromFile('Index').evaluate();
//}



//function doGet() {
//  var html = HtmlService.createHtmlOutputFromFile("index");
//  return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
//}