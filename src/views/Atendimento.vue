<template>

   <div class="container">
        <!-- <div class="btn-back fs-4">
            <a href="/views/index.html"></a>
        </div> -->
        <div class="row main-container shadow p-5">
            <div class="col-6 form-main">
            
                <h2 class="mb-4">Sobre o profissional</h2>

                <h5 class="mb-4 fw-bold">Detalhes do atendimento</h5>

                <form action="/revisao" class="row needs-validation" novalidate>
                    
                    <div class="mb-3">
                        
                        <label for="especialidade" class="form-label">Especialidade principal*</label>
                        <select name="especialidade" class="form-select" required>
                            <option value="">Selecione a especialidade</option>
                            <option class="option-select" v-for="especialidade in especialidades" :key="especialidade.id">{{ especialidade.nome }}</option>
                        </select>    
                        <div class="invalid-feedback">
                            Error message
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="valor" class="form-label">Informe o preço da consulta*</label>
                        <div class="input-group flex-nowrap" id="valor-consulta">
                            <span class="input-group-text bg-main" id="addon-wrapping">R$</span>
                            <input type="text" class="form-control" v-model="valorConsulta" maxlength="6" id="value" placeholder="Valor" required>
                        </div>
                        <div class="invalid-feedback">
                            Error message
                        </div>
                    </div>

                    <div class="mb-4" aria-label="breadcrumb">
                        <label for="form-pgto" class="form-label mb-3">Formas de pagamento da consulta*</label>
                        <div class="breadcrumb mb-3 shadow p-3 bg-body rounded">
                            <div class="breadcrumb-item">
                                <div class="form-check">
                                    <input class="form-check-input ms-4" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label ms-4" for="defaultCheck1">
                                      Pix
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="breadcrumb mb-3 shadow p-3 bg-body rounded">
                            <div class="breadcrumb-item">
                                <div class="form-check">
                                    <input class="form-check-input ms-4" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label ms-4" for="defaultCheck1">
                                      Em dinheiro
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="breadcrumb mb-3 shadow p-3 bg-body rounded">
                            <div class="breadcrumb-item">
                                <div class="form-check">
                                    <input class="form-check-input ms-4" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label ms-4" for="defaultCheck1">
                                      Cartão de crédito
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h6 class="num-pagina-progress">2 de 2</h6>
                        <div class="progress mb-3" style="height: 25px;">            
                            <div class="progress-bar" id="progress-bar" role="progressbar" style="width: 66.66%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div class="mx-auto text-center">
                        <button type="submit" class="btn btn-primary">PRÓXIMO</button>
                    </div>
                   
                </form>
            </div>

            <div class="col-6 mx-auto align-items-center">
                <img src="../../public/img/desktop-pagina-2.png" class="img-fluid" alt="desk-pagina2">
            </div>

        </div>
        
    </div>
    

</template>


<script>

    import api from '@/services/api';
    import Cleave from 'cleave.js';
    
    export default {

        name: 'Atendimento',

        data() {
            
            return {

                especialidades: null,
                valorConsulta: '',
                
            }
            
        },
        methods: {

            async getEspecialidades() {

                try {

                    const response = await api.get('/especialidades')
                    const dados = response.data
                    this.especialidades = dados;

                } catch(err) {

                    console.log('ERRO NA REQUISIÇÃO: ',err);
                }
                

            },

            inputsValidate() {

                const valor = document.querySelector('#value');

                valor.addEventListener('keypress', e => {

                    if (e.key === ',' || e.key === '.') e.preventDefault();

                });

                valor.addEventListener('keyup', e => {

                    console.log(this.valorConsulta);

                });

                new Cleave(valor, {
                    
                    numeral: true,
                    numeralIntegerScale: 6,
                    numeralDecimalScale: 2,
                    delimiter: ',',
                    numeralPositiveOnly: true,

                });
               

            }

        },

        mounted() {

            (() => {

                const form = document.querySelector('.needs-validation');

                form.addEventListener('submit', event => {

                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated');
                
                });

            })();

            this.getEspecialidades();
            this.inputsValidate();

        }


    }


</script>