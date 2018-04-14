var vue = new Vue({
    el: "#app",
    data: {
        message: "Hello dear world..."
    },
    methods: {
        call: function (){
            this.message = prompt("Tell me a message!?");
        }
    }
})