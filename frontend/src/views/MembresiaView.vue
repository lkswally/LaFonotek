<template>
    <main>
    <div>
      <section id="inicio_catalogo2">

      </section>
      <section class="contenedor2">
        <div class="contenedor-items">
          <div v-for="membresia in membresias" :key="membresia.idMembresia" class="item">
            <span class="titulo-item">{{ membresia.tipo }}</span>
            <img :src="`http://localhost:3000/uploads/${membresia.imagen}`" alt="" class="img-item"> 
          </div>
        </div>
      </section>
    </div>
  </main>
  </template>
  
  <script>
  import SectionHeader from '@/components/SectionHeader.vue';
  import SectionFooter from '@/components/SectionFooter.vue';
  import axios from 'axios';
  
  export default {
    name: 'MembresiaView',
    components: {
      SectionHeader,
      SectionFooter
    },
    data() {
      return {
        membresias: [],
        isAdmin: false,
      };
    },
    mounted() {

    axios.get('http://localhost:3000/membresias')
      .then(response => {
        this.membresias = response.data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
  };
  </script>
  
  <style scoped>
  .membresia-options {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .membresia-card {
    text-align: center;
    cursor: pointer;
    margin: 10px;
  }
  
  .membresia-card img {
    width: 200px;
    height: 200px;
  }

  #app {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;

    padding: 20px;
  }
  </style>
  