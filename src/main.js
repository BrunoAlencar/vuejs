(function () {
    var vue = new Vue({
        el: "#app",
        data: {
            message: "Hello dear world...",
            array: [
                'item 1',
                'item 2'
            ]
        },

        methods: {
            call: function () {
                this.message = prompt("Tell me a message!?");
            },
            addItem: function () {
                this.array.push(prompt('New item'))
            },
            editItem: function (item, index) {
                this.array.splice(index, 1, prompt('Edit item', item));
                console.log(this.array)
            },
            deleteItem: function (index) {
                this.array.splice(index, 1);
            }
        }
    })
})()


// array: [
//     'item 1',
//     'item 2'
// ]