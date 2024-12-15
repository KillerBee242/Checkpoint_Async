async function concurrentRequests() {
    const fakeApiCall1 = () => new Promise(resolve => setTimeout(() => resolve("Données de l'API 1"), 2000));
    const fakeApiCall2 = () => new Promise(resolve => setTimeout(() => resolve("Données de l'API 2"), 1500));

    const [data1, data2] = await Promise.all([fakeApiCall1(), fakeApiCall2()]);
    console.log('Données combinées :', data1, data2);
}

concurrentRequests();