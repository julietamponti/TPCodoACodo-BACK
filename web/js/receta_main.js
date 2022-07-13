if (document.getElementById("app")) {
    const app = new Vue({
        el: "#app",
        data: {
            recetas: [],
            errored: false,
            loading: true
        },
        created() {
            var url = 'http://127.0.0.1:5000/recetas'
            this.fetchData(url)
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.receta = data;
                        this.loading = false;
                        console.log(this.receta);
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            // eliminar(id) {
            //     const url = 'http://127.0.0.1:5000/recetas/' + id;
               
            //     var options = {
            //         method: 'DELETE',
            //     }
            //     fetch(url, options)
            //         .then(res => res.text()) // or res.json()
            //         .then(res => {
            //             location.reload();
            //         })
            // }
        }
    })
}
