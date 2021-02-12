'use strict';
document.addEventListener('DOMContentLoaded', () => {

    let isNumber = n => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    let money,
        start = () => {
            do{
                money = prompt('Ваш месячный доход?');
            }while(!isNumber(money));
        };

    start();

    let appData = {
        budget: money,
        income: {},
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        percentDeposit:0,
        moneyDeposit: 0,
        mission: 500000,
        period: 3,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,

        asking: () => {

            if (confirm('Есть ли у вас дополнительный источник заработка?')){
                let itemIncome,
                    cashIncome;
                do {itemIncome = prompt('Какой у вас дополнительный заработок', "Таксую");
                }while ((typeof itemIncome) === 'string' && isNumber(itemIncome));

                do {cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
                }while (!isNumber(cashIncome));

                appData.income[itemIncome]=cashIncome;
            }




            appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую' ,
             'интернет, мОбильный, гАраж ').toLowerCase().split(', ');
            
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

            let amount = [3000 , 2000],
            expensesI = ['квартплата' , 'бензин'],
            expenses = [];

            for (let i = 0; i < 2; i++){

                do {expenses[i] = prompt(`Введите обязательную статью расходов ${i+1} ?`, expensesI[i]).trim();
                }while (((typeof expenses[i]) === 'string' && isNumber(expenses[i])) || expenses[i] === '');
                
                do{appData.expenses[expenses[i]] = +prompt(`Во сколько это обойдется (${expenses[i]}) ${i+1}?`, amount[i]);
                }while(!isNumber(appData.expenses[expenses[i]]) || appData.expenses[expenses[i]] === 0);
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
        getInfoDeposit: () => {
            
            if(appData.deposit){

                do{appData.percentDeposit = +prompt('Какой годовой процент?', 10);
                }while(!isNumber(appData.percentDeposit) || appData.percentDeposit === 0);

                do{appData.moneyDeposit = +prompt('Какая сумма заложена?', 200000);
                }while(!isNumber(appData.moneyDeposit) || appData.moneyDeposit === 0);
            }
        },
        calcSaveDeposit: () => {
            return appData.budgetMonth * appData.period;
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

    console.log("Наша программа включает в себя данные: ");

    for (let app in appData){
        console.log(`${app} : `, `${appData[app]}`);
    }
    
    appData.getStatusIncome();

    appData.getInfoDeposit();
    console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSaveDeposit());

    console.log('appData.addExpenses.reduce1 :', appData.addExpenses.reduce((accum, elemArr, i) => {
        if(i === appData.addExpenses.length - 1) {
            return accum += elemArr[0].toUpperCase() + elemArr.slice(1).toLowerCase();
        }
            return accum += elemArr[0].toUpperCase() + elemArr.slice(1).toLowerCase() + ', ';
    }, ''));

});