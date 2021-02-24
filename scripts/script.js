'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');

    const DomElement = function(selector, height, width, bg, fz){
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fz;
    };

    DomElement.prototype.renderSelector  = function(){
        if(this.selector[0] === '.'){
            const divD = document.createElement('div');
            body.prepend(divD);
            divD.classList.add(this.selector.slice(1));
            divD.textContent = 'Привет мир!)';
            divD.style.cssText=`  height: ${this.height};
                            width: ${this.width};
                            background-color: ${this.bg};
                            font-size: ${this.fontSize};
                            `;
        }else if(this.selector[0] === '#'){
            console.log('this.selector[0]: ', this.selector[0]);
            const paragraf = document.createElement('p');
            body.prepend(paragraf);
            paragraf.id = `${this.selector.slice(1)}`;
            console.log('this.selector.slice(1): ', this.selector.slice(1));
            paragraf.textContent = 'Привет мир!)';
            paragraf.style.cssText=`  height: ${this.height};
                            width: ${this.width};
                            background-color: ${this.bg};
                            font-size: ${this.fontSize};
                            `;
        }
    };
    const data = new DomElement('.block', '100px', '300px', 'red', '30px');
    data.renderSelector();
    console.log('data: ', data);

});