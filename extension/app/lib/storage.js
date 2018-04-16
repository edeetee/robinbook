const store = browser.storage.local;

let getOne = async (name) => {
    return (await store.get(mkObj(name, null)))[name];
}
let setOne = async (name, value) => {
    await store.set(mkObj(name,value));
    return value
}
function mkObj(name, value){
    let obj = {};
    obj[name] = value
    return obj;
}

export {getOne, setOne}