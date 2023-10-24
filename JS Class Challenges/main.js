// const arrayTwo = [1, 2, 3, 4, 5];
// class Manage {
//   constructor(items) {
//     this.items = [];
//   }

// }

//  Challenge 1

// class Alternator {
//   constructor() {
//     this.array = [];
//     this.alternator = 0;
//   }

//   alternate(items) {
//     this.array = items;
//     const lengthOfArray = this.array.length;

//     for (let i = 0; i < lengthOfArray; i++) {
//       if (this.alternator === 0) {
//         console.log(this.array.shift());
//         this.alternator = 1;
//       } else {
//         console.log(this.array.pop());
//         this.alternator = 0;
//       }
//     }
//   }
// }

// const alternator = new Alternator([1, 2, 3, 4, 5]);
// alternator.alternate([1, 2, 3, 4, 5]);

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
