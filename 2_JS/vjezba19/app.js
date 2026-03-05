const {createApp} = Vue;

createApp({
    data(){
        return{
            brojac:0
        }
    }, 
    methods:{
        povecaj(){
            this.brojac++;
        },
        smanji(){
            this.brojac--;
        },
        uvecaj3(){
            this.brojac*=3;            
        },
        uvecajH(){
            this.brojac*=45;
        }
    }
}).mount('#app');

//const styleObject = reactive({
//  color: 'red',
//  fontSize: '30px'
//})