/*
 * + poluzowanie powiazan (tylko observery wiedza o obiekcie nadajacym komunikat)
 * + jawna implementacja wysokopoziomowego algorytmu
 *
 * - niebezpieczenstwo uzaleznienia mediatora od wielu modulow
 * - dodanie kolejnego obserwera wymusza modyfikacje mediatora
 * */
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
