// Generated by CoffeeScript 1.11.1
(function() {
  var Descriptor, LayerInfo, SmartObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  LayerInfo = require('../layer_info');

  Descriptor = require('../descriptor');

  module.exports = SmartObject = (function(superClass) {
    extend(SmartObject, superClass);

    SmartObject.shouldParse = function(key) {
      return key === 'SoLd';
    };

    function SmartObject(layer, length) {
      SmartObject.__super__.constructor.call(this, layer, length);
    }

    SmartObject.prototype.parse = function() {
      this.identifier = this.file.readString();
      this.version = this.file.readInt();
      this.file.seek(4, true);
      this.data = new Descriptor(this.file).parse();
      return this;
    };

    return SmartObject;

  })(LayerInfo);

}).call(this);