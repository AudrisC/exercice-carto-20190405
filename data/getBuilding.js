const R = require('ramda')
const polygons = require('./polygons.json')
const write = require('./writeCollection')

const features = R.prop('features', polygons)

write(
    'buildings',
    features.filter(R.pathEq(['geometry', 'type'], 'Polygon'))
)
.catch(console.log)