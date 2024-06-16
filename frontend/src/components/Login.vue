<template>
    <div>
    <SectionHeader />
        <main id="main_contacto">
            <div class="container">
                <div class="form-container">
                    <h2>Iniciar Sesión</h2>
                    <form id="loginForm" @submit.prevent="submitLogin" method="post">
                        <div>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Ingrese su email" v-model="email" required>
                        </div>
                        <div>
                            <label for="password">Contraseña:</label>
                            <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" v-model="password" required>
                        </div>
                        <!-- <input type="button" value="Iniciar Sesión!" @click="submitLogin"> -->
                        <button type="submit" @click="submitLogin">Iniciar Sesión!</button>
                    </form>
                </div>
            <div class="form-image">
                <img src="assets/form_side.png" alt="Formulario de login"> 
            </div>
            </div>
        </main>
    <SectionFooter />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
        submitLogin() {
            console.log('Entrando a submitLogin...');
            axios.post('http://localhost:3000/login', {
            email: this.email,
            password: this.password
            })
            .then(response => {
                // Login exitoso
                console.log('Login exitoso:', response.data);
                localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
                this.$router.push('/perfil');
            })
            .catch(error => {
                console.log('Entrando a catch error');
                // Manejo de errores
                console.error('Error en el login:', error.response.data);
                // Puedes mostrar un mensaje de error al usuario en la interfaz.
            });
        }
    }
  };
  </script>