function somarValores(v1, v2) {
    if(typeof v1 !== 'number' 
        || typeof v2 !== 'number') {
        throw new TypeError('Os valores devem ser números');
    }
    return v1 + v2;
}

try {
    console.log(somarValores(10, 20));
    console.log(somarValores('10', 20));
} catch (error) {
    console.error(error.message);
    console.error(error.name);
    console.error(error.stack);
}

