import {makeAutoObservable} from 'mobx'

export default class TypeStore {
    constructor() {
        this._types = [
            {
                id: 1,
                name: 'Баня',
                checked: false
            },
            {
                id: 2,
                name: 'Дом',
                checked: false
                },
            {
                id: 3,
                name: 'Хозблок',
                checked: false
                },
            {
                id: 4,
                name: 'Мебель',
                checked: false
                }
        ];
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types 
    }


    get types() {
        return this._types
    }


    setCheckedType(id) { 
        let types = this._types;
        const index = types.map(type => type.id).indexOf(id);
        types[index].checked = !types[index].checked;
        // this.setTypes(types)
    }
}



