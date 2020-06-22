<template>
<div>
    <v-container>
        <v-row align="center">
            <v-col cols="4">
                <v-text-field
                v-model="item_name"
                value="Shirt/Blouse"
                label="Item Name"
            ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-select
                  :items="countries"
                  v-model="countrySelect"
                  label="Select Country"
                  single-line
                  return-object
              >
              </v-select>
            </v-col>
              <v-col cols="4">
                <v-btn @click="country_change">Search</v-btn>
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
      var selected_value=this.countrySelect;
      var item_name = this.item_name;
      alert("Text is "+item_name+" and select value is "+selected_value);
      var base_url = window.location.origin;
      this.axios.post(base_url+'/search', {
                    item_name: item_name,
                    selected_value: selected_value
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
    }
  },
}
</script>