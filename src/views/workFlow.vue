<template>
<div>
 <div id="app">
  <v-app id="inspire">
    <h3>Placed Digital Order</h3>
    <v-stepper alt-labels>
      <v-stepper-header>
        <v-stepper-step step="3" complete>Salesforce</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4" complete>Salesforce2</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :rules="[() => false]" step="5">
          Salesforce3
          <small>Alert message</small>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="6">Salesforce4</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <br/>
    <h3>Placed Print Order</h3>
    <v-stepper alt-labels>
      <v-stepper-header>
        <v-stepper-step step="3" complete>Salesforce</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4" complete>Saleforce2</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="5" complete>Saleforce3</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="6" complete>Saleforce4</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </v-app>
</div>
</div>
</template>

<script>

export default {
  
};
</script>