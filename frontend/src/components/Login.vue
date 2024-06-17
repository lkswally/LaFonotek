<template>
    <div>
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
                        <button type="submit">Iniciar Sesión!</button>
                    </form>
                </div>
            <div class="form-image">
                <img src="assets/form_side.png" alt="Formulario de login"> 
            </div>
            </div>
        </main>
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
                this.$router.push('/catalogo');
            })
            .catch(error => {
                console.error('Hay un error en el login:', error.response.data);
            });
        }
    }
  };
  </script>