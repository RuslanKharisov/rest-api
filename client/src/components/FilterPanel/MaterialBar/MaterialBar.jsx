import './styles.css'
import React, { useContext } from 'react'
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'

const MaterialBar = () => {
    const {material} = useContext(Context)

  return (
    <div>
        <div className="form-group__title">Материал стен</div>
        {material.materials.map(curentMaterial =>
            <div className='custom-checkbox'
            key={curentMaterial.id}>
                <input
                    id={curentMaterial.id}
                    type="checkbox"
                    className='custom-checkbox__input'
                    checked={curentMaterial.checked}
                    onChange={() => material.setCheckedMaterial(curentMaterial.id)}
                    name={curentMaterial.name}
                    // value="yes" 
                    />
                <label className='custom-checkbox__label'
                    htmlFor={curentMaterial.id}>{curentMaterial.name}
                </label>
            </div>
        )}
    </div>
  )
}

export default observer (MaterialBar)


