'use strict';
document.addEventListener('DOMContentLoaded', () => {

    let money = 30000,
        income = 'распил',
        addExpenses = 'Интернет, Мобильный, Бензин' ,
        deposit = true,
        mission = 500000,
        period = 12;

    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
    console.log(addExpenses.length);
    console.log(`Период равен ${period} месяцев`);
    addExpenses = addExpenses.toLowerCase().split(', ');
    console.log('массив addExpenses: ', addExpenses);
    let budgetDay = money / 30;
    console.log('budgetDay: ', budgetDay);
});