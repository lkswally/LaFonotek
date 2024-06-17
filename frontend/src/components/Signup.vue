<template>
    <div>
      <main id="main_contacto">
        <div class="container">
          <div class="form-container">
            <h2>Registrarse</h2>
            <form id="signupForm" @submit.prevent="submitSignup" method="post">
              <div>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" v-model="nombre" required>
              </div>
              <div>
                <label for="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" placeholder="Ingrese su apellido" v-model="apellido" required>
              </div>
              <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Ingrese su email" v-model="email" required>
              </div>
              <div>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" v-model="password" required>
              </div>
              <button type="submit">Registrarse</button>
            </form>
          </div>
          <div class="form-image">
            <img src="assets/form_side.png" alt="Formulario de registro"> 
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
        nombre: '',
        apellido: '',
        email: '',
        password: ''
      };
    },
    methods: {
      submitSignup() {
        console.log('Entrando a submitSignup...');
        axios.post('http://localhost:3000/signup', { // endpoint
            nombre: this.nombre,
            apellido: this.apellido,
            email: this.email,
            password: this.password
        })
        .then(response => {
            console.log('Registro exitoso:', response.data);
            // Limpia registro
            this.nombre = '';
            this.apellido = '';
            this.email = '';
            this.password = '';
            // Alerta
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso!',
                text: 'Tu cuenta ha sido creada!'
            }).then(() => {
                setTimeout(() => {
                localStorage.setItem('usuario', JSON.stringify(response.data.usuario)); // Guardo en localstorage
                this.$router.push('/'); // Lo mando al home
                }, 200); // Retraso la redirección, así evito el error ResizeObserver
                });
        })
        .catch(error => {
            console.error('Error en el registro:', error.response.data);
            Swal.fire({
                icon: 'error',
                title: 'Error en el registro',
                text: error.response.data.error || 'Ha ocurrido un error durante el registro.'
            });
        });
      }
    }
  };
  </script>
  