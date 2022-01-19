function myFunction() {
  
}

function doGet(e) {
  return HtmlService
    .createHtmlOutputFromFile('index.html')//This is html file we want to render
    .setTitle("Hello World Example");//We can set title from here
}