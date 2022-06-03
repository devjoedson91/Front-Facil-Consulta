<template>

   <div class="container">
        <div class="row main-container shadow p-5">
            <div class="col-6 form-main">
            
                <h2 class="mb-4">Sobre o profissional</h2>

                <h5 class="mb-4 fw-bold">Dados do profissional</h5>

                <form action="/atendimento" class="row needs-validation" novalidate>
                    
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome completo*</label>
                        <input type="text" v-model="name" id="nome" name="nome" class="form-control" placeholder="Digite o nome completo" minlength="3" maxlength="48" required>
                        <div class="invalid-feedback">
                            Error message
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="cpf" class="form-label">CPF*</label>
                        <input type="text" v-model="cpf" id="cpf" name="cpf" class="form-control" placeholder="Digite um CPF" @keyup="checkCpf()" maxlength="14" autocomplete="off" required>
                        <div class="invalid-feedback invalid-cpf">
                            Error message
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="celular" class="form-label">Numero do celular*</label>
                        <input type="text" v-model="numero" id="numero" name="numero" class="form-control" placeholder="(00) 0 0000-0000" maxlength="16" required>
                        <div class="invalid-feedback">
                            Error message
                        </div>
                    </div>
                    
                    <div class="row-select mb-3">
                        <div class="col-4 inputState">
                            <label for="inputState" class="form-label">Estado*</label>
                            <select name="estado" class="form-select" id="estado" required>
                                <option value="">Selecione</option>
                                <option class="option-select" v-for="estado in estados" :key="estado.id">{{ estado.nome }}</option>
                            </select>
                            <div class="invalid-feedback">
                                Error message
                            </div>  
                        </div>
                        
                        <div class="col-4 inputCity">
                            <label for="inputCity" class="form-label">Cidade*</label>
                            <select name="cidade" class="form-select" id="cidade" required>
                                <option value="">Selecione</option>
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

                    <ProximoBtn />
                   
                </form>
            </div>

            <div class="col-6 mx-auto align-items-center img">
                <img src="../../public/img/desktop-pagina-1.png" class="img-fluid" alt="desk-pagina1">
            </div>

        </div>
   </div>
    

</template>


<script>

    import api from '@/services/api.js';
    import Cleave from 'cleave.js';
    import ProximoBtn from './ProximoBtn.vue';
        
    export default {

        name: 'Cadastro',
        components: {

            ProximoBtn

        },
        data() {

            return {
                profissionais: null,
                cidades: null,
                estados: null,
                cpf: '',
                formValue: null
            }

        },
        methods: {

            async getProfissionais() {

                try {

                    const response = await api.get('/profissionais')
                    const dados = response.data
                    this.profissionais = dados;

                } catch(err) {

                    console.log('ERRO NA REQUISIÇÃO: ',err);
                }

            },

            async getCidades() {

                try {

                    const response = await api.get('/cidades')
                    const dados = response.data
                    this.cidades = dados;

                } catch(err) {

                    console.log('ERRO NA REQUISIÇÃO: ',err);
                }
                

            },

            async getEstados() {

                try {

                    const response = await api.get('/estados')
                    const dados = response.data
                    this.estados = dados;

                } catch(err) {

                    console.log('ERRO NA REQUISIÇÃO: ',err);
                
                }

               
            },

            checkCpf() {

                const cpf = document.querySelector('#cpf');
                const form = document.querySelector('.needs-validation');
                const message = document.querySelector('.invalid-cpf');

                const getCpf = this.cpf.replace(/[^0-9]/g, '');

                if (cpf.value.length == 14) {

                     this.profissionais.forEach(item => {

                        if (item.cpf == getCpf) {

                            cpf.removeEventListener('keyup', () => {}, false);

                            message.innerHTML = "CPF já cadastrado";
                            message.style.display = 'block';
                            
                            
                        }

                    });     

                } else {

                    message.style.display = 'none';
                    message.innerHTML = "Error message";
                }

            },

            validateSelects() {
                
                const selectCidade = document.querySelector('#cidade');
                const selectEstado = document.querySelector('#estado');
                
                this.estados.forEach((item, index) => {

                    selectEstado.options[index + 1].value = item.id;

                });

                selectEstado.addEventListener('change', e => {

                    // console.log(selectCidade.childNodes.length);

                    if (selectCidade.childNodes.length > 1) {

                        const selectOptions = document.querySelectorAll('#cidade .option-select');
                        selectOptions.forEach(option => {
                            
                            if (option.hasAttribute('selected')) {

                                console.log('tem selected');
                            }

                            option.remove();
                            
                        });


                    }          
                  
                    this.cidades.forEach(item => {

                        if (item.estadoId == selectEstado.options[selectEstado.selectedIndex].value) {

                            const optionCidades = document.querySelectorAll('#cidade option');

                            optionCidades.forEach(option => {

                                if (option.hasAttribute('selected')) {

                                    option.remove();

                                }

                            });

                            if (selectCidade.childNodes.length == 1 || selectCidade.childNodes.length > 1) {                                  
                                let createOption = document.createElement('option');
                                selectCidade.appendChild(createOption);
                                createOption.classList.add('option-select');
                                createOption.text = item.nome;
                                // console.log(createOption);


                            }
                                               
                        }

                    });

                   
                      
                });
                
            },

            inputsValidate() {

                const cpf = new Cleave('#cpf', {

                    delimiters: ['.','.','-'],
                    blocks: [3, 3, 3, 2],
                    numericOnly: true

                });

                const phone = new Cleave('#numero', {

                    delimiters: ['(', ')', ' ', ' ', '-'],
                    blocks: [0, 2, 0, 1, 4, 4],
                    numericOnly: true

                });
                

            },

            submitForm() {

                const form = document.querySelector('.needs-validation');

                form.addEventListener('submit', event => {

                    if (!form.checkValidity()) {

                        event.preventDefault();
                        event.stopPropagation();
                        form.classList.add('was-validated');

                    } else {

                        // event.preventDefault();
                        // event.stopPropagation();

                        const nome = document.querySelector('[name=nome]').value;
                        const cpf = document.querySelector('[name=cpf]').value;
                        const numero = document.querySelector('[name=numero]').value;
                        const optionsEstado = document.querySelectorAll('#estado .option-select');
                        const cidade = document.querySelector('#cidade').value;
                        let estado = '';

                        optionsEstado.forEach(option => {

                            if (option.selected) {

                                estado += option.innerHTML;

                            }

                        });

                        this.formValue = {nome, cpf, numero, estado, cidade};

                        if (localStorage.length > 0) {

                            localStorage.clear();

                        }
                        
                        if (localStorage.length == 0) {

                            let dados = localStorage.getItem('dadosForm');

                            if (dados == null) {

                                localStorage.setItem('dadosForm', "[]");
                                dados = [];

                            }

                            localStorage.setItem('dadosForm', JSON.stringify(this.formValue));

                        }

                        console.log(this.formValue);

                    }


                });
            }

        },   
        
        async mounted() {

            await this.getEstados();
            this.getCidades();
            this.getProfissionais();
            this.inputsValidate();
            this.validateSelects();
            this.submitForm();

            if (localStorage.length > 0) {

                const dadosForm = JSON.parse(localStorage.getItem('dadosForm'));

                const { nome, cpf, numero, estado, cidade } = dadosForm;

                const inputsForm = document.querySelectorAll('input');
                const selectsForm = document.querySelectorAll('select');
                const optionsEstado = document.querySelectorAll('#estado .option-select');

                selectsForm.forEach(select => { 

                    switch (select.name) {

                        case 'estado':
                            optionsEstado.forEach(option => {

                                if (option.innerHTML === estado) {

                                    option.setAttribute('selected', 'selected');

                                }

                            });
                            break;
                        case 'cidade':
                            let option = document.createElement('option');
                            select.appendChild(option);
                            option.setAttribute('selected', 'selected');
                            option.innerHTML = cidade;
                            break;

                    }

                });

                inputsForm.forEach(input => {

                    if (input.value.length < 2) {

                        switch (input.name) {

                            case 'nome': 
                                input.value = nome;
                                break;
                            case 'cpf':
                                input.value = cpf;
                                break;
                            case 'numero':
                                input.value = numero;
                                break;
                                            

                        }

                    }

                });


            }

        }

    }

</script>