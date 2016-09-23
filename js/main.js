;(function(){
  'use strict';
  var senQuery = function(selector) {
    if(!(this.instanceof (senQuery))) {
      return new senQuery(selector);
    }

    if (typeof selector !== 'string') {
      return this;
    }

    var nodes = document.querySelectorAll(selector);
    nodes.forEach(function(value, index){
      this[index] = value;
    }, this);
    this.length = nodes.length;

    return this;
}

window.senQuery = senQuery;
window.$ = senQuery;
console.log('loaded')
})()
