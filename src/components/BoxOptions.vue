<template>
  <div>
    <h1 class="title"><span class='beauty'>Beauty Box</span> Options</h1>

    <h2 class="subtitle">Your Beauty Favorites & Essentials</h2> 
    <h2 class="subtitle">Delivered Right To Your Door</h2>

    <div class="options container">
        <div
            v-for="option in options"
            :key="option.price"
            @click="pickOption(option)"
            :class="{'active-option': selectedOption === option}"
            class="option"
            >

            <div class='information'>
                <p class="optionName">{{option.name}}</p>
                <p class='description'>{{option.description}}</p>
                <p class='description'> Delivered monthly</p>
            </div>

            <div class="price">
                <span class="dollar-sign">$</span>
                <span class="number">{{option.price}}</span>
            </div>
        </div>
    </div>

    <div v-if="$v.selectedOption.$error" class="error">you should pick a option to continue</div>
        
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

  export default {
    name: 'boxOptions',
    data() {
      return {
        options: [
          {
            price: 19,
            name: 'The Enthusiast',
            description: 'One box of makeup essentials'
          },
          {
            price: 29,
            name: 'The Protégé',
            description: 'One box of essentials and one box of favorites'
          },
          {
            price: 49,
            name: 'The Artist',
            description: 'One box of deluxe essentials & two boxes of your favorites'
          }
        ],
        selectedOption: null
      }
    },
    validations: {
      selectedOption: {
        required
      }
    },
    methods: {
      pickOption (option) {
        this.selectedOption = option
        this.submit()
      },
      submit(){
        this.$emit('update', {
          data: {
            option: this.selectedOption
          },
          isValid: true
        })
      }
    }
  }
</script>

<style>

</style>




