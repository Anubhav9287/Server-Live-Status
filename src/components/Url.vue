<template>
  <v-card class="mx-auto elevation-24">
    <v-card-title>{{ url.name }}</v-card-title>
    <v-card-subtitle>
      <b>Application:</b> {{url.app_name}}
      <b>Environment:</b> {{url.env_name}}</v-card-subtitle>
    <v-card-text>
      <p><b>Url: </b>{{url.data}}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn fab dark very small color="red" @click="$emit('delete',url)"> <v-icon dark>mdi-minus</v-icon></v-btn>
      <v-btn tile outlined color="success" @click="$emit('edit',url)">  <v-icon left>mdi-pencil</v-icon> Edit</v-btn>
      <v-btn color="success" v-if=this.url_data.status >
        <b-spinner small type="grow"></b-spinner>
          Live
      </v-btn>
      <v-btn color="primary" v-else>
         <b-icon icon="exclamation-triangle-fill" scale="1" variant="warning"></b-icon>
          Down
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: ["url"],
  data: function() {
    return {
      url_data: this.url,
      results : ""
    };
  },
  created() {
    console.log("url created");
    console.log(this.url);
  },
  mounted() {
    console.log("mounted");
    this.getStatus();
  },
  methods: {
    getStatus: function() {
      let url_out = `http://${this.url_data.data}`;
      if (
        this.url_data.port &&
        this.url_data.port != 80 &&
        this.url_data.port != 443
      )
      url_out += `:${this.url_data.port}`;
      this.url_data.status = false;
      console.log("irl data: "+this.url_data)

fetch(url_out, { mode: "no-cors" }).then(resp => {
        if (!resp.ok || resp.status != 200) this.url_data.status = false;
        if (resp.type == "opaque") this.url_data.status = true;
        console.log("Response output");
        console.log(url_out);
        console.log(resp);
      });
  
  }
  }
};
</script>
