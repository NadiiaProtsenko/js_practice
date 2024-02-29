import readline from 'readline';

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
 });

rl.question('Введіть ваш базовий дохід: ', (gross) => {
    gross = parseFloat(gross);
    let tax;

if (isNaN(gross)) {
    console.log("Будь ласка, введіть числове значення для базового доходу.");
} else {
    if (gross < 10000) {
        tax = 5 / 100 * gross;
    }
    else if (gross >= 10000 && gross <= 50000) {
        tax = 10 / 100 * gross;
    }
    else if (gross > 50000 && gross <= 100000) {
        tax = 15 / 100 * gross;
    }
    else if (gross > 100000 && gross <= 200000) {
        tax = 20 / 100 * gross;
    }
    else {
        tax = 25 / 100 * gross;
    }

    let net = (gross - tax);

    console.log(`Базовий дохід: ${gross}, відсоток податку: ${tax}, дохід після вирахування податків: ${net}.`);
}

rl.close();
});