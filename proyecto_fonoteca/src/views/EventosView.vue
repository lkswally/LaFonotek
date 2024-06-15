<template>
    <div>
      <SectionHeader />
      <main id="main_eventos">
        <section id="inicio">
            <div id="slash">
                <img src="assets/guitarra3.png" alt="una imagen de Slash">
            </div>
            <div id="buscar_eventos">
                <h2 class="animacion">eventos 2024</h2>
                <form action="submit" method="post">
                    <input class="input" type="search" placeholder="Ingresa el lugar o evento">
                </form>
            </div>  
        </section>
        <h1>entradas para eventos</h1>	
        <section id="eventos">
            <h2 id="titulo_main">main event</h2>
            <div id="main_event">
                <img src="assets/clapton.jpg" alt="">
                <h3 class="event">Eric Clapton</h3>
                <p class="event2">20/09 - Estadio Jose Amalfitani</p>
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>     
            <h2 id="headliners">headliners</h2>
            <div id="headliner1">
                <img src="assets/louis-tomlinson.jpg" alt="">
                <h3 class="event">Louis Tomlinson</h3>
                <p class="event2">18/05 - Estadio Jose Amalfitani</p>
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>
            <div id="headliner2">
                <img src="assets/residente.jpg" alt="">
                <h3 class="event">Residente</h3>
                <p class="event2">27//09 - Movistar Arena</p>
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>
            <div id="headliner3">
                <img src="assets/cuarteto.jpg" alt="">
                <h3 class="event">Cuarteto de Nos</h3>
                <p class="event2">31/08 - Movistar Arena</p>
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>    
            <div id="headliner4">
                <img src="assets/lavela.jpg" alt="">
                <h3 class="event">La Vela Puerca</h3>
                <p class="event2">25/05 - Movistar Arena</p>
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>
            <h2 id="conciertos">conciertos</h2>
            <div id="concierto1">
                <img src="assets/jonas_brothers.jpg" alt="Imagen del cartel del recital de The Jonas Brothers">
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>
            <div id="concierto2">
                <img src="assets/karolG1.jpg" alt="Imagen del cartel del recital de Karol G">
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>
            <div id="concierto3">
                <img src="assets/NTVG.jpg" alt="Imagen del cartel del recital de no te va a gustar">
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>
            <div id="concierto4">
                <img src="assets/megadeth.jpg" alt="Imagen del cartel del recital de Megadeath">
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>
            <h2 id="teatros">teatros</h2>
            <div id="teatro1">
                <img src="assets/waterloo.png" alt="Imagen de obra de teatro Waterloo">
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>
            <div id="teatro2">
                <img src="assets/jorobado.png" alt="Imagen de la obra de teatro El Jorobado de Notre Damme">
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>
            <div id="teatro3">
                <img src="assets/hombresinnombre.png" alt="Imagen de la obra de teatro de El hombre sin nombre">
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>
            <div id="teatro4">
                <img src="assets/funeral.png" alt="Imagen de la obra de teatro El funeral de los objetos">
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Tickets</a></div>
            </div>
            <h2 id="bares">bares</h2>
            <div id="bar1">
                <img src="assets/bardefondo2.jpg" alt="Imagen de Bar de Fondo">
                <h4 class="titulo_bar">Bar de fondo</h4>
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Reserva</a></div>
            </div>
            <div id="bar2">
                <img src="assets/openfolk.jpg" alt="Imagen del Bar Openfolk">
                <h4 class="titulo_bar">Open Folk</h4>
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Reserva</a></div>
            </div>
            <div id="bar3">
                <img src="assets/theroxy.jpg" alt="Imagen del Bar The Roxy">
                <h4 class="titulo_bar">The Roxy</h4>
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Reserva</a></div>
            </div>
            <div id="bar4">
                <img src="assets/virasoro.jpg" alt="Imagen del Bar Virasoro">
                <h4 class="titulo_bar">Bar Virasoro</h4>
                <div class="boton_ticket"><a href="../Pages/en_contruccion.html" target="_blank">Reserva</a></div>
            </div>
        </section> 
    </main>
      <SectionFooter />
    </div>
  </template>
  
  <script>
  import SectionHeader from '@/components/SectionHeader.vue';
  import SectionFooter from '@/components/SectionFooter.vue';
  
  export default {
    name: 'EventosView',
    components: {
      SectionHeader,
      SectionFooter
    }
  };
  </script>