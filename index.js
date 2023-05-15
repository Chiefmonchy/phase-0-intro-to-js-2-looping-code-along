// Code your solutions in this file
const thankPeople = [];

function writeCards(people, event) {
    for (let i = 0; i < people.length; i++) {

        thankPeople.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    }

    return thankPeople;
}

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
