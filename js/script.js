
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
            isDone = this.shoppingList[indexListItem].done;
            console.log(isDone);
            if (!isDone) {
                isDone = true;
            } else {
                isDone = false;
            }
            console.warn(isDone);
        }
    },
}).mount('#app');

