// Generated by CoffeeScript 1.11.1
(function() {
  var GlobalLight;

  module.exports = GlobalLight = (function() {
    GlobalLight.prototype.id = 1049;

    GlobalLight.prototype.name = 'globalLightAngle';

    function GlobalLight(resource) {
      this.resource = resource;
      this.file = this.resource.file;
    }

    GlobalLight.prototype.parse = function() {
      return this.altitude = this.file.readInt();
    };

    return GlobalLight;

  })();

}).call(this);
