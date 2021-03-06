function mediateWithObserver() {// Mediator: mediate GUI
  listView.on("listItem:select", function(selectedItem) {
    mapView.changeSelected(selectedItem);
    detailsView.update(selectedItem);
  });

  mapView.on("mapMarker:select", function(selectedItem) {
    listView.changeSelected(selectedItem);
    detailsView.update(selectedItem);
  });
}

// mediate: Notifications etc.
