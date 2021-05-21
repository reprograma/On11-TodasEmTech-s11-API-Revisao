const inputData = (obj, required) => {

    if (typeof obj !== "object") return null;

    if (obj.id) delete obj.id;

    let validos = {}
    Object.keys(obj).forEach(key => {
        let props = obj[key];
        if (props != "" && props) validos[key] = props;
    })

    if (Object.keys(validos).length == 0) return undefined
    else if (required && validos === obj) return validos;
    else return validos
}

 const integrityJson = (data, json) => {
    if (!json) return undefined;
    const jsonValido = data.slice().find(e => e)
    delete jsonValido.id;

    const filter = {};

    Object.keys(jsonValido).forEach(key => {
        if (json[key]) filter[key] = json[key];
    })

    if (Object.keys(filter).length == 0) return undefined;
    return filter;
}

module.exports = {
    inputData,
    integrityJson
}