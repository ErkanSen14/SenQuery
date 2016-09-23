;
(function() {
    'use strict';
    var senQuery = function(selector) {
        if (!(this instanceof senQuery)) {
            return new senQuery(selector);
        }

        if (typeof selector !== 'string') {
            return this;
        }

        var nodes = Array.prototype.slice.call(document.querySelectorAll(selector));
        nodes.forEach(function(value, index) {
            this[index] = value;
        }, this);
        this.length = nodes.length;

        return this;
    }

    senQuery.prototype.each = function(callback, context){
      for (var i = 0; i < this.length - 1; i++) {
        callback.call(context || this, this[i], i, this);
      }
      return this;
    }

    senQuery.prototype.attr = function(attribute) {
      if (attribute === 'class') {
        attribute = 'className';
      }
      if (this[0]) {
        return this[0][attribute];
      }
      return undefined;
    }

    window.senQuery = senQuery;
    window.$ = senQuery;
    console.log('loaded')
})()
