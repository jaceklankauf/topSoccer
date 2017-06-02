$(function() {

var urlApi = "https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers";
// console.log(urlApi);
var body = $('body');
var headerName = ["POZYCJA", "ZAWODNIK", "GOLE"];
var table = $('<table>', { 'class': 'table' }).appendTo(document.body);
var headerRow = $('<tr>', { 'id': 'header'}).appendTo(table);



function newRecord(scorers) {
  for (var i = 0; i < 3; i++) {
    var headerCells = $('<th>', { 'class': 'headerCells'}).appendTo(headerRow);
    headerCells.text(headerName[i])
  }
  for (var i = 0; i < 10; i++) {
    var row = $('<tr>', { 'class': 'players'}).appendTo(table);
    var positionCell = $('<td>', { 'class': 'playersPosition'}).appendTo(row);
    var nameCell = $('<td>', { 'class': 'playersName'}).appendTo(row);
    var goalCell = $('<td>', { 'class': 'playersGoals'}).appendTo(row);
    nameCell.text(scorers[i].fullname);
    positionCell.text([i+1]);
    goalCell.text(scorers[i].goals)
  }
}

function loadData() {
  $.ajax({
      url: urlApi,
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        newRecord(response.data.topscorers);
        console.log(response);
      },
      error: function(err) {
        alert(err);
      },
      beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw");
      }
    });
  }
  loadData();
});
