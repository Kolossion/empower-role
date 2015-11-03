// Generated by CoffeeScript 1.10.0
(function() {
  var Role;

  Role = (function() {
    function Role(name1) {
      this.name = name1;
      this.permissions = {};
    }

    Role.prototype.getName = function() {
      return this.name;
    };

    Role.prototype.addPermission = function(name, isAllowed) {
      this.permissions[name] = isAllowed ? 1 : 0;
      return this;
    };

    Role.prototype.isAllowed = function(name) {
      return this.permissions[name] === 1;
    };

    return Role;

  })();

  module.exports = function(name) {
    return new Role(name);
  };

}).call(this);
