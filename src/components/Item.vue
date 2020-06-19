<template>
<div>
    <v-container>
        <v-row align="center">
            <v-col cols="4">
                <v-text-field
                value="Shirt/Blouse"
                label="Item Name"
                disabled
            ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-select
                  :items="countries"
                  v-model="countrySelect"
                  v-on:change="country_change()" 
                  label="Select Country"
                  single-line
              >
              </v-select>
            </v-col>
              <v-col cols="4">
                <v-btn>Search</v-btn>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>
<script>
import axios from 'axios';
export default {
  data: () => ({
    countrySelect:'',
    countries: []
  }),
mounted() {
  //    alert("hi");
  var self = this;
  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(function(response) {
      // console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        // console.log(response.data[i]['name']);
          self.countries.push(response.data[i]['name']);
      }      
    })
    .catch(function(error) {
      console.log(error);
    });
},
computed: {
  filteredItems: function() {
    let searchTerm = (this.search || "").toLowerCase();
    return this.items.filter(function(item) {
      let title = (item.title || "").toLowerCase();
      return title.indexOf(searchTerm) > -1;
    });
  }
},
methods:{
    country_change: function (e) {
      alert("change");
      e.preventDefault();
    }
  },
}
</script>