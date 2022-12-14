
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

    methods: {
        removeItem(listItem) {
            itemIndex = this.shoppingList.indexOf(listItem);
            if (itemIndex > -1) {
                this.shoppingList.splice(itemIndex, 1);
            }
        }

    },
}).mount('#app');

