function solve(arr) {
    const count = Number(arr.shift());
    const regex = /U\$(?<username>[A-Z][a-z]{2,})U\$P@\$(?<password>[A-Za-z]{5,}\d+)P@\$/g;
    let total = 0;
    for (let i = 0; i < count; i++) {
        let command = arr.shift();
        let match = regex.exec(command);

        if (match) {
            const user = match.groups.username;
            const pass = match.groups.password;
            console.log('Registration was successful');
            console.log(`Username: ${user}, Password: ${pass}`);
            total++;
        } else {
            console.log('Invalid username or password');
        }
        match = regex.exec(command);
    }
    console.log(`Successful registrations: ${total}`);
}

solve(['2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412']);
