var app = new Vue ({

    el: '#app',

    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( response => {
            console.log(response);
        })
    }
})