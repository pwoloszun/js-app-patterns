function mediateWithEventAggregator() {
  pubSub.subscribe("listItem:select", function() {
    mapView.changeSelected(selectedItem);
    detailsView.update(selectedItem);
  });

  pubSub.subscribe("mapMarker:select", function() {
    listView.changeSelected(selectedItem);
    detailsView.update(selectedItem);
  });
}
