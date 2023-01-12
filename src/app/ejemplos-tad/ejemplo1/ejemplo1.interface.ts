export class Bateria {
    capacidad: number = 0;

    getCapacidad() {
        return this.capacidad;
    }
    setCapacidad(capacidad: number) {
        return this.capacidad = capacidad;
    }
    duracionBateria() {
        if (this.capacidad < 3000) {
            return 16;
        } else {
            return 24;
        }
    }
}

export class Telefono {

    marca: String = '';
        Bateria bateria;

    Telefono(capacidad: number) {
        this.bateria.setCapacidad(capacidad);
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca: string[]) {
        strcpy(this.marca, marca);
    }
    duracionBateria() {
        return this.bateria.duracionBateria();
    }
};