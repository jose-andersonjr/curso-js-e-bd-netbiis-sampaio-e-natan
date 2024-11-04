const timeout = setTimeout(() => {
    console.log('Executando setTimeout');
}, 2000);

const interval = setInterval(() => {
    console.log('Executando setInterval');
}, 1000);

// clearTimeout(timeout);
// clearInterval(interval);

setTimeout(() => {
    clearInterval(interval);
}, 5000);