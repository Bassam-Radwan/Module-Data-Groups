function contains(prop) {
    const object = { a: 1, b: 2 };
    for (const include in object){
        if (object[prop]){
            return true
        }
        else {
            return false 
        }
    }
}
console.log(contains());

module.exports = contains;
