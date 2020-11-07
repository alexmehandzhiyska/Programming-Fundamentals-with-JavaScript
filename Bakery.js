function solve(arg1, arg2, arg3) {
    const biscuitsPerWorker = Number(arg1);
    const workers = Number(arg2);
    const productionCompeting = Number(arg3);
    const days = 30;
    let totalProduction = 0;

    for (let day = 1; day <= days; day++) {
        let productionPerDay = biscuitsPerWorker * workers;

        if (day % 3 == 0) {
            productionPerDay = Math.floor(productionPerDay * 0.75);
        }

        totalProduction += productionPerDay;
    }

    console.log(
        `You have produced ${totalProduction} biscuits for the past month.`
    );

    let difference = 0;
    let percantage = 0;

    if (totalProduction > productionCompeting) {
        difference = totalProduction - productionCompeting;
        percentage = (difference / productionCompeting) * 100;
        console.log(
            `You produce ${percentage.toFixed(2)} percent more biscuits.`
        );
    } else {
        difference = productionCompeting - totalProduction;
        percantage = (difference / productionCompeting) * 100;
        console.log(
            `You produce ${percantage.toFixed(2)} percent less biscuits.`
        );
    }
}

solve(65, 12, 26000);
