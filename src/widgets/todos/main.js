define(['sandbox', './views/app'], function(sandbox, AppView) {
  "use strict";

  return function(options) {
    new AppView({
      el: sandbox.dom.find(options.element)
    });

    sandbox.publish('bootstrap', 'todos');
    sandbox.subscribe('bootstrap', 'todos', function(from) {
      console.log('Todos-bootstrap message from from: ' + from);
    });
  };

});
