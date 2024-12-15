async function awaitCall() {
    const fakeApiCall = () => new Promise(resolve => {
        setTimeout(() => resolve("Données récupérées de l'API"), 2000);
    });

    const data = await fakeApiCall();
    console.log(data);
}

awaitCall();