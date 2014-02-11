function tightCoupling() {
  mapView.setViews(listView, detailsView);
  listView.setViews(mapView, detailsView);

  // on marker click
  mapView.select(item);

  // on list item click
  listView.select(item);
}
