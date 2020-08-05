interface Margem {
    top: number;
    bottom: number;
}

class Componente implements Margem {
    top = 50;
    bottom = 15;
    color: string = 'blue';
}