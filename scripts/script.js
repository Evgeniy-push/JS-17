'use strict';
document.addEventListener('DOMContentLoaded', () => {

    let money ,
        income = 'распил',
        addExpenses,
        deposit ,
        mission = 500000,
        period ,
        expenses1,
        expenses2,
        amount1,
        amount2,
        budgetMonth,
        budgetDay ;

    money = +prompt('Ваш месячный доход?' , 30000);
    console.log('money: ', money);

    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую' , 'Интернет, Мобильный ');
    console.log('addExpenses: ' , addExpenses);

    deposit = prompt('Есть ли у вас депозит в банке?' , true);
    console.log('deposit: ', deposit);

    expenses1 = prompt('Введите обязательную статью расходов 1 ?', 'квартплата');
    amount1 = +prompt('Во сколько это обойдется 1 ?', 3000);
    expenses2 = prompt('Введите обязательную статью расходов 2 ?', 'Бензин');
    amount2 = +prompt('Во сколько это обойдется 2 ?', 2000);

    budgetMonth = money - amount1 - amount2;
    console.log('budgetMonth: ', budgetMonth);

    budgetDay = Math.floor(budgetMonth / 30);

    period = Math.ceil(mission / budgetMonth);

    // console.log(typeof income);
    console.log(`Период равен ${period} месяцев`);
    addExpenses = addExpenses.toLowerCase().split(', ');
    console.log('массив addExpenses: ', addExpenses);
    console.log('budgetDay: ', budgetDay);

    if(budgetDay >= 1200){
        console.log('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay < 1200){
        console.log('У вас средний уровень дохода');
    } else if (budgetDay < 600 && budgetDay > 0){
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else {
        console.log('Что то пошло не так');
    }
});