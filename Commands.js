function solve(arr) {
    let series = arr.shift();
    let command = arr.shift();
    let startIndex = 0;
    let count = 0;
    let copy = [];

    while (command !== 'end') {
        const commandArr = command.split(' ');
        const action = commandArr[0];

        switch (action) {
            case 'reverse':
                startIndex = Number(commandArr[2]);
                count = Number(commandArr[4]);

                copy = series.slice(0, series.length);
                let reversed = copy.splice(startIndex, count).reverse();

                for (const i in reversed) {
                    let el = reversed[i];
                    series.splice(startIndex + Number(i), 1, el);
                }

                break;

            case 'sort':
                startIndex = Number(commandArr[2]);
                count = Number(commandArr[4]);

                copy = series.slice(0, series.length);
                let sorted = copy.splice(startIndex, count).sort();

                for (const j in sorted) {
                    let el1 = sorted[j];
                    series.splice(startIndex + Number(j), 1, el1);
                }
                break;

            case 'remove':
                count = Number(commandArr[1]);
                series.splice(0, count);
                break;
        }

        command = arr.shift();
    }

    console.log(series.join(', '));
}

solve([
    ['1', '2', '5', '8', '7', '3', '10', '6', '4', '9'],
    'reverse from 2 count 4',
    'sort from 3 count 1',
    'end',
]);
