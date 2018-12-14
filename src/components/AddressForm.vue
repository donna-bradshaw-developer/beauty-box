<template>
    <div>
    <h1 class="title">Delivery Information</h1>

    <h2 class="subtitle">
      Where should we send your beauty box?
    </h2>

    <form class="form" @input='submit'>
      <div class="form-element" >
        <label class="form-label" for="delivery_name">Name</label>
        <input v-model="$v.form.recipient.$model" type="text" placeholder="Recipient's Name" class="formStructure" id="delivery_name">
        <div v-if="$v.form.recipient.$error" class="error">This field is required</div>
      </div>

      <div class="form-element">
        <label class="form-label" id='textarea-label' for="address">Address</label>
        <textarea v-model="$v.form.address.$model" placeholder="Recipient's Address" rows="3" class="formStructure" id="address"></textarea>
        <div v-if="$v.form.address.$error" class="error">This field is required</div>
      </div>
    </form>
  </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
export default {
    name: 'addressForm',
    props:{
        mainFormData:{
            type: Object,
            required: true
        }
    },
    data () {
      return {
        form: {
          address: null,
          recipient: this.mainFormData.name
        }
      }
    },
    validations: {
        form: {
            address: {
                required
            },
            recipient: {
                required
            }
        }
    },
    methods: {
        submit() {
            this.$emit('update', {
                data: {
                    address: this.form.address,
                    recipient: this.form.recipient
                },
                isValid: !this.$v.$invalid
            })
        }
    }
}
</script>

<style>

</style>
