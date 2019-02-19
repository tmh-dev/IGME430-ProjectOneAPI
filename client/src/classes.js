class Person {
    constructor(personData) {
        this._name = personData.name;
        this._description = personData.description;
        this._imageUrl = personData.imageUrl;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get imageUrl() {
        return this._imageUrl;
    }
}

export default Person;