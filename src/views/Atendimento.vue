<template>

   <div class="container">
        <div class="btn-back fs-4">
            <a href="/">{{ backButton }}</a>
        </div>
        <div class="row main-container shadow p-5">
            <div class="col-6 form-main">
            
                <h2 class="mb-4">Sobre o profissional</h2>

                <h5 class="mb-4 fw-bold">Detalhes do atendimento</h5>

                <form action="/revisao" class="row needs-validation" @submit="submitForm($event)" novalidate>
                    
                    <div class="mb-3">
                        
                        <label for="especialidade" class="form-label">Especialidade principal*</label>
                        <select name="especialidade" id="especialidade" class="form-select" required>
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
                            <input type="text" name="valor" class="form-control" v-model="valorConsulta" maxlength="6" id="valor" v-on:keyup="inputsValidate" size="6" placeholder="Valor" required>
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
                                    <input class="form-check-input check-pgto ms-4" type="checkbox" value="p" id="pix">
                                    <label class="form-check-label ms-4" for="pix">
                                      Pix
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="breadcrumb mb-3 shadow p-3 bg-body rounded">
                            <div class="breadcrumb-item">
                                <div class="form-check">
                                    <input class="form-check-input check-pgto ms-4" type="checkbox" value="d" id="dinheiro">
                                    <label class="form-check-label ms-4" for="dinheiro">
                                      Em dinheiro
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="">
                            <CredcardAccordion 
                                v-for="(faq, i) in faqs" 
                                :faq="faq" 
                                :index="i" 
                                :key="i"
                                :open="faq.open"
                                @toggleOpen="toggleOpen"
                            />
                        </div>

                    </div>

                    <div>
                        <h6 class="num-pagina-progress">2 de 2</h6>
                        <div class="progress mb-3" style="height: 25px;">            
                            <div class="progress-bar" id="progress-bar" role="progressbar" style="width: 66.66%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <ProximoBtn />
                   
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
    import { mask, unMask } from 'remask';
    import ProximoBtn from '@/components/ProximoBtn.vue';
    import CredcardAccordion from '@/components/CredcardAccordion.vue';
    
    export default {

        name: 'Atendimento',
        components: {
            ProximoBtn,
            CredcardAccordion
        },
        data() {
            
            return {

                especialidades: null,
                valorConsulta: null,
                formValue: null,
                faqs: [
                    {
                        open: false
                    }
                ],
                backButton: '<'
                
            }
            
        },
        methods: {

            toggleOpen(index) {

                this.faqs = this.faqs.map((faq, i) => {

                    if (index === i) {
                    faq.open = !faq.open;
                    } else {
                    faq.open = false;
                    }

                    return faq;
                });
            },

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

                const inputValue = document.querySelector('#valor');

                inputValue.addEventListener('keypress', e => {

                    if (e.key === ',' || e.key === '.') e.preventDefault();

                });

                const valueMask = mask(this.valorConsulta.replace(',',''), ['99,99', '999,99']);

                console.log(valueMask);

                inputValue.value = valueMask;

            },

            checkedPgto() {

                const formsPgto = document.querySelectorAll('.check-pgto');
                const checkParcelamento = document.querySelectorAll('.check-parcelamento');

                formsPgto.forEach(formPgto => {

                    formPgto.addEventListener('click', e => {
                        
                        if (formPgto.checked) {

                           formPgto.setAttribute("checked", "true");

                        } else {

                            formPgto.setAttribute("checked", "false");

                        }

                        for (let i = 0; i < formsPgto.length; i++) {

                            if (formsPgto[2].checked) {

                                formsPgto[i].checked = formsPgto[i] === e.target;

                                checkParcelamento[0].checked = true;
                                checkParcelamento[1].checked = false;
                                checkParcelamento[2].checked = false;

                            }                                
                                        
                        }
                        
                        if (e.target.value === 'd' || e.target.value === 'p') {

                            this.toggleOpen(1);

                        }

                    }, false);

                });

            },

            stopPropagation(e, form) {

                e.preventDefault();
                e.stopPropagation();
                form.classList.add('was-validated');

            },

            submitForm(e) {

                const form = document.querySelector('.needs-validation');

                const inputValue = document.querySelector('#valor').value.replace(',', '.');

                if (!form.checkValidity()) {

                    this.stopPropagation(e, form);

                } else if (parseFloat(inputValue) < 30 || parseFloat(inputValue) > 350) {

                    alert('O valor da consulta deve esta entre R$ 30,00 e R$ 350,00');

                    this.stopPropagation(e, form);

                } else {

                    // e.preventDefault();
                    // e.stopPropagation();

                    const formInputs = document.querySelectorAll('.check-pgto');
                    const labelFormPgto = document.querySelectorAll('.form-check label');
                    const checkParcelamento = document.querySelectorAll('.check-parcelamento');
                    const labelParcelamento = document.querySelectorAll('.check-label');
                    let formsPgto = '';
                    let condicoes = '';

                    formInputs.forEach((item, index) => {

                        if (item.checked) {

                            for (let i = 0; i < labelFormPgto.length; i++) {

                                formsPgto += labelFormPgto[index].innerHTML;
                                break;

                            }

                        }

                    });

                    checkParcelamento.forEach((item, index) => {

                        if (item.checked) {

                            for (let i = 0; i < labelParcelamento.length; i++) {

                                condicoes += labelParcelamento[index].innerHTML;
                                break;

                            }

                            if (formsPgto !== 'cartao') condicoes = '';

                        }

                        

                    });

                    const especialidade = document.querySelector('#especialidade').value;
                    const valorConsulta = document.querySelector('#valor').value;
                            
                    this.formValue = {especialidade, valorConsulta, formsPgto, condicoes};

                    if (localStorage.length === 0) {

                        alert('Para prosseguir, preencha os dados básicos na pagina anterior!');
                        return false;

                    }

                    if (localStorage.length > 0) {

                        const noteEdit = JSON.parse(localStorage.getItem("dadosForm"));
                        const newStorage = Object.assign(noteEdit, this.formValue);
                        localStorage.setItem("dadosForm", JSON.stringify(newStorage));

                        console.log(JSON.parse(localStorage.getItem("dadosForm")));
                    }
                    
                }
            }

        },

        async mounted() {

            this.getEspecialidades();
            this.checkedPgto();

        }


    }


</script>

<style>

.faq {
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #FFF;
}

.faq .question {
  position: relative;
  color: #3c3c3c;
  transition: all 0.4s linear;
}

.faq .question::after {
  content: '';

  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);
  width: 30px;
  height: 30px;
  
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
  transition: all 0.2s linear;
}
.faq.open .question {
  margin-bottom: 15px;
}
.faq.open .question::after {
  transform: translateY(-50%) rotate(90deg);
}
.faq .answer {
  color: #3c3c3c;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}
.faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}    

</style>