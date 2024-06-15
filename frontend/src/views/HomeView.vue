  <template>
    <div>
      <SectionHeader />
      <main>
        <section id="container-index">
            <h1 class="animacion">Bienvenido a La Fonoteca</h1>
            <p id="encabezado">La Fonoteca realiza una tarea de rescate y revaloración del patrimonio histórico, para poner a disposición de nuestros radioescuchas el acervo sonoro.</p>  
            <div id="boton_index"><router-link to="/construccion">Conocenos Más...</router-link></div>
        </section>
        <section class="container-mision">
            <h2 >Quienes somos</h2>
            <img class="img-mision" src="assets/Fono.jpg" alt="Imagen del local">
            <p class="text">Somos un grupo que se dedica a preservar y compartir la magia de la musica, de conectar con personas que comparten nuestros gustos y descubrir nuevas canciones que pueden emocionarnos y conmovernos. Es una manera de inmortalizar en la web esos momentos especiales en que una cancion nos transporta a un lugar, a un recuerdo, a un sentimiento. Esto es un homenaje a las melodias que han acompañado nuestra vida y nuestras emociones en cada momento. <br>Los invitamos a nuestro catalogo sonoro para conocer los mejores discos de la historia, ademas de poder disfrutar de estos clasicos tenes la posibilidad de llevarte las promos en vigencia, y vas a tener disponible nuestra biblioteca para conocer mas en profundidad los comienzos de este maravilloso mundo de la musica en discos de pasta.</p>
        </section>
        <section class="container-historia">
            <h3 id="history" >Historia</h3>
            <p class="text" >El vocablo "Fonoteca" fue introducido por <em><strong>Gabriel Timmory</strong></em> para la Fonoteca Nacional Francesa en 1932. Viene de las raices griegas fone (sonido) theke (caja) <br> Nuestra fonoteca se encarga de la investigacion, registro, conservacion y difusion del patrimonio sonoro, brindamos informacion y ademas tenemos a la venta los mejores clasicos de la historia, dejanos tus datos en contacto y nos comunicamos con vos. <br> Te compartimos sitios donde tambien podes recopilar informacion valiosa relacionada a nuestro patrimonio musical: <router-link to="/construccion">Click Aquí!</router-link></p>
        <div class="galeria">
            <ul class="productos">
                <li>
                    <h4 class="titulo-galeria">Fonoteca</h4>
                    <img src="assets/fonoteca_nacional_Arg_1.jpg" alt="Error al cargar imagen">
                    <p class="producto-descripcion">Argentina</p>
                    <p class="producto-año">1998</p>
                </li>
                <li>
                    <h4 class="titulo-galeria">Fonoteca</h4>
                    <img src="assets/memoria_cinematografica.jpg" alt="Error al cargar imagen">
                    <p class="producto-descripcion">Memoria sonora</p>
                    <p class="producto-año">Cinematografica</p>
                </li>
                <li>
                    <h4 class="titulo-galeria">Fonoteca</h4>
                    <img src="assets/Fonoteca_Nacional_Musica_1902.jpg" alt="Error al cargar imagen">
                    <p class="producto-descripcion">Buenos Aires</p>
                    <p class="producto-año">1902</p>
                </li>
            </ul>
        </div>
        </section>

        <section class="container-contenido" >
            <p class="text" >En <strong><em>"La Fonoteca"</em></strong> nos dedicamos a la venta de discos internacionacionales, pero el amor por los clasicos siempre esta, por eso elegimos este video para compartir del famoso cantante Carlos Gardel.</p>

            <div >
                <iframe class="container-video" src="https://www.youtube.com/embed/29UBiiLG5Z4?si=FC2PPcsYjZdq1QbZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    name: 'HomeView',
    components: {
      SectionHeader,
      SectionFooter
    }
  };
  </script>