var pubSub = (function(mixin, Evented) {
  var hub  = {};
  mixin(hub, Evented);

  function subscribe(topic, handler) {
    hub.on(topic, handler);
  }

  function publish(topic, args) {
    hub.trigger(topic, args);
  }

  function unsubscribe(topic) {
    hub.off(topic);
  }

  return {
    subscribe: subscribe,
    publish: publish,
    unsubscribe: unsubscribe
  };
})(mixin, Evented);
