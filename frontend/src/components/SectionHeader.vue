<template>
  <header class="header_eventos">
    <div class="contenedor">
      <div class="menu">
        <img src="/assets/Logo2.jpg" alt="Icono La Fonoteca">
        <div class="lista">
          <nav>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/catalogo">Catálogo</router-link></li>
              <li><router-link to="/eventos">Eventos</router-link></li>
              <li><router-link to="/contacto">Contacto</router-link></li>
            </ul>
          </nav>
        </div>
        <div class="boton">
          <div v-if="usuarioLogueado" class="bienvenida">
            Bienvenido, {{ usuarioLogueado.nombre }}
          </div> 
          <a v-if="usuarioLogueado" href="#" @click.prevent="logout">Logout</a>
          <router-link v-if="!usuarioLogueado" to="/login">Login</router-link>
          <router-link v-if="!usuarioLogueado" to="/signup">Sign Up</router-link>
        </div>
      </div>
    </div>
    <div id="hidden">
      <div id="menu_desplegable">
        <img src="/assets/Logo2.jpg" alt="Icono La Fonoteca">
        <div class="lista_desplegable">
          <nav>
            <input type="checkbox" id="menu">
            <label for="menu"><img id="icono_menu" src="/assets/menu.png" alt="icono menu"></label>
            <ol>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/catalogo">Catálogo</router-link></li>
              <li><router-link to="/eventos">Eventos</router-link></li>
              <li><router-link to="/contacto">Contacto</router-link></li>
              <li v-if="usuarioLogueado" class="li-desplegable"><router-link to="/">Perfil</router-link></li>
              <li v-else class="li-desplegable"><router-link to="/login">Login</router-link></li>
              <li v-else class="li-desplegable"><router-link to="/signup">Sign Up</router-link></li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      usuarioLogueado: null
    };
  },
  mounted() {
    this.usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));
    this.emitter.on("loginExitoso", this.handleLoginExitoso);
    this.emitter.on("logout", this.verificarUsuario);

  },
  methods: {
    handleLoginExitoso(usuario) {
      this.usuarioLogueado = usuario;
    },
    verificarUsuario() {
      this.usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));
    },
    logout() {
      localStorage.removeItem('usuario');
      this.usuarioLogueado = null;
      this.emitter.emit('logout');
      this.$router.push('/login');
    }
  },
  beforeUnmount() {
    this.emitter.off('loginExitoso', this.handleLoginExitoso); 
    this.emitter.off("logout", this.verificarUsuario);
  }
};
</script>

<style>
.bienvenida {
  margin-right: 10px;
  color: aliceblue;
  padding-top: 10px;
}
.boton {
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: center;
}
.li-desplegable{
  color: red;
}
</style>

