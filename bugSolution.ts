function greet(person: string): string {
  return `Hello, ${person}!`;
}

function greet2(person: string | null): string {
  if (person === null) {
    return 'Hello, stranger';
  } else {
    return `Hello, ${person}!`;
  }
}

const greet3 = (person: string | undefined): string => {
  if (person === undefined) {
    return 'Hello, stranger';
  } else {
    return `Hello, ${person}!`;
  }
};

const greet4 = (person: string | undefined): string => {
  if (person) {
    return `Hello, ${person}!`;
  } else {
    return 'Hello, stranger';
  }
};

console.log(greet('John'))
console.log(greet2(null))
console.log(greet3(undefined))
console.log(greet4(undefined))