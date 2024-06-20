<template>
    <div>
      <main id="main_contacto">
        <div class="container">
          <div class="form-container">
            <h2>Agregar Disco</h2>
            <form v-if="disco" id="agregarDiscoForm" @submit.prevent="crearDisco" method="post">
              <div>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" placeholder="Ingrese el nombre del disco" v-model="disco.nombre" required>
              </div>
              <div>
                <label for="artista">Artista:</label>
                <input type="text" id="artista" name="artista" placeholder="Ingrese el artista del disco" v-model="disco.artista" required>
              </div>
              <div>
                <label for="genero">Género:</label>
                <select id="genero" name="genero" v-model="disco.GeneroIdGenero" required>
                  <option v-for="genero in generos" :key="genero.idGenero" :value="genero.idGenero">{{ genero.tipo }}</option>
                </select>
              </div>
              <div>
                <label for="anio">Año de lanzamiento:</label>
                <input type="number" id="anio" name="anio" placeholder="Ingrese el año de lanzamiento" v-model="disco.anioLanzamiento" required>
              </div>
              <div>
                <label for="precio">Precio:</label>
                <input type="number" id="precio" name="precio" placeholder="Ingrese el precio" v-model="disco.precio" required>
              </div>
              <div>
                <label for="imagen">Imagen:</label>
                <input type="file" id="imagen" name="imagen" @change="handleFileChange">
                <img v-if="imagenPreview" :src="imagenPreview" alt="Vista previa de la imagen" class="imagen-preview">
              </div>
              <button type="submit">Agregar Disco</button>
            </form>
            <div v-else>
              <p>Cargando datos del disco...</p> 
              </div>
          </div>
          <div class="form-image">
            <img src="../assets/settings.png" alt="Formulario de agregar disco">
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    data() {
        return {
            disco: {},
            generos: [],
            imagenPreview: null,
            imagenFile: null,    
        };
    },
    mounted() {
      // con lo siguiente obtengo los géneros para llenar el dropbox
      axios.get('http://localhost:3000/generos')
        .then(response => {
          this.generos = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los géneros:', error);
        });
    },
    methods: {
      handleFileChange(event) {
        const file = event.target.files[0];
        this.imagenFile = file;
        this.imagenPreview = URL.createObjectURL(file);
      },
      crearDisco() {
      const formData = new FormData();
      formData.append('nombre', this.disco.nombre);
      formData.append('artista', this.disco.artista);
      formData.append('genero', this.disco.GeneroIdGenero);
      formData.append('anio', this.disco.anioLanzamiento);
      formData.append('precio', this.disco.precio);

      if (this.imagenFile) {
        formData.append('imagen', this.imagenFile);
      }

      axios.post(`http://localhost:3000/discos/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('Disco Creado:', response.data);
        Swal.fire('¡Disco Creado!', '', 'success').then(() => {
          this.$router.push('/catalogo');
        });
      })
      .catch(error => {
        console.error('Error al crear el disco:', error);
        Swal.fire('Error al crear el disco', error.response?.data?.error || 'Error desconocido', 'error');
      });
    }
    }
  };
  </script>
  