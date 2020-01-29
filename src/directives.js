import Vue from 'vue';

const directives = [
    //маска для полей ввода телефона
    Vue.directive('phone', {
        bind(el) {
            el.oninput = function(e) {
                if (!e.isTrusted) {
                    return;
                }
                let x = this.value.replace(/\D/g, '').match(/([0-9])(\d{0,3})(\d{0,3})(\d{0,4})/);
                if(x !== null) this.value = !x[2] ? x[1] : x[1] + ( !x[3] ? x[2] : '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : ''));
                var event = document.createEvent("Event");
                event.initEvent("input", false, true);
                // args: string type, boolean bubbles, boolean cancelable
                el.dispatchEvent(event);
                //el.dispatchEvent(new Event('change'));
            }
        }
    })
];




export default directives;
