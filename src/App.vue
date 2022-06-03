<template>
   
  <router-view /> <!-- essa tag terá todas as views do projeto -->
  
</template>

<script>
    
    import Navcontrol from './components/Navcontrol.vue';
    import bootstrap from '../css/bootstrap.min.css';
    import secondary from '../css/secondary-css.css';

    export default {
        name: 'App',
        components: {
            Navcontrol
        },

    }

</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap');

</style>
