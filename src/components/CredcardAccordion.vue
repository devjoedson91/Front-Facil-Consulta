<template>
	<div :class="open ? 'faq open' : 'faq'">
		<div class="question">
            <div class="form-check">
                <input class="form-check-input check-pgto ms-4" type="checkbox" value="c" id="cartao" @click="$emit('toggleOpen', index)">
                <label class="form-check-label ms-4" for="cartao">
                    Cartão de crédito
                </label>
           </div>

        </div>
		<div class="answer">
            <div class="form-check mb-3">
                <label class="form-check-label ms-6" for="defaultCheck1">
                    Parcelamento em
                </label>                         
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input check-parcelamento ms-6" v-on:click="clicar" type="checkbox" value="1x" id="1x">
                <label class="form-check-label ms-2" for="defaultCheck1">
                    1x sem juros
                </label>                     
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input check-parcelamento ms-6" v-on:click="clicar" type="checkbox" value="2x" id="2x">
                <label class="form-check-label ms-2" for="defaultCheck1">
                    2x sem juros
                </label>                     
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input check-parcelamento ms-6" v-on:click="clicar" type="checkbox" value="3x" id="3x">
                <label class="form-check-label ms-2" for="defaultCheck1">
                    3x sem juros
                </label>                     
            </div>

        </div>
                                
	</div>
</template>

<script>
export default {
	name: 'FAQ',
	props: ['faq', 'index', 'open'],
    methods: {

        clicar(event) {

            const checkParcelamento = document.querySelectorAll('.check-parcelamento');
            const checkPgto = document.querySelector('#cartao');

            for (let i = 0; i < checkParcelamento.length; i++) {

                checkParcelamento[i].checked = checkParcelamento[i] === event.target;
                                        
            }
        }
    }
}
</script>