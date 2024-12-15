async function parallelCalls(urls) {
    const fetchData = url => new Promise(resolve => setTimeout(() => resolve(`Données de ${url}`), 1000));

    const promises = urls.map(url => fetchData(url));
    const results = await Promise.all(promises);
    console.log('Résultats des appels parallèles :', results)
}

parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3']);