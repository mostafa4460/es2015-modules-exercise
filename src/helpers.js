const choice = items => {
    const randIndx = Math.floor(Math.random() * items.length);
    return items[randIndx];
}

const remove = (items, item) => {
    const itemIndx = items.findIndex(i => i === item);
    if (itemIndx !== -1) return items.splice(itemIndx, 1)[0];
}

export {choice, remove};