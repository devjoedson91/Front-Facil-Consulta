<template>

   <div class="container">
        
        <div class="row main-container shadow p-5">
            
            <h2 class="mb-4">Tuuudo certo! Cadastro feito com sucesso.</h2>
                
            <div class="col-6 mx-auto align-items-center">
                <img src="../../public/img/medico-obstetra.png" class="img-fluid mb-4" alt="desk-pagina4">
            </div>

            <div class="gtco-widget">
                <h3>Redes Sociais</h3>
                   <ul class="gtco-social-icons">
                       <li>
                           <a href="https://twitter.com" target="_blank">
                               <i class="bi bi-twitter"></i>
                           </a>
                       </li>
                       <li>
                           <a href="https://www.facebook.com" target="_blank">
                               <i class="bi bi-facebook"></i>
                           </a>
                       </li>
                       <li>
                           <a href="https://www.instagram.com" target="_blank">
                               <i class="bi bi-instagram"></i>
                           </a>
                       </li>
                    </ul>
            </div>

        </div>
        
    </div>
    

</template>


<script>

    export default {

        mounted() {

            localStorage.clear();

        }

    }


</script>

<style scoped>

    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");

    .main-container {
        display: flex;
        align-items: center;
        text-align: center;

    }
    .img-fluid {

        border-radius: 50%;
        animation: pulsate 7s ease-in-out;

    }

    @media (max-width: 375px) {
        .img-fluid {
            margin-left: -30px;
            max-width: 200px;
            display: block;
        }
        .main-container {
           height: 100vh;
        }
    }

    @keyframes pulsate {

        0%{
            box-shadow: 0 0 50px #483698;
        }

    }

    .gtco-widget {
        margin-bottom: 30px;
        padding: 0;
        margin: 0;
    }

    .gtco-widget h3 {
        margin-bottom: 15px;
        font-weight: bold;
        font-size: 15px;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .gtco-widget li {
        padding: 0;
        margin: 0 20px 10px 0px;
        list-style: none;
        display: -moz-inline-stack;
        display: inline-block;
        zoom: 1;
        *display: inline;
    }

    .gtco-widget li i {
        width: 30px;
        float: left;
        font-size: 18px;
        position: relative;
        margin-top: 4px;
        display: -moz-inline-stack;
        display: inline-block;
        zoom: 1;
        *display: inline;
    }

    .gtco-social-icons li a {
        display: -moz-inline-stack;
        display: inline-block;
        zoom: 1;
        *display: inline;
        color: #483698;
        padding-left: 10px;
        padding-right: 10px;
    }
    .gtco-social-icons li a i {
        font-size: 20px;
    }

</style>