function somarValores(v1, v2, callback){
    let result = v1 + v2;
    callback(result);
}

somarValores(10, 20, console.log);