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
            periodAmount = document.querySelector('.period-amount'),
            cancelB = document.getElementById('cancel'),
            divData = document.querySelector('.data'),
            inputs = divData.querySelectorAll('input'),
            inputsAll = document.querySelectorAll('input');

    startB.disabled = true;

    let isNumber = n => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
        
    class AppData  {
        constructor(){
            this.budget = 0;
            this.income =  {};
            this.incomeMonth =  0;
            this.addIncome = [];
            this.expenses =  {};
            this.addExpenses =  [];
            this.deposit =  false;
            this.percentDeposit = 0;
            this.moneyDeposit =  0;
            this.mission =  0;
            this.budgetDay =  0;
            this.budgetMonth =  0;
            this.expensesMonth =  0;
        }

        start() {
            this.budget = +salary.value;
            inputs = document.querySelectorAll('input');
            inputs.forEach(item => {
                if(item.type === 'text'){
                item.setAttribute('disabled', 'disabled');
                }
            });

            this.getExpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getAddExpenses();
            this.getAddIncome();
            this.budgetMonth = this.getBudget();
            this.budgetDay = Math.floor(this.budgetMonth / 30);
            this.showResult();

            startB.style.display = 'none';
            cancelB.style.display = 'block';
        }

        showResult() {
            budgetM.value = this.budgetMonth;
            budgetD.value = this.budgetDay;
            expensesM.value = this.expensesMonth;
            additionalE.value = this.addExpenses.join(', ');
            additionalI.value = this.addIncome.join(', ');
            targetM.value = this.getTargetMonth();
            incomeP.value = this.calcSaveDeposit();
            periodSelect.addEventListener('input', () => incomeP.value = this.calcSaveDeposit());
        }

        addExpensesBlock() {
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensPlus.before(cloneExpensesItem);
            expensesItems = document.querySelectorAll('.expenses-items');
            if(expensesItems.length === 3 ){
                expensPlus.style.display = 'none';
            }
        }

        addIncomeBlock () {
            let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incPlus.before(cloneIncomeItem);
            incomeItems = document.querySelectorAll('.income-items');
            if(incomeItems.length === 3){
                incPlus.style.display = 'none';
            }
        }

        getExpenses()  {
            expensesItems.forEach(item => {
                let itemExpenses = item.querySelector('.expenses-title').value,
                    cashExpenses = item.querySelector('.expenses-amount').value;
                if(itemExpenses !== '' && cashExpenses !== ''){
                    this.expenses[itemExpenses] = +cashExpenses;
                }
            });
        }

        getIncome ()  {
            incomeItems.forEach(item => {
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' && cashIncome !== ''){
                    this.income[itemIncome] = +cashIncome;
                }
            });

            for(let key in this.income){
                this.incomeMonth += +this.income[key];
            }
        }

        getAddExpenses()  {
            let addExpenses = addExpItem.value.split(',');
            addExpenses.forEach(item => {
                item = item.trim();
                if(item !== ''){
                    this.addExpenses.push(item);
                }
            });
        }

        getAddIncome () {
            incomes.forEach(item => {
                let itemValue = item.value.trim();
                if(itemValue !== ''){
                    this.addIncome.push(itemValue);
                }
            });
        }

        asking()  {
           this.deposit = confirm('Есть ли у вас депозит в банке?');
        }

        getExpensesMonth ()  {
            for (let i in this.expenses){
                this.expensesMonth +=  this.expenses[i];
            }
        }

        getBudget () {
            return this.budget + this.incomeMonth - this.expensesMonth;
        }

        getTargetMonth() {
            this.mission = targetAmount.value;
                return Math.ceil(this.mission / this.budgetMonth);
        }

        getStatusIncome() {
            if(this.budgetDay >= 1200){
                console.log('У вас высокий уровень дохода');
            } else if (this.budgetDay >= 600 && this.budgetDay < 1200){
                console.log('У вас средний уровень дохода');
            } else if (this.budgetDay < 600 && this.budgetDay > 0){
                console.log('К сожалению у вас уровень дохода ниже среднего');
            } else {
                console.log('Что то пошло не так');
            }
        }

        getInfoDeposit()  {
            if(this.deposit){
                do{this.percentDeposit = +prompt('Какой годовой процент?', 10);
                }while(!isNumber(this.percentDeposit) || this.percentDeposit === 0);
                do{this.moneyDeposit = +prompt('Какая сумма заложена?', 200000);
                }while(!isNumber(this.moneyDeposit) || this.moneyDeposit === 0);
            }
        }

        calcSaveDeposit()  {
            return this.budgetMonth * periodSelect.value;
        }

        addPeriodSelect (){
            periodAmount.innerText = periodSelect.value;
        }

        reset() {
            this.budget = 0;
            this.income = {};
            this.incomeMonth = 0;
            this.addIncome = [];
            this.expenses = {};
            this.addExpenses = [];
            this.deposit =  false;
            this.percentDeposit = 0;
            this.moneyDeposit =  0;
            this.mission = 0;
            this.budgetDay = 0;
            this.budgetMonth = 0;
            this.expensesMonth = 0;

            startB.disabled = true;
            check.checked = false;
            incomeItems = document.querySelectorAll('.income-items');
            for(let i = 1; i < incomeItems.length; i++){
                incomeItems[i].parentNode.removeChild(incomeItems[i]);
            }
            expensesItems = document.querySelectorAll('.expenses-items');
            for(let i = 1; i < expensesItems.length; i++){
                expensesItems[i].parentNode.removeChild(expensesItems[i]);
            }
            incPlus.style.display = 'block';
            expensPlus.style.display = 'block';

            periodSelect.removeEventListener('change', () => {
                incomeP.value = this.calcSaveMoney();
            });
            inputsAll = document.querySelectorAll('input');
            inputsAll.forEach(item => {
                if(item.type === 'text'){
                    item.value = '';
                } else if(item.type === 'range'){
                    item.value = 1;
                    periodAmount.innerText = periodSelect.value;
                }
            });

            inputs = document.querySelectorAll('input');
            inputs.forEach(item => {
                if(item.type === 'text'){
                item.removeAttribute("disabled");
                }
            });

            startB.style.display = 'block';
            cancelB.style.display = 'none';
        }

        eventsListeners() {
            salary.addEventListener('input', () => {
                if(salary.value !== '' && isNumber(salary.value)){
                    startB.disabled = false;
                }else{
                    startB.disabled = true;
                }
            });

            startB.addEventListener('click', this.start.bind(this));
            expensPlus.addEventListener('click', this.addExpensesBlock);
            incPlus.addEventListener('click', this.addIncomeBlock);
            periodSelect.addEventListener('input', this.addPeriodSelect);
            cancelB.addEventListener('click', this.reset.bind(this));
        }
    }

    const appData = new AppData();

    appData.eventsListeners();

});