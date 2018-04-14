var vue = new Vue({
    el: "#app",
    data: {
        message: "Hello dear world...",
        array: [
            'item 1',
            'item 2'
        ]
    },
    computed: {
        array: function (array) {
            return array
        }
    },
    methods: {
        call: function () {
            this.message = prompt("Tell me a message!?");
        },
        addItem: function () {
            this.array.push(prompt('New item'))
        },
        editItem: function (item, index) {
            this.array[index] = prompt('Edit item', item)
            console.log(this.array)
        }
    }
})

// array: [
//     'item 1',
//     'item 2'
// ]