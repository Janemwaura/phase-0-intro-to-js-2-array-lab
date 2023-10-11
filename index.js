

  const cats = ["Milo", "Otis", "Garfield"];
const destructivelyAppendCat = cats.push("Ralph");

 console.log(cats);

  cats.length = 0;
  cats.push('Milo', 'Otis', 'Garfield');
  console.log(cats);

  const destructivelyPrependCat = cats.unshift("Ralph");
  console.log(cats);

  cats.length = 0;
  cats.push('Milo', 'Otis', 'Garfield');
  console.log(cats);

  cats.pop();
  console.log(cats);

  cats.length = 0;
  cats.push('Milo', 'Otis', 'Garfield');


  cats.shift();
  console.log(cats);


 

 

 