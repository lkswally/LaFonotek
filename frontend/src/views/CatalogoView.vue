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
            <img :src="`http://localhost:3000/uploads/${disco.imagen}`" alt="" class="img-item"> 
            <span class="precio-item">${{ disco.precio }}</span>
            
            <button class="boton-item">Agregar al Carrito</button>
  
            <button v-if="isAdmin" class="boton-editar" @click="editarDisco(disco)">Editar</button>
            <button v-if="isAdmin" class="boton-eliminar" @click="eliminarDisco(disco)">Eliminar</button>

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
  import Swal from 'sweetalert2';
  
  export default {
    name: 'CatalogoView',
    components: {
      SectionHeader,
      SectionFooter
    },
    data() {
      return {
        discos: [],
        isAdmin: false,
      };
    },
    mounted() {
    // Datos del usuario del localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    this.isAdmin = usuario ? usuario.isStaff : false; // es admin?

    axios.get('http://localhost:3000/discos')
      .then(response => {
        this.discos = response.data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },

    //Acá pongo los métodos para editar y eliminar los discos!!
    methods: {
    editarDisco(disco) {
      this.$router.push({
        name: 'EditarDisco',
        params: {
          id: disco.idDisco
        }
      })
    },

    eliminarDisco(disco) {
      Swal.fire({
        icon: 'warning',
        title: 'Eliminar disco',
        text: `¿Estás seguro de que quieres eliminar el disco "${disco.nombre}"?`,
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Aquí enviarías una solicitud DELETE al backend para eliminar el disco
          axios.delete(`http://localhost:3000/discos/${disco.idDisco}`)
            .then(response => {
              // Eliminar el disco de la lista local
              this.discos = this.discos.filter(d => d.idDisco !== disco.idDisco);
              Swal.fire('¡Disco eliminado!', '', 'success');
            })
            .catch(error => {
              Swal.fire('Error al eliminar el disco', error.response.data.error || 'Error desconocido', 'error');
            });
        }
      });
    }
  }
  };
  </script>
  