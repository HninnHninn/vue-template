<template>
  <div>
    <form class="form" @submit.prevent="onSubmit">
      <div class="input">
        <label for="email">Email</label>
        <input type="email" id="email" @input="$v.email.$touch()" v-model.trim="email"/>
    </div>
    <div class="input">
    <label for="firstName">First Name</label>
    <input
        type="text"
        id="firstName"
        v-model.trim="firstName"
        @input="$v.firstName.$touch()"
    />
    </div>
    <div class="input">
    <label for="lastName">Last Name</label>
    <input
        type="text"
        id="lastName"
        v-model.trim="lastName"
        @input="$v.lastName.$touch()"
    />
    </div>
    <div class="input">
    <label for="password">Password</label>
    <input
        type="password"
        id="password"
        v-model.trim="password"
        @input="$v.password.$touch()"
    />
    </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  
</template>
<style>
  .form {
    display: inline-block;
    text-align: center;
    width: 49%;
  }
  .validators {
    display: inline-block;
    width: 49%;
    text-align: center;
    vertical-align: top;
  }
  .input {
    padding: 5px;
  }
</style>
<script>
import { required, email } from "vuelidate/lib/validators";
  export default {
    data() {
      return {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      };
    },
    methods: {
      onSubmit() {}
    },
     validations: {
        email: {
        required,
        email
        },
        firstName: {
        required
        },
        lastName: {
        required
        },
        password: {
        required
        }
    },
  };
</script>