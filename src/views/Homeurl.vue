<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="addUrl"><v-icon dark>mdi-plus</v-icon> Add Url</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-for="(url,idx) in urls" :key="idx">
        <Url :url="url" @delete="deleteUrl" @edit="editUrl" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Url from '@/components/Url';

export default {
  components: {
    Url
  },
  computed: {
    urls() {
      console.log("urls data")
      console.log(this.$store.state.urls)
      return this.$store.state.urls;
    }
  },
  created() {
    this.$store.dispatch('getUrls');
  },
  methods: {
    addUrl() {
      this.$router.push({ name: 'edit' });
    },
    async deleteUrl(url) {
      console.log('delete', url.id);
      await this.$store.dispatch('deleteUrl', url);
      this.$store.dispatch('getUrls');
    },
    editUrl(url) {
      console.log('edit', url.id);
      this.$router.push({ name: 'edit', params: {url: url} });
    }
  }
};
</script>