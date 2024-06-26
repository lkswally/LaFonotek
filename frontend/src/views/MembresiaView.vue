<template>
    <main id="main_membresia">   
      <h2>Selección de membresía</h2>
      <div v-if="!isLoggedIn">
        <p>Por favor, inicia sesión para seleccionar una membresía.</p>
        <button @click="redirectToLogin">Ir a login</button>
      </div>
      <div v-else>
        <p>¡Hola {{ username }}! Selecciona tu membresía:</p>
        <div class="membresia-options">
          <div v-for="membresia in membresias" :key="membresia.id" class="membresia-card">
            <img :src="membresia.imageUrl" alt="membresia {{ membresia.id }}" @click="selectmembresia(membresia.id)">
            <p>{{ membresia.name }}</p>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import SectionHeader from '@/components/SectionHeader.vue';
  import SectionFooter from '@/components/SectionFooter.vue';
  
  export default {
    name: 'MembresiaView',
    components: {
      SectionHeader,
      SectionFooter
    }
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
  