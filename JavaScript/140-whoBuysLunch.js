
const listName = ['Jim', 'Jones', 'Jana'];

function whoPaying(names) {
    const idx = Math.round(Math.random() * names.length)
    console.log(idx)
    console.log(names)
    return `${names[idx]}`
}

console.log(whoPaying(listName))