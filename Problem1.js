function solve(arr) {
    let email = arr.shift();
    let command = arr.shift();

    while (command != 'Complete') {
        const [action, argument] = command.split(' ');

        switch (action) {
            case 'Make':
                const lettersCase = argument;

                if (lettersCase == 'Upper') {
                    email = email.toUpperCase();
                } else {
                    email = email.toLowerCase();
                }
                console.log(email);
                break;

            case 'GetDomain':
                const count = Number(argument);
                console.log(
                    email.substring(email.length - count, email.length)
                );
                break;

            case 'GetUsername':
                const atIndex = email.indexOf('@');

                if (atIndex > -1) {
                    const emailSubstring = email.substring(0, atIndex);
                    console.log(emailSubstring);
                } else {
                    console.log(
                        `The email ${email} doesn't contain the @ symbol.`
                    );
                }
                break;

            case 'Replace':
                const char = argument;
                let charIndex = email.indexOf(char);

                while (charIndex > -1) {
                    email = email.replace(char, '-');
                    charIndex = email.indexOf(char, charIndex + 1);
                }
                console.log(email);
                break;

            case 'Encrypt':
                let chars = email.split('').map((char) => char.charCodeAt());
                console.log(chars.join(' '));
                break;
        }

        command = arr.shift();
    }
}
