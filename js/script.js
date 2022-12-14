
const { createApp } = Vue;

createApp({
    data() {
        return {
            newListItem : {
                text : '',
                done : false
            },

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
        },

        addNewItem(content) {
            this.shoppingList.push(content);
            this.clearInput();
        },

        clearInput() {
            this.newListItem = {
                text : '',
                done : false
            }
        },
        
        doneOrNot(indexListItem) {
            if (!this.shoppingList[indexListItem].done) {
                this.shoppingList[indexListItem].done = true;
            } else {
                this.shoppingList[indexListItem].done = false;
            }
        }
    },
}).mount('#app');

