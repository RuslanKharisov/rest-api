import './styles.css'
import React, { useContext } from 'react'
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'

const TypeBar = () => {
    const {type} = useContext(Context)


  return (
    <div>
        <div className="form-group__title">Тип строения</div>
        {type.types.map(CurentType =>
            <div className='custom-checkbox'
             key={CurentType.id}
             >
                <input
                    id={CurentType.id} 
                    type="checkbox" 
                    className='custom-checkbox__input' 
                    checked={CurentType.checked}
                    onChange={() => type.setCheckedType(CurentType.id)} 
                    name={CurentType.name} 
                    // value="yes" 
                />
                <label className='custom-checkbox__label' htmlFor={CurentType.id}>{CurentType.name}</label>
            </div>
        )}
    </div>
  )
}

export default observer (TypeBar) 

