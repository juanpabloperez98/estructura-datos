export class Cuadrado {
    x: number = 0;
    area1: number = 0;


    constructor(x: number) {
        this.x = x;
    }
    area_cuadrado() {
        return this.area1 = this.x * this.x;
    }
}
export class Circulo {
    radio: number = 0;

    constructor(radio: number) {
        this.radio = radio;
    }
    area_circulo() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}
export class Rectangulo {
    ancho: number = 0;
    largo: number = 0;
    area3: number = 0;

    constructor(ancho: number, largo: number) {
        this.ancho = ancho;
        this.largo = largo;
    }
    area_rectangulo() {
        return this.area3 = this.ancho * this.largo;
    }
}
