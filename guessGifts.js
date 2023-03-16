const wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"}
    
];

const presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

guessGifts = () => {
    let guessList = []
    for (i = 0; i < wishlist.length; i++) {
        for (j = 0; j < presents.length; j++) {
            if (presents[j].size === wishlist[i].size && presents[j].clatters === wishlist[i].clatters && presents[j].weight === wishlist[i].weight) {
                console.log(wishlist[i])
                guessList.push(wishlist[i].name)
            }
        }
    }
    return guessList
}

console.log(guessGifts())