'use strict';
document.addEventListener('DOMContentLoaded', () => {

    let isNamber = n => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    let money ,                 //“Доход за месяц”
        income = 'распил',      // дополнительныq доход
        addExpenses,            //дополнительныt расходы через запятую
        deposit ,               //Есть ли у вас депозит в банке?
        mission = 500000,       //Какую сумму хотите накопить
        expensesI = ['квартплата' , 'Бензин'],
        expenses = [],          //Введите обязательную статью расходов?
        amount = [3000 , 2000],
        amount1 = [],
        budgetDay,              //дневной бюджет
        accumulatedMonth,
        expensesAmount,
        start,
        getTargetM;       //Накопления за месяц (Доходы минус расходы)

    start = () => {

        do{
            money = prompt('Ваш месячный доход?');
        }while(!isNamber(money));
    };

    start();
    
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую' , 'Интернет, Мобильный ');
    deposit = confirm('Есть ли у вас депозит в банке?');
    addExpenses = addExpenses.toLowerCase().split(', ');

    const showTypeOf = data => {
        console.log( data , typeof data);
    };
    
    const getExpensesMonth = () => {
        let sum = 0;

        for (let i = 0; i < 2; i++){

            expenses[i] = prompt(`Введите обязательную статью расходов ${i+1} ?`, expensesI[i]);
            do{
                amount1[i] = prompt(`Во сколько это обойдется ${i+1}?`, amount[i]);
            }while(!isNamber(amount1[i]));
            sum += +amount1[i];
        }
        return sum;
    };

    expensesAmount = getExpensesMonth();

    const getAccumulatedMonth = () => {
        return money - expensesAmount;
    };

    accumulatedMonth = getAccumulatedMonth();

    budgetDay = Math.floor(accumulatedMonth / 30);
    
    const getTargetMonth = () => {
       return Math.ceil(mission / accumulatedMonth);
    };

    getTargetM = getTargetMonth();

    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);
    console.log('expenses: ', expenses);
    console.log('expensesAmount: ', expensesAmount);
    console.log('addExpenses: ', addExpenses);
    if(getTargetM > 0){
        console.log(`Цель будет достигнута через ${getTargetM} месяцев(месяца)`);
    }else{
        console.log('Цель не будет достигнута');
    }
    console.log('budgetDay: ', budgetDay);

    const getStatusIncome = () => {
        if(budgetDay >= 1200){
            console.log('У вас высокий уровень дохода');
        } else if (budgetDay >= 600 && budgetDay < 1200){
            console.log('У вас средний уровень дохода');
        } else if (budgetDay < 600 && budgetDay > 0){
            console.log('К сожалению у вас уровень дохода ниже среднего');
        } else {
            console.log('Что то пошло не так');
        }
    };

    getStatusIncome();

});