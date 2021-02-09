'use strict';
document.addEventListener('DOMContentLoaded', () => {

    let isNamber = n => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    let money,
        start = () => {
            do{
                money = prompt('Ваш месячный доход?');
            }while(!isNamber(money));
        };

    start();

    let appData = {
        budget: money,
        income: {},
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        mission: 500000,
        period: 0,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,

        asking: () => {
            appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую' ,
             'Интернет, Мобильный ').toLowerCase().split(', ');
                appData.deposit = confirm('Есть ли у вас депозит в банке?');

                let amount = [3000 , 2000],
                expensesI = ['квартплата' , 'Бензин'],
                expenses = [];

            for (let i = 0; i < 2; i++){

                expenses[i] = prompt(`Введите обязательную статью расходов ${i+1} ?`, expensesI[i]);
                do{
                    appData.expenses[expenses[i]] = +prompt(`Во сколько это обойдется ${i+1}?`, amount[i]);
                }while(!isNamber(appData.expenses[expenses[i]]));
            }
        },

        getExpensesMonth: () => {
            for (let i in appData.expenses){
                appData.expensesMonth +=  appData.expenses[i];
            }
        },

        getBudget: () => {
            return appData.budget - appData.expensesMonth;
        },

        getTargetMonth: () => {
            return Math.ceil(appData.mission / appData.budgetMonth);
         },

        getStatusIncome: () => {
            if(appData.budgetDay >= 1200){
                console.log('У вас высокий уровень дохода');
            } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200){
                console.log('У вас средний уровень дохода');
            } else if (appData.budgetDay < 600 && appData.budgetDay > 0){
                console.log('К сожалению у вас уровень дохода ниже среднего');
            } else {
                console.log('Что то пошло не так');
            }
        },
    };

    appData.asking();
    appData.getExpensesMonth();

    console.log('appData.expenses: ', appData.expenses);
    
    appData.budgetMonth = appData.getBudget();

    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    
    appData.period = appData.getTargetMonth();

    if(appData.period > 0){
        console.log(`Цель будет достигнута через ${appData.period} месяцев(месяца)`);
    }else{
        console.log('Цель не будет достигнута');
    }
    
    appData.getStatusIncome();

});