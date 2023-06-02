import React, { useContext } from 'react'
import { Context } from '../../../index'
import './styles.css'

const MaterialBar = () => {
    const {material} = useContext(Context)

  return (
    <div>
        {material.materials.map(curentMaterial =>
            <div key={curentMaterial.id}>
                <input className='custom-checkbox' type="checkbox" id={curentMaterial.id} name={curentMaterial.name} value="yes" />
                <label htmlFor={curentMaterial.id}>{curentMaterial.name}</label>
            </div>
        )}
    </div>
  )
}

export default MaterialBar


