import React from 'react'
import TypeBar from './TypeBar/TypeBar'
import MaterialBar from './MaterialBar/MaterialBar'


const FilterPanel = () => {

    return (
        <div className='projects__filters-wrapper'>
            <div className="projects__filter">
                <div className="form-group">                    
                    <TypeBar/>                    
                </div>
                <div className="form-group">                   
                    <MaterialBar/>
                </div>
            </div>
        </div>
    )
}

export default FilterPanel