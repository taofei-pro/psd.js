// Generated by CoffeeScript 1.11.1
(function() {
  var FillOpacity, LayerInfo,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  LayerInfo = require('../layer_info');

  module.exports = FillOpacity = (function(superClass) {
    extend(FillOpacity, superClass);

    function FillOpacity() {
      return FillOpacity.__super__.constructor.apply(this, arguments);
    }

    FillOpacity.shouldParse = function(key) {
      return key === 'iOpa';
    };

    FillOpacity.prototype.parse = function() {
      var opacity, unit, value;
      value = this.file.readByte();
      opacity = Math.round(value * 100 / 255);
      unit = 'Percent';
      this.data.opacity = opacity;
      return this.data.unit = unit;
    };

    return FillOpacity;

  })(LayerInfo);

}).call(this);