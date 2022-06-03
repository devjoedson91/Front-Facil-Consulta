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
                    <div class="fs-6" >{{ nome }}</div>
                    
                </div>
                <div class="mb-3">
                    <label for="cpf" class="fw-bold">CPF</label>
                    <div class="input-group flex-nowrap">
                        <div class="fs-6" >{{ cpf }}</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="cpf" class="fw-bold">Numero de celular ou telefone</label>
                    <div class="input-group flex-nowrap">
                        <div class="fs-6" >{{ numero }}</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="cpf" class="fw-bold">Estado/Cidade</label>
                    <div class="input-group flex-nowrap">
                        <div class="fs-6" >{{ estado }} - {{ cidade }}</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="cpf" class="fw-bold">Especialidade principal</label>
                    <div class="input-group flex-nowrap">
                        <div class="fs-6" >{{especialidade}}</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="cpf" class="fw-bold">Preço da consulta</label>
                    <div class="input-group flex-nowrap">
                        <div class="fs-6" >R$ {{valor}}</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="cpf" class="fw-bold">Forma de pagamento da consulta</label>
                    <div class="input-group flex-nowrap">
                        <div class="fs-6">{{formPgto}} - {{codicoes}}</div>
                    </div>
                </div>

                <div class="mx-auto text-center mt-5 mb-4">
                    <button type="submit" class="btn btn-yellow fw-bold" v-on:click="submitForm">CADASTRAR PROFISSIONAL</button>
                </div>

                <div class="mx-auto text-center">
                    <a href="/" class="text-decoration-none fs-6 fw-bold editCadastro" >Editar cadastro</a>
                </div>
                
            </div>

            <div class="col-6 mx-auto align-items-center">
                <img src="../../public/img/desktop-pagina-3.png" class="img-fluid" alt="desk-pagina3">
            </div>

        </div>
        
    </div>
    

</template>


<script>

    export default {

        name: 'Revisao',
        data() {

            return {
                nome: '',
                cpf: '',
                numero: '',
                estado: '',
                cidade: '',
                especialidade: '',
                valor: 0,
                formPgto: '',
                condicoes: ''
            }
        },
        methods: {

            getDadosForm() {

                const dadosForm = JSON.parse(localStorage.getItem('dadosForm'));

                const { nome, cpf, numero, estado, cidade } = dadosForm;

                this.nome = nome;
                this.cpf = cpf;
                this.numero = numero;
                this.estado = estado;
                this.cidade = cidade;


            }

        },
        mounted() {

            this.getDadosForm();

        }


    }


</script>