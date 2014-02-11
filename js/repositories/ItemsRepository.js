var ItemsRepository = (function() {
  var ITEMS = [
    {id: 1, name: "item 1"},
    {id: 2, name: "item 2"},
    {id: 3, name: "item 3"}
  ];

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
