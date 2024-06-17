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
                <router-link to="/login">Login</router-link>
                <router-link to="/signup">Sign Up</router-link>
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
                          <li class="li"><a href="./en_construccion.html" target="_blank">Login</a></li>
                          <li class="li"><a href="./en_construccion.html" target="_blank">Sign up</a></li>
                      </ol>
                  </nav>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
export default {
// Lógica del componente
};
</script>

<style scoped>
/* Estilos del componente */
</style>