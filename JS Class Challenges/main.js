//  Challenge 1

class Alternator {
  constructor(items) {
    this.alternator = 0;
    this.items = items;
  }

  alternate(items) {
    this.array = items;
    const lengthOfArray = this.items.length;

    for (let i = 0; i < lengthOfArray; i++) {
      if (this.alternator === 0) {
        console.log(this.items.shift());
        this.alternator = 1;
      } else {
        console.log(this.items.pop());
        this.alternator = 0;
      }
    }
  }
}

const finishedAlternator = new Alternator([1, 2, 3, 4, 5]);
finishedAlternator.alternate();

// const finishedAlternator2 = new Alternator([10, 20, 30, 40, 50]);
// finishedAlternator2.alternate();

// Challenge 2

// function alternate(arrayOne) {
//   const lengthOfArray = arrayOne.length;
//   let alternator = 0;

//   for (i = 0; i <= lengthOfArray; i++) {
//     if (alternator === 0) {
//       console.log(arrayOne.shift());
//       alternator = 1;
//     } else {
//       console.log(arrayOne.pop());
//       alternator = 0;
//     }
//   }
// }

// alternate([1, 2, 3, 4, 5]);
