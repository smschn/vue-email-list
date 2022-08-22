var app = new Vue ({

    el: '#app',

    data: {
        arrayEmail: []
    },

    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( response => {
            console.log(response);
            this.arrayEmail.push(response.data.response);
            console.log(this.arrayEmail);
        })
    }

})