<template>
    <div>
    <b-table striped hover :items="urls_data" :fields="fields" caption-top bordered> 
            <template v-slot:table-caption><h3>Application Live Status:</h3></template>
            <template v-slot:cell(status)="d" >
            <checkStatus :url=d.item></checkStatus>
      </template>
    </b-table>
    </div>
</template>

<script>
import checkStatus from '@/components/checkStatus';

export default {
  name: 'App',
  components: {
    checkStatus
  },
  data() {
    return{
      urls_data: null,
      url_status: 'false',
      showDash: false,
      search: '',
      fields: [
          {
            key: 'name',
            label: 'Name',
            
          },
          {
            key: 'app_name',
            label: 'Application Name',
            
          },
          {
            key: 'env_name',
            label: 'Environment',
            
          },
          {
            key: 'status',
            label: 'Current Status',
            
          }
        ]
    }
  },
  created() {
     //this.$store.dispatch('getUrls');
     //console.log("Dashboard Created")
     this.urls_data = this.$store.state.urls;
    },
    mounted() {
    //console.log("Dashboard mounted");
    //this.getStatus();
    },
    methods: {
    getStatus(d) {
        console.log("get Status")
        let r_status = 'false'
      let url_out = `http://${d.data}`;
      if (
        d.port &&
        d.port != 80 &&
        d.port != 443
      )
      url_out += `:${d.port}`;
        fetch(url_out, { mode: "no-cors" }).then(resp => {
        if (!resp.ok || resp.status != 200) r_status='false';
        if (resp.type == "opaque")
        { r_status='true' }
        console.log("Response output Dashboard");
        console.log(resp+"  ++++++++++++  "+r_status);
        this.url_status = r_status
      });
      console.log(r_status)
  }
        
    }
    
}
</script>
