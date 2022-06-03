<template>

   <div class="container">
        <!-- <div class="btn-back fs-4">
            <a href="treatment02.html"><</a>
        </div> -->
        <div class="row main-container shadow p-5">
            <div class="col-6 form-main">
            
                <h2 class="mb-4">Revisão do cadastro</h2>

                <div class="row mb-3">
                        
                    <label for="nome" class="fw-bold">Nome completo</label>
                    <div class="fs-6">Joedson Ferreira Barbosa</div>
                    
                </div>
                <div class="mb-3">
                    <label for="cpf" class="fw-bold">CPF</label>
                    <div class="input-group flex-nowrap">
                        <div class="fs-6">000.000.000-00</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="cpf" class="fw-bold">Numero de celular ou telefone</label>
                    <div class="input-group flex-nowrap">
                        <div class="fs-6">(00) 00000000</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="cpf" class="fw-bold">Estado/Cidade</label>
                    <div class="input-group flex-nowrap">
                        <div class="fs-6">Rio Grande do Sul - Pelótas</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="cpf" class="fw-bold">Especialidade principal</label>
                    <div class="input-group flex-nowrap">
                        <div class="fs-6">Cardiologia</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="cpf" class="fw-bold">Preço da consulta</label>
                    <div class="input-group flex-nowrap">
                        <div class="fs-6">R$ 200</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="cpf" class="fw-bold">Forma de pagamento da consulta</label>
                    <div class="input-group flex-nowrap">
                        <div class="fs-6">Cartão de credito - Parcelamento em 2x sem juros</div>
                    </div>
                </div>

                <div class="mx-auto text-center mt-5 mb-4">
                    <button type="submit" class="btn btn-yellow fw-bold" v-on:click="submitForm">CADASTRAR PROFISSIONAL</button>
                </div>

                <div class="mx-auto text-center">
                    <a href="#" class="text-decoration-none fs-6 fw-bold" >Editar cadastro</a>
                </div>
                
            </div>

            <div class="col-6 mx-auto align-items-center">
                <img src="../../public/img/desktop-pagina-3.png" class="img-fluid" alt="desk-pagina3">
            </div>

        </div>
        
    </div>
    

</template>


<script>

    // (() => {

    //         const form = document.querySelector('.needs-validation');

    //         form.addEventListener('submit', event => {

    //             if (!form.checkValidity()) {
    //                 event.preventDefault()
    //                 event.stopPropagation()
    //             }

    //             form.classList.add('was-validated');
            
    //         }, false);
          

    // })()


</script>