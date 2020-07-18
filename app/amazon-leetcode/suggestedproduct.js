const suggestedProducts = (products, searchWord) => {
    let res = [];
    products = products.sort();
    for (let i = 0; i < searchWord.length; i++) { // for each letter in the search term
        products = products.filter(p => p[i] === searchWord[i]); // filter out the words that don't have the same letter
        res.push(products.slice(0, (products.length < 3) ? products.length : 3)); // and push the top 3 (or fewer if there are fewer) into the suggestions
    }
    return res;
};