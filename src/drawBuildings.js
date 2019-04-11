import { path } from 'ramda'
import buildings from '../data/buildings.json'

export default (svg, pathCreator) => {

    const university = ['yes']
    const hospital = ['hospital']
  
    const getBuildingColor = feature => {
        const type = path(['properties', 'building'], feature)
        if (university.includes(type)) {
            return 'blue'
        }
        if (hospital.includes(type)) {
            return 'red'
        }
        return 'black'
    }

    svg.selectAll('path.building')
        .data(buildings.features)
        .enter()
        .append('path')
            .attr('class', 'building')
            .attr('d', pathCreator)
            .attr('fill', 'none')
            .attr('stroke', getBuildingColor)
            .attr('stroke-width', 2)
            .attr('stroke-linecap', 'round')
}