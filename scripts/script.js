'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const   startB = document.getElementById('start'),
            plus = document.querySelectorAll('button'),
            incPlus = plus[0],
            extensPlus = plus[1],
            check = document.querySelector('#deposit-check'),
            income = document.querySelectorAll('.additional_income-item'),
            
            budgetM = document.getElementsByClassName('budget_month-value')[0],
            budgetD = document.getElementsByClassName('budget_day-value')[0],
            expensesM = document.getElementsByClassName('expenses_month-value')[0],
            additionalI = document.getElementsByClassName('additional_income-value')[0],
            additionalE = document.getElementsByClassName('additional_expenses-value')[0],
            incomeP = document.getElementsByClassName('income_period-value')[0],
            targetM = document.getElementsByClassName('target_month-value')[0],
            
            incomT = document.querySelector('input.income-title'),
            incomA = document.querySelector('input.income-amount'),
            expensesT = document.querySelector('input.expenses-title'),
            expensesA = document.querySelector('input.expenses-amount'),
            targetAmount = document.querySelector('.target-amount'),
            periodSelect = document.querySelector('.period-select'),
            periodAmount = document.querySelector('.period-amount');

            console.log('startB: ', startB);
            console.log('plus: ', plus);
            console.log('incPlus: ', incPlus);
            console.log('extensPlus: ', extensPlus);
            console.log('check: ', check);
            console.log('income: ', income);

            console.log('budgetM: ', budgetM);
            console.log('budgetD: ', budgetD);
            console.log('expensesM: ', expensesM);
            console.log('additionalI: ', additionalI);
            console.log('additionalE: ', additionalE);
            console.log('incomeP: ', incomeP);
            console.log('targetM: ', targetM);

            console.log('incomT: ', incomT);
            console.log('incomA: ', incomA);
            console.log('expensesT: ', expensesT);
            console.log('expensesA: ', expensesA);
            console.log('targetAmount: ', targetAmount);
            console.log('periodSelect: ', periodSelect);
            console.log('periodAmount: ', periodAmount);
 
});