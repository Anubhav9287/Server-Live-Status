<template>
<div id="app">
  <v-app id="inspire">
    <v-card class="overflow-hidden">
      <v-app-bar>
        <v-toolbar-title>Application Monitor</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab to="/">Dashboard</v-tab>
            <v-tab to="/tiles">
              Tiles Display
            </v-tab>
            <v-tab to="/workflow">Flow Management</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-container>
      <v-content >
      <router-view />
      </v-content>
      </v-container>
    </v-card>
  </v-app>
</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
      showDash: false,
      search: '',
      headers: [
        {
          text: 'Application Name',
          align: 'start',
          sortable: false,
          value: 'app_name',
        },
        { text: 'Environment', value: 'env_name' },
        { text: 'Name', value: 'name' },
        { text: 'Status', value: 'status' }
      ]
    }
  },
  computed: {
    //urls(){
      //console.log("urls data")
      //console.log(this.$store.state.urls)
      //return this.$store.state.urls;
    //}
  },
  created() {
    this.$store.dispatch('getUrls');
  },
  methods: {
    showDashboard() {
      this.showDash = !this.showDash
    }

  }
};
</script>
