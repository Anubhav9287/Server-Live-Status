<template>
  <div>

    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="url.name" label="What you want to call it?" required />
          </v-col>
          <v-col>
            <v-text-field v-model="url.app_name" label="Applicaiton Name" required />
          </v-col>
          <v-col>
            <v-text-field v-model="url.env_name" label="Environment" required />
          </v-col>
          <v-col>
            <v-text-field v-model="url.data" label="URL For Application" required />
          </v-col>
          <v-col>
            <v-text-field v-model="url.port" label="port" required type="numeric" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="green" @click="save">Save Url</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      url:null
    }
  },
  created() {
    if(this.$route.params.url) {
      this.url = this.$route.params.url;
    } else {
      this.url = { status:'', name:'', data:'' , port: 8080, app_name:'', env_name:''};
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch('saveUrl', this.url);
      console.log('back');
      this.$router.push('/');
    }
    
  }
};
</script>