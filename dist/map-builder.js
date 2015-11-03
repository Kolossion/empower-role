// Generated by CoffeeScript 1.10.0
(function() {
  var Role, RoleMap, mapFromJson;

  RoleMap = require('./map.coffee');

  Role = require('./role.coffee');

  mapFromJson = function(jsonMap) {
    var map, name, permMap, role, roleName, value;
    map = RoleMap();
    for (roleName in jsonMap) {
      permMap = jsonMap[roleName];
      role = Role(roleName);
      for (name in permMap) {
        value = permMap[name];
        role.addPermission(name, value);
      }
      map.addRole(role);
    }
    return map;
  };

  module.exports = {
    mapFromJson: mapFromJson
  };

}).call(this);