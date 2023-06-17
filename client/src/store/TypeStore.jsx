import {makeAutoObservable} from 'mobx'

export default class TypeStore {
    constructor() {
        this._types = [];
        this._selectedType = {}
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types 
    }

    get types() {
        return this._types
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get selectedType() {
        return this._selectedType
    }

    setCheckedType(id) { 
        let types = this._types;
        const index = types.map(type => type.id).indexOf(id);
        types[index].checked = !types[index].checked;
    }
}



