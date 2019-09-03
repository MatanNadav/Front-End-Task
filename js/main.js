import homepage from './pages/homepage.js'

new Vue({
    el:'#app',
    template:`
    <section> 
        <homepage></homepage>
    </section>
    
    `,
    components: {
        homepage
    },
    created() {
        console.log('App is up');
    },
})