const firstName: string = 'Jack';

const position: number = 22;

const isDev: boolean = true;

// array
const cars: string[] = ['Ford', 'Alfa Romeo', 'BMW'];

// tupla
const address: [string, number, string] = ['Pine Street', 1544, 'Center'];

// enum
enum Colors {
    BLACK = '#000000',
    WHITE = '#FFFFFF',
    GRAY = '#888888'
}
const color: Colors = Colors.WHITE;

// Functions
// Type return
function getName(): string {
    return firstName;
}

function printName(): void {
    console.log('My name is', getName());
}

// Type params
function printStatus(name: string, position: number): string {
    return `Name: ${name}. Position: ${position}.`
}
printName();
console.log(printStatus(firstName, position));

// Type var = function
function sum(x: number, y: number): number {
    return x + y;
}
let calc: (x: number, y: number) => number;
calc = sum;
console.log(calc(1, 1));

// Type object
// Alias
type Book = {
    name: string,
    countPages: (pages: number) => number
};

let newBook: Book = {
    name: 'New Code',
    countPages(pages: number): number {
        return pages * 2;
    }
}

// Union types
let houseNumber: number | string = 10;

// Throw error with never function
function error(message: string): never {
    throw new Error(message);
}