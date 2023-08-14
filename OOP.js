const soldier = {
    health: 300,
    armour: 100,
    sayHello: (name) => {
        console.log(`Hello, ${name}!`);
    }
}

// Создание экземпляра обьекта.
const roma = Object.create(soldier);