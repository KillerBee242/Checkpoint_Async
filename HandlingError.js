async function awaitCall() {
    const fakeApiCall = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            const succes = Math.random() > 0.5;
            succes ? resolve("Données récupérées de l'API") : reject("Erreur lors de la récupération des données");
        }, 2000);
    });

    try {
        const data = await fakeApiCall();
        console.log(data);
    } catch (error) {
        console.error('Erreur :', error);
    }
}

awaitCall();