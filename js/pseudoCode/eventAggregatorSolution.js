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
