//Задание 1
console.log('Задание 1')

let word = 'Арнольд';
let result = '';

for (let i = 0; i < word.length; i++) 
{
    let char = word[i].toLowerCase();
    if (char !== 'а' && char !== 'о')``
    {
        result += word[i];
    }
}

console.log(result);



//Задание 2
console.log('Задание 2')

let num = 20;

for (let i = 1; i <= num; i++)
{
    if (i % 3 === 0) 
    {
        console.log(i);
    }
}



//Задание 3
console.log('Задание 3')

let num1 = 5;
let nothing = '';

for (let i = 1; i <= num1; i++)
{
    nothing += i;
    console.log(nothing);
}



//Задание 4
console.log('Задание 4')

let num2 = 4;
let sum = 0;

for (let i = 1; i <= num2; i++)
{
    let fac = 1;
    for (let j = 1; j <= i; j++)
    {
        fac *= j;
    }
    sum += fac;
}

console.log(sum);



//Задание 5
console.log('Задание 5')

let word1 = 'потоп';
let rev = '';

for (let i = word1.length - 1; i >= 0; i--)
{
    rev += word1[i];
}

if (word1 == rev)
{
    console.log('YES');
}
else
{
    console.log('NO');
}