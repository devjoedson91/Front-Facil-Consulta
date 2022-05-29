<template>

   <div class="container">
        <div class="row main-container shadow p-5">
            <div class="col-6 form-main">
            
                <h2 class="mb-4">Sobre o profissional</h2>

                <h5 class="mb-4 fw-bold">Dados do profissional</h5>

                <form action="treatment02.html" class="row needs-validation" novalidate>
                    
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome completo*</label>
                        <input type="text" v-model="input_name" id="profissional" class="form-control" placeholder="Digite o nome completo" required>
                        <div class="invalid-feedback">
                            Error message
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="cpf" class="form-label">CPF*</label>
                        <input type="text" id="cpf" class="form-control" placeholder="Digite um CPF" required>
                        <div class="invalid-feedback">
                            Error message
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="celular" class="form-label">Numero do celular*</label>
                        <input type="text" id="numero" class="form-control" placeholder="(00) 0 0000-0000" required>
                        <div class="invalid-feedback">
                            Error message
                        </div>
                    </div>
                    <div class="row-select mb-3">
                        <div class="col-4 inputState">
                            <label for="inputState" class="form-label">Estado*</label>
                            <select name="estado" class="form-select" required>
                                <option value="">Selecione</option>
                                <option value="">ACRE</option>
                                <option value="">CEARA</option>
                                <option value="">ESPIRITO SANTO</option>
                            </select>
                            <div class="invalid-feedback">
                                Error message
                            </div>  
                        </div>
                        <div class="col-4 inputCity">
                            <label for="inputCity" class="form-label">Cidade*</label>
                            <select name="cidade" class="form-select" required>
                                <option value="">Selecione</option>
                                <option value="">ACRE</option>
                                <option value="">CEARA</option>
                                <option value="">ESPIRITO SANTO</option>
                            </select>
                            <div class="invalid-feedback">
                                Error message
                            </div>
                        </div>     

                    </div>

                    <div>
                        <h6 class="num-pagina-progress">1 de 2</h6>
                        <div class="progress mb-3" style="height: 25px;">            
                            <div class="progress-bar" id="progress-bar" role="progressbar" style="width: 33.33%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-primary" v-on:click="submitForm">PRÓXIMO</button>
                    </div>
                   
                </form>
            </div>

            <div class="col-6 mx-auto align-items-center img">
                <img src="../../public/img/desktop-pagina-1.png" class="img-fluid" alt="desk-pagina1">
            </div>

        </div>
   </div>
    

</template>


<script>

    export default {

        name: 'Cadastro'

    }

</script>

<style scoped>

    @import '../app.scss';

</style>