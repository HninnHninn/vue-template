<template>
  <form id="app" @submit="checkForm" action="https://vuejs.org/"method="post">
  <p v-if="errors.length" class="contact">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" class="errors">{{ error }}</li>
    </ul>
  </p>
  <p class="contact">
    <label for="name">Name</label>
    <input id="name" v-model="name" type="text" name="name" class="input_field">
  </p>
  <p class="contact">
    <label for="age">Age</label>
    <input id="age" v-model="age" type="number" name="age" min="0" class="input_field">
  </p>
  <p class="contact">
    <label for="movie">Favorite Movie</label>
    <select id="movie" v-model="movie" name="movie" class="input_field">
      <option>Star Wars</option>
      <option>Vanilla Sky</option>
      <option>Atomic Blonde</option>
    </select>
  </p>
  <p class="contact">
    <input type="submit" value="Submit">
  </p>
</form>
</template>
<style>
    .input_field{
      border:1px solid black;
    }
    .errors{
      color:red;
    }
    .contact {
      margin-left: 20%;
    }
</style>
<script>
  export default {
    data() {
      return {
        errors: [],
        name: null,
        age: null,
        movie: null
      };
    },
  methods:{
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.age) {
        this.errors.push('Age required.');
      }

      e.preventDefault();
    }
  },
}

</script>