function solve(arr) {
    let command = arr.shift();
    let users = {};

    while (command != 'Statistics') {
        const [action, username, email] = command.split('->');

        switch (action) {
            case 'Add':
                if (!users.hasOwnProperty(username)) {
                    users[username] = [];
                } else {
                    console.log(`${username} is already registered`);
                }
                break;

            case 'Send':
                users[username].push(email);
                break;

            case 'Delete':
                if (users.hasOwnProperty(username)) {
                    delete users[username];
                } else {
                    console.log(`${username} not found!`);
                }
                break;
        }
        command = arr.shift();
    }

    let entries = Object.entries(users);
    console.log(`Users count: ${entries.length}`);

    entries.sort(
        (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])
    );
    entries.forEach((kvp) => {
        console.log(kvp[0]);
        kvp[1].forEach((email) => console.log(`- ${email}`));
    });
}
