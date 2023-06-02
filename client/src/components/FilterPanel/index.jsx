import React from 'react'
import TypeBar from './TypeBar/TypeBar'


const FilterPanel = () => {

    return (
        <div className='projects__filters-wrapper'>
            <div className="projects__filter">
                <div className="form-group">
                    <div className="form-group__title">Тип строения</div>
                    <TypeBar/>
                </div>
            </div>
        </div>
    )
}

export default FilterPanel