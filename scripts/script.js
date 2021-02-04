'use strict';
document.addEventListener('DOMContentLoaded', () => {

    let money ,                 //“Доход за месяц”
        income = 'распил',      // дополнительныq доход
        addExpenses,            //дополнительныt расходы через запятую
        deposit ,               //Есть ли у вас депозит в банке?
        mission = 500000,       //Какую сумму хотите накопить
        expenses1,              //Введите обязательную статью расходов?
        expenses2,              //Введите обязательную статью расходов?
        amount1,                //Во сколько это обойдется?
        amount2,                //Во сколько это обойдется?
        budgetDay,              //дневной бюджет
        accumulatedMonth;       //Накопления за месяц (Доходы минус расходы)

    money = +prompt('Ваш месячный доход?' , 30000);
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую' , 'Интернет, Мобильный ');
    deposit = confirm('Есть ли у вас депозит в банке?');
    expenses1 = prompt('Введите обязательную статью расходов 1 ?', 'квартплата');
    amount1 = +prompt('Во сколько это обойдется 1 ?', 3000);
    expenses2 = prompt('Введите обязательную статью расходов 2 ?', 'Бензин');
    amount2 = +prompt('Во сколько это обойдется 2 ?', 2000);

    addExpenses = addExpenses.toLowerCase().split(', ');

    const showTypeOf = data => {
        console.log( data , typeof data);
    };
    
    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);

    const getExpensesMonth = () => {
        return amount1 + amount2;
    };

    const getAccumulatedMonth = () => {
        return money - amount1 - amount2;
    };

    accumulatedMonth = getAccumulatedMonth();

    budgetDay = Math.floor(accumulatedMonth / 30);

    const getTargetMonth = () => {
       return Math.ceil(mission / accumulatedMonth);
    };

    console.log('getExpensesMonth: ', getExpensesMonth());
    console.log('addExpenses: ', addExpenses);
    console.log('getTargetMonth: ', getTargetMonth());
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