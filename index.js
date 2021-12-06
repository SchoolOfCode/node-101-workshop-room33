let myCollection = [
  {
    name: "School of Code mug",
    count: 1,
    whatILike: "It has my cute pixel character on it!",
  },
  {
    name: "School of Code hat",
    count: 2,
    whatILike: "An often overlooked fashion accessory",
  },
  {
    name: "School of Code pillow",
    count: 1,
    whatILike: "Eat. Sleep. Code. Repeat :)",
  },
];

console.log(myCollection);
// If there's only one of the item in your collection, it should log "I have a name. Here's what I like about it: whatILike". If you have more than one of it, the message should log "I have count names. Here's what I like about them: whatILike".

function describeItem(myCollection){
  for (let i = 0; i < myCollection.length; i++){
      if(myCollection[i].count > 1){
        console.log(`I have ${myCollection[i].count, myCollection[i].name}s. Here's what I like about it: ${myCollection[i].whatILike}!`);
    } else {
      console.log(`I have a ${myCollection[i].name}. Here's what I like about it: ${myCollection[i].whatILike}!`);
    }

  }
        
 
}

describeItem(myCollection);
