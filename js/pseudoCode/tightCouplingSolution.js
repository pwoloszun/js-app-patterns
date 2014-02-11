/*
 * + prostota (prostactwo) implementacji
 *
 * - Scisle powiazania
 * - widoki nie sa reuzywalne
 * - cykiczne zaleznosci
 * - dodanie kolejnego widoku implikuje modyfikacje kodu istniejacych widokow
 * */
function tightCoupling() {
  mapView.setViews(listView, detailsView);
  listView.setViews(mapView, detailsView);

  // on marker click
  mapView.select(item);

  // on list item click
  listView.select(item);
}
