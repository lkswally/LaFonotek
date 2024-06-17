<template>
<main>
    <div>
        <section id="inicio_catalogo">
            <h1 class="animacion">Ultimos Lanzamientos</h1>
        </section>
        <section class="contenedor2">
            <div class="contenedor-items">
                <div v-for="disco in discos" :key="disco.idDisco" class="item">
                    <span class="titulo-item">{{ disco.nombre }}</span>
                    <img :src="'/assets/' + disco.imagen" alt="" class="img-item"> 
                    <span class="precio-item">${{ disco.precio }}</span>
                    <button class="boton-item">Agregar al Carrito</button> </div>
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
    name: 'CatalogoView',
    components: {
      SectionHeader,
      SectionFooter
    },
    data() {
      return {
        discos: []
      };
    },
    mounted() {
  axios.get('http://localhost:3000/discos') // Petición al back
    .then(response => {
      this.discos = response.data; // datos de los discos a la variable discos
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
  };
  </script>
  