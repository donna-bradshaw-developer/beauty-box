<template>
    <div>
    <h1 class="title">Create Account</h1>

    <h2 class="subtitle">
      Create an account or log in to order your Beauty Box subscription
    </h2>

    <form class="form">
      <div class="form-element" @input="submit">
        <label class="form-label" for="name">Name</label>
        <input v-model="$v.form.name.$model" type="text" placeholder="Your Name" class="formStructure" id="name">
        <div v-if="$v.form.name.$error" class="error">name is required</div>
      </div>

      <div class="form-element" @input="submit">
        <label class="form-label" for="email">Email</label>
        <input type="text" v-model="$v.form.email.$model" placeholder="Your Email" class="formStructure" id="email">
        <div v-if="$v.form.email.$error && !$v.form.email.required" class="error">email is required</div>
        <div v-if="$v.form.email.$error && !$v.form.email.email" class="error">email is invalid</div>
      </div>

      <div class="form-element" @input="submit">
        <label class="form-label" for="password">Password</label>
        <input v-model="$v.form.password.$model" type="password" placeholder="Your Password" class="formStructure" id="password">
        <div v-if="$v.form.password.$error && !$v.form.password.required" class="error">A password is required</div>
      </div>

    </form>
  </div>
</template>

<script>
import {required, email} from 'vuelidate/lib/validators'
export default {
    name: 'userDetails',
    data () {
        return {
            form: {
                email: null,
                password: null,
                name: null,
            }
        }
    },
    validations: {
        form: {
            email: {
                required,
                email
            },
            password: {
                required
            },
            name: {
                required
            }
        }
    },
    methods:{
        submit() {
            this.$emit('update', {
                data: {
                    name: this.form.name,
                    email: this.form.email,
                    password: this.form.password
                },
                isValid: !this.$v.$invalid
            })
        }
    }
}
</script>

<style>

</style>
