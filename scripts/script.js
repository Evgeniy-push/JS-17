'use strict';
document.addEventListener('DOMContentLoaded', () => {

    class First {
        hello(){
            console.log('Привет я метод родителя!');
        }
    }

    class Second extends First {
        constructor(){
            super();
        }
        hello(){
            super.hello();
            console.log('А я наследуемый метод!');
        }
    }

    const consol = new Second();
    consol.hello();

});