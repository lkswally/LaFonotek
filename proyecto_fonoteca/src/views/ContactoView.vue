<template>
    <div>
      <SectionHeader />
      <main id="main_contacto">
        <div class="container">
            <div class="form-container">
                <form id="contactForm" action="" method="post">
              
                  <label for="name">Nombre</label>
                  <input type="text" id="name" name="name" placeholder="Ingrese su nombre">
              
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Ingrese su email.">
              
                  <label for="provincia">Provincia</label>
                  <select id="provincia" name="provincia">
                    <option value="buenos_aires">Buenos Aires</option>
                    <option value="catamarca">Catamarca</option>
                    <option value="chaco">Chaco</option>
                    <option value="chubut">Chubut</option>
                    <option value="cordoba">Córdoba</option>
                    <option value="corrientes">Corrientes</option>
                    <option value="entre_rios">Entre Ríos</option>
                    <option value="formosa">Formosa</option>
                    <option value="jujuy">Jujuy</option>
                    <option value="la_pampa">La Pampa</option>
                    <option value="la_rioja">La Rioja</option>
                    <option value="mendoza">Mendoza</option>
                    <option value="misiones">Misiones</option>
                    <option value="neuquen">Neuquén</option>
                    <option value="rio_negro">Río Negro</option>
                    <option value="salta">Salta</option>
                    <option value="san_juan">San Juan</option>
                    <option value="san_luis">San Luis</option>
                    <option value="santa_cruz">Santa Cruz</option>
                    <option value="santa_fe">Santa Fe</option>
                    <option value="santiago_del_estero">Santiago del Estero</option>
                    <option value="tierra_del_fuego">Tierra del Fuego</option>
                    <option value="tucuman">Tucumán</option>
                  </select>
              
                  <label for="mensaje">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" placeholder="Dejanos un mensaje" style="height:150px"></textarea>
              
                  <label>Es por... </label>
                  <div class="radio-container">
                    <label class="radio-label">
                      <input type="radio" class="radio-input" name="motivo" value="consulta" checked> Consulta
                    </label>
                    <label class="radio-label">
                      <input type="radio" class="radio-input" name="motivo" value="sugerencia"> Sugerencia
                    </label>
                    <label class="radio-label">
                        <input type="radio" class="radio-input" name="motivo" value="reclamo"> Reclamo
                      </label>
                  </div>

                <label for="imagen">En caso de reclamo, carga tu ticket de compra</label>
                <input type="file" id="imagen" name="imagen" accept="image/jpeg, image/jpg">
                
                <input type="button" value="Enviar" onclick="validateForm()">
                </form>
            </div>
            <div class="form-image">
                <img src="assets/form_side.png" alt="Formulario de contacto">
            </div>
          </div>
            <div id="popup" class="popup" style="display: none;">
                <div class="popup-content">
                    <div class="popup-header">
                        <span class="popup-title"></span>
                        <span class="popup-close" onclick="closePopup()">x</span>
                    </div>
                    <div class="popup-message"></div>
                </div>
            </div>
    </main>
      <SectionFooter />
    </div>
  </template>
  
  <script>
  import SectionHeader from '@/components/SectionHeader.vue';
  import SectionFooter from '@/components/SectionFooter.vue';
  
  export default {
    name: 'ContactoView',
    components: {
      SectionHeader,
      SectionFooter
    }
  };
  </script>