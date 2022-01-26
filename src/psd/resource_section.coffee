_ = require 'lodash'

module.exports = class ResourceSection
  RESOURCES = [
    require('./resources/layer_comps.coffee')
    require('./resources/layer_links.coffee')
    require('./resources/resolution_info.coffee')
    require('./resources/global_light_angle.coffee')
    require('./resources/global_light_altitude.coffee')
    require('./resources/origin_path_info.coffee')
    require('./resources/path_selection.coffee')
    require('./resources/path.coffee')
  ]

  @factory: (resource) ->
    for Section in RESOURCES
      if Section::id is resource.id
        return _.tap new Section(resource), (s) -> s.parse()
      if resource.id in [2000...2998] and Section::id is 2000
        return _.tap new Section(resource), (s) -> s.parse()
      continue

    null