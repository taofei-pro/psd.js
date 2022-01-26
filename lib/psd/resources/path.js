// Generated by CoffeeScript 1.11.1
(function() {
  var Path, PathRecord;

  PathRecord = require('../path_record');

  module.exports = Path = (function() {
    Path.prototype.id = 2000;

    Path.prototype.name = 'path';

    function Path(resource) {
      this.resource = resource;
      this.file = this.resource.file;
      this.paths = [];
    }

    Path.prototype.parse = function() {
      var i, j, numRecords, record, ref, results;
      numRecords = this.resource.length / 26;
      results = [];
      for (i = j = 0, ref = numRecords; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        record = new PathRecord(this.file);
        record.parse();
        results.push(this.paths.push(record));
      }
      return results;
    };

    Path.prototype["export"] = function() {
      return this.paths;
    };

    return Path;

  })();

}).call(this);