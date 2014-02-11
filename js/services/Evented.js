var Evented = (function() {
  var Evented = {
    on: function(eventName, listener) {
      this._events = this._events || {};
      if (!this._events[eventName])
        this._events[eventName] = [];
      this._events[eventName].push(listener);
    },
    trigger: function(eventName, args) {
      args = args || [];
      this._events = this._events || {};
      var listeners = this._events[eventName] || [];
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener.apply(this, args);
      }
    },
    off: function(eventName) {
      this._events[eventName] = [];
    }
  };

  return Evented;
})();
