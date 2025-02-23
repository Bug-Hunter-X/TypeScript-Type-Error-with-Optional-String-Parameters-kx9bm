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

console.log(greet('John')) // Works as expected
console.log(greet2(null)) // Works as expected

const greet3 = (person: string | undefined) => {
  if (person === undefined) {
    return 'Hello, stranger';
  } else {
    return `Hello, ${person}!`;
  }
};

console.log(greet3(undefined)) // Type 'string | undefined' is not assignable to type 'string'.