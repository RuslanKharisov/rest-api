import {makeAutoObservable} from 'mobx'

export default class MaterialStore {
    constructor() {
        this._materials = [];
        this._checkedMaterial = {}
        this._selectedMaterial = {}
        makeAutoObservable(this)
    }

    setMaterials(materials) {
        this._materials = materials
    }

    get materials() {
        return this._materials
    }

    setCheckedMaterial(id) {
        let materials = this._materials;
        const index = materials.map(material => material.id).indexOf(id);
        materials[index].checked = !materials[index].checked;

    }

    setSelectedMaterial(material) {
        this._selectedMaterial = material
    }

    get selectedMaterial() {
        return this._selectedMaterial
    }
}