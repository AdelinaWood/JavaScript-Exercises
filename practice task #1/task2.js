const fizzBuzz = (num) => {
    for (let i = 1; i < num;i++ )
      console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
   };