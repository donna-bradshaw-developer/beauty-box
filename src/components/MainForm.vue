<template>
  <div class="mainForm">
    <div v-if='inProgress'>
      <keep-alive>
        <component 
          ref="currentStep"
          :is="currentStep" 
          @update='processSelection'
          :mainFormData='form'>
        </component>
      </keep-alive>

      <div class="status-bar">
        <div :style="`width: ${progress}%;`"></div>
      </div>

      <div class="buttons">
        <button @click="moveBack"
          v-if="currentStepNumber > 1"
          class="btn-outlined">Back</button>

        <button @click="nextButtonAction" 
        class="btn" :disabled="!nextStepAllowed">
          {{ isLastStep ? 'Complete' : 'Next' }}
        </button>
      </div>
    </div>

    <div v-else id="else">
      <h1 class="title">Thank you!</h1>
      
      <h2 class="subtitle">We look forward to shipping you your first box!</h2>

      <a href='/' target="_blank">Back To Home Page</a>
    </div>
  </div>
</template>

<script>
  import BoxOptions from './BoxOptions'
  import UserDetails from './UserDetails'
  import AddressForm from './AddressForm'
  import Review from './Review'
  export default {
    name: 'mainForm',
    components: {
      BoxOptions,
      UserDetails,
      AddressForm,
      Review
    },
    data () {
      return {
        currentStepNumber: 1,
        nextStepAllowed: false,
        hide: true,
        steps: [ 'BoxOptions', 'UserDetails', 'AddressForm', 'Review' ],
        form: {
          option: null,
          email: null,
          name: null,
          password: null,
          address: null,
          recipient: null,
          surprise: false
        }
      }
    },
    computed: {
      progress(){
        return this.currentStepNumber/this.length * 100
      },
      length(){
        return this.steps.length
      },
      currentStep(){
        return this.steps[this.currentStepNumber - 1]
      },
      inProgress(){
        return this.currentStepNumber <= this.length
      },
      isLastStep(){
        return this.currentStepNumber === this.length
      },
    },
    methods: {
      processSelection(selection){
        Object.assign(this.form, selection.data)
        this.nextStepAllowed = selection.isValid
      },
      moveBack () {
        this.currentStepNumber--
        this.nextStepAllowed = true
      },
      nextButtonAction(){
        if(this.isLastStep){
          this.submitOrder()
        } else {
          this.moveForward()
        }
      },
      moveForward() {
        this.currentStepNumber++
        this.$nextTick(()=>{
          this.nextStepAllowed = !this.$refs.currentStep.$v.$invalid
        })
      },
      submitOrder() {
        /* If this was not a demo, this would actually call a function to post 
        form to database and then change the container div to show confirmation
        upon a successful post, but since this is a demo, I am only going to change 
        the container div that would show after a successful submission
        */
       this.currentStepNumber++

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
