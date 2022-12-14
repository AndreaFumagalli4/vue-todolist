
const { createApp } = Vue;

createApp({
    data() {
        return {
            shoppingList : [
                {
                    text : 'riso',
                    done : false
                },
                {
                    text : 'pasta',
                    done : false
                },
                {
                    text : 'pane',
                    done : true
                },
                {
                    text : 'cereali',
                    done : false
                },
                {
                    text : 'carne',
                    done : true
                },
            ],
        }
    },

}).mount('#app');

