class Temperatura {
    #celsius = 0;

    get celsius() {
        return this.#celsius;
    }

    get farenheit() {
        return this.#celsius * 1.8 + 32;
    }

    get kelvin() {
        return this.#celsius + 273.15;
    }

    set farenheit(value) {
        this.#celsius = (value - 32) * 1.8;
    }

    set kelvin(value) {
        this.#celsius = value - 273.15;
    }
}