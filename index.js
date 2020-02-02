function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.generatePersons = function () {
    let people = [];

    people.push(new Person('John', 44)); //0

    people.push(new Person('Anna', 25)); //1
    people.push(new Person('Peter', 44)); //2

    people.push(new Person('Alice', 18)); //3
    people.push(new Person('Bob', 99));
    people.push(new Person('Natalie', 11));
    people.push(new Person('Jerry', 123));

    return people;
};

function main() {

    //modify array
    //- sort()

    //do NOT modify array
    //- filter (new array)

}

function sort() {
    let people = Person.generatePersons();
    people.sort((person1, person2) => {
        if (person1.age > person2.age) {
            return 1;
        }

        if (person1.age < person2.age) {
            return -1;
        }

        return 0;
    });

    console.log(people);

    // let names = ['f', 'e', 'd', 'c', 'b', 'a'];
    // names.sort();
    // console.log(names);
}

function splice() {

    //Modifies the original array
    let people = Person.generatePersons();

    let firstUnderageIndex = people.findIndex((person) => {
        return person.age < 18;
    });

    console.log(firstUnderageIndex);

    //splice(откуда начинаем "резать", сколько элементов удалить)
    if (firstUnderageIndex >= 0) {
        people.splice(firstUnderageIndex, 1);
    }

    console.log(people);
}

function map() {
    //Does NOT modify the original array
    let names = ['Shir', 'Alice', 'Simon'];

    let people = names.map((name) => {
        return new Person(name);
    });

    console.log(names);
    console.log(people);
}

function keys() {
    //keys - array of indexes
    let people = Person.generatePersons();

    for (let a of people.keys()) {
        console.log(a);
    }
}

function join() {
    let words = ['this', 'is', 'an', 'apple'];

    let result = words.join(" ");
    console.log(words);  //original array
    console.log(result); //single string
}

function equals2vs3() {
    //     ==   - check value
    //     ===  - check datatype + check value

    let a = '100';
    let b = 100;

    //string + int = string
    //string - int = int
    console.log(a === b); //11 | 0
}


function find() {
    let people = Person.generatePersons();
    let personOf44 = people.find((person) => {
        return person.age === 44;
    });

    console.log(personOf44);

    let personOf122 = people.find((person) => {
        return person.age === 122;
    });
    console.log(personOf122);
}


function filter() {
    let people = Person.generatePersons();
    //new array
    let result = people.filter((person) => {
        return person.age >= 18;
    });

    // people.filter(function (person) {
    //     return person.age >= 18;
    // });

    console.log(people);
    console.log(result);
}

function fill() {

    //This method modifies the original array!
    let people = Person.generatePersons();

    let noNamePerson = new Person('no-name', -1);
    people.fill(noNamePerson, people.length - 1);

    console.log(people);
}

function every() {

    let people = Person.generatePersons();
    let result = people.every((person) => {
        //проверяем, что КАЖДЫЙ элемент возвращает true
        return person.age >= 18;
    });

    console.log('All fully aged: ' + result);
}

function entries() {
    let people = Person.generatePersons();

    for (let entry of people.entries()) {
        console.log(entry); //[  index, person  ]

        let index = entry[0];
        let person = entry[1];

    }
    console.log('------------');
    for (let p of people) {
        console.log(p);
    }
}


function concat() {
    //concat

    let arr1 = [new Person('a'), new Person('b'), new Person('c')];
    let arr2 = [new Person('1'), new Person('2'), new Person('3')];

    let result = arr1.concat(arr2);

    console.log(result);
}


main();