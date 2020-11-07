function solve(arr) {
    let vehicles = arr.shift().split(', ');
    let commands = Number(arr.shift());
    let name = '';
    let index = 0;

    for (let i = 0; i < commands; i++) {
        const curCommand = arr[i];
        const action = curCommand.split(', ')[0];

        switch (action) {
            case 'Add':
                name = curCommand.split(', ')[1];
                if (vehicles.includes(name)) {
                    console.log(`Card is already bought`);
                } else {
                    console.log(`Card successfully bought`);
                    vehicles.push(name);
                }
                break;

            case 'Remove':
                name = curCommand.split(', ')[1];
                index = vehicles.indexOf(name);

                if (index > -1) {
                    console.log(`Card successfully sold`);
                    vehicles.splice(index, 1);
                } else {
                    console.log(`Card not found`);
                }
                break;

            case 'Remove At':
                index = Number(curCommand.split(', ')[1]);

                if (index >= 0 && index < vehicles.length) {
                    vehicles.splice(index, 1);
                    console.log(`Card successfully sold`);
                } else {
                    console.log(`Index out of range`);
                }
                break;

            case 'Insert':
                index = Number(curCommand.split(', ')[1]);
                name = curCommand.split(', ')[2];

                if (index >= 0 && index < vehicles.length) {
                    const indexOfCard = vehicles.indexOf(name);

                    if (indexOfCard > -1) {
                        console.log(`Card is already bought`);
                    } else {
                        console.log(`Card successfully bought`);
                        vehicles.splice(index, 0, name);
                    }
                } else {
                    console.log(`Index out of range`);
                }
        }
    }

    console.log(vehicles.join(', '));
}

solve([
    'T-34-85 Rudy, SU-100Y, STG',
    '3',
    'Add, King Tiger(C)',
    'Insert, 2, IS-2M',
    'Remove, T-34-85 Rudy',
]);
