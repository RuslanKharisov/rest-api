import {makeAutoObservable} from 'mobx'

export default class MaterialStore {
    constructor() {
        this._materials = [
            {id: 101, name: 'Клееный брус'},
            {id: 102, name: 'Оцилиндрованное бревно'},
            {id: 103, name: 'Бревно ручной рубки'},
        ];
        this._checkedMaterial = {}
        makeAutoObservable(this)
    }

    setMaterials(materials) {
        this._materials = materials
    }

    setCheckedMaterial(materials) {
        this._checkedMaterial = materials
        console.log(materials.name)
    }

    get materials() {
        return this._materials
    }

    get checkedMaterial() {
        return this._checkedMaterial
    }

}