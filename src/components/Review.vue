<template>
    <div>
        <h1 class="title">Confirm your order</h1>

        <h2 class="subtitle">Let's Review Your Selections</h2>

        <div class="summary">
            <h3>Subscription</h3>

            <p class="description">Your monthly beauty box will contain:</p>

            <div class="options container">
                <div class="option active-option">

                    <div class="information">
                            <p class="optionName">{{ mainFormData.option.name }}</p>
                            <p class="description">{{ mainFormData.option.description }}</p>
                    </div>

                    <div class="price">
                        <span class="dollar-sign">$</span>
                        <span class="number">{{totalPrice}}</span>
                    </div>
                </div>
            </div>

            <h3>Additional Beauty Box Item (optional)</h3>

            <p class="description">Treat yourself with a surprise Beauty Magic Item in your monthly box.</p>

            <div class="options" @change="submit">
                <input v-model="form.surprise" type="checkbox" value="surprise" id="surprise">
                <label for="surprise">Mystery Item (+$4/month)</label>
            </div>

            <div class="address">
                <div class="sectionTwo">
                    <h3>Delivery</h3>
                    <p class="description">Your first Beauty Box is awaiting.</p>
                </div>

                <div class="sectionThree">
                    <h3>{{ mainFormData.recipient }}</h3>
                    <p class="leading-normal">{{ mainFormData.address }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'review',
    props:{
        mainFormData:{
            type: Object,
            required: true
        }
    },
    data () {
      return {
        form: {
          surprise: false
        }
      }
    },
    computed: {
      totalPrice () {
        if(this.form.surprise){
            return this.mainFormData.option.price + 4
        }
        return this.mainFormData.option.price
      }
    },
    validations: {},
    methods: {
        submit() {
            this.$emit('update', {
                data: {
                    surprise: this.form.surprise,
                },
                isValid: true
            })
        }
    }
}
</script>

<style>

</style>
