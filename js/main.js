var app = new Vue ({

    el: '#app',

    data: {
        arrayEmail: []
    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( response => {    // response posso chiamarlo come voglio
                this.arrayEmail.push(response.data.response);
            })
        }
    }

})