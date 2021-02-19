'use strict';
document.addEventListener('DOMContentLoaded', () => {

    let     startB = document.getElementById('start'),
            plus = document.querySelectorAll('button'),
            incPlus = plus[0],
            expensPlus = plus[1],
            check = document.querySelector('#deposit-check'),
            incomes = document.querySelectorAll('.additional_income-item'),
            addExpItem = document.querySelector('.additional_expenses-item'),
            
            budgetM = document.getElementsByClassName('budget_month-value')[0],
            budgetD = document.getElementsByClassName('budget_day-value')[0],
            expensesM = document.getElementsByClassName('expenses_month-value')[0],
            additionalI = document.getElementsByClassName('additional_income-value')[0],
            additionalE = document.getElementsByClassName('additional_expenses-value')[0],
            incomeP = document.getElementsByClassName('income_period-value')[0],
            targetM = document.getElementsByClassName('target_month-value')[0],

            salary = document.querySelector('.salary-amount'),
            incomT = document.querySelector('input.income-title'),
            incomA = document.querySelector('input.income-amount'),
            expensesT = document.querySelector('input.expenses-title'),
            expensesA = document.querySelector('input.expenses-amount'),
            expensesItems = document.querySelectorAll('.expenses-items'),
            incomeItems = document.querySelectorAll('.income-items'),
            targetAmount = document.querySelector('.target-amount'),
            periodSelect = document.querySelector('.period-select'),
            periodAmount = document.querySelector('.period-amount');

    startB.disabled = true;

    let isNumber = n => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
        
    let appData = {
        budget: 0,
        income: {},
        incomeMonth: 0,
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        percentDeposit:0,
        moneyDeposit: 0,
        mission: 500000,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,

        start: () => {

            appData.budget = +salary.value;
            appData.getExpenses();
            appData.getIncome();
            appData.getExpensesMonth();
            appData.getAddExpenses();
            appData.getAddIncome();
            appData.budgetMonth = appData.getBudget();
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
            appData.showResult();
            console.log('appData: ', appData);
        },

        showResult: () => {
            budgetM.value = appData.budgetMonth;
            budgetD.value = appData.budgetDay;
            expensesM.value = appData.expensesMonth;
            additionalE.value = appData.addExpenses.join(', ');
            additionalI.value = appData.addIncome.join(', ');
            targetM.value = appData.getTargetMonth();
            incomeP.value = appData.calcSaveDeposit();
            periodSelect.addEventListener('change', () => incomeP.value = appData.calcSaveDeposit());
        },

        addExpensesBlock: () => {

            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensPlus.before(cloneExpensesItem);
            expensesItems = document.querySelectorAll('.expenses-items');

            if(expensesItems.length === 3 ){
                expensPlus.style.display = 'none';
            }
        },

        addIncomeBlock: () => {
            let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incPlus.before(cloneIncomeItem);
            incomeItems = document.querySelectorAll('.income-items');
            if(incomeItems.length === 3){
                incPlus.style.display = 'none';
            }
        },

        getExpenses: () => {
            expensesItems.forEach(item => {
                let itemExpenses = item.querySelector('.expenses-title').value,
                    cashExpenses = item.querySelector('.expenses-amount').value;
                if(itemExpenses !== '' && cashExpenses !== ''){
                    appData.expenses[itemExpenses] = +cashExpenses;
                }
            });
        },

        getIncome: () => {
            incomeItems.forEach(item => {
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' && cashIncome !== ''){
                    appData.income[itemIncome] = +cashIncome;
                }
            });
            console.log('appData.income: ', appData.income);

            for(let key in appData.income){
                appData.incomeMonth += +appData.income[key];
            }

        },

        getAddExpenses: () => {
            let addExpenses = addExpItem.value.split(',');
            addExpenses.forEach(item => {
                item = item.trim();
                if(item !== ''){
                    appData.addExpenses.push(item);
                }
            });
        },

        getAddIncome: () => {
            incomes.forEach(item => {
                let itemValue = item.value.trim();
                if(itemValue !== ''){
                    appData.addIncome.push(itemValue);
                }
            });
        },
        
        asking: () => {
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
         },

        getExpensesMonth: () => {
            for (let i in appData.expenses){
                appData.expensesMonth +=  appData.expenses[i];
            }
        },

        getBudget: () => {
            return appData.budget + appData.incomeMonth - appData.expensesMonth;
        },

        getTargetMonth: () => {
            return Math.ceil(targetAmount.value / appData.budgetMonth);
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
            return appData.budgetMonth * periodSelect.value;
        },
        addPeriodSelect: function(){
            periodAmount.innerText = periodSelect.value;
        },
    };
    
    salary.addEventListener('input', () => {
        if(salary.value !== '' && isNumber(salary.value)){
            startB.disabled = false;
        }else{
            startB.disabled = true;
        }
    });

    startB.addEventListener('click', appData.start);
    expensPlus.addEventListener('click', appData.addExpensesBlock);
    incPlus.addEventListener('click', appData.addIncomeBlock);
    periodSelect.addEventListener('input', appData.addPeriodSelect);
});