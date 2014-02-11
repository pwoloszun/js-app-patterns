var itemsRepository = (function() {
  var ITEMS = [];
  for (var i = 1; i < 10; i++) {
    ITEMS.push({
      id: i,
      name: "item " + i,
      description: "some desc " + i
    });
  }

  return {
    getAll: function() {
      return ITEMS;
    },
    getById: function(id) {
      return _(ITEMS).find(function(item) {
        return item.id == id;
      });
    }
  };
})();
