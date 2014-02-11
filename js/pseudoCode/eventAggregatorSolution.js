/*
* + Najbardziej luzne powiazania
* + kolejne obiekty ktore nasluchuja topica dodawane niezaleznie (obiekt publikujacy topic nic nie wie o ilosci nasluchujacych)
*
*
* - globalny pubsub moze zostac przepelniony
* - niebezpieczenstwo powstania cyklicznych wywolan
* - literowka - niebezpieczenstwo publikowania/nasluchiwania na nieistniejacy event
* - obiekt publikujacy nie ma zadnej kontroli nad tym kto nasluchuje i w jaki sposob obsluguje topic
* - obiekt nasluchujacy nie wie czy ktokolwiek publikuje na danm topicu
* - obsluga zdarzen rozsiana po calej aplikacji
* */
function eventAggregatorSolution() {
  // MapCtrl.js
  function MapCtrl() {
    pubSub.subscribe("listItem:select", function(selectedItem) {
      mapView.changeSelected(selectedItem);
    });
  }

  // ListCtrl.js
  function ListCtrl() {
    pubSub.subscribe("mapMarker:select", function(selectedItem) {
      listView.changeSelected(selectedItem);
    });
  }

  // DetailsCtrl.js
  function DetailsCtrl() {
    pubSub.subscribe("listItem:select", function(selectedItem) {
      detailsView.update(selectedItem);
    });
    pubSub.subscribe("mapMarker:select", function(selectedItem) {
      detailsView.update(selectedItem);
    });
  }

}
