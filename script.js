// ================= FECHA INICIO =================
const fechaInicio = new Date(2024, 9, 1); // 1 Octubre 2024

// ================= CONTADOR =================
function calcularTiempo() {
    const ahora = new Date();

    let años = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();
    let horas = ahora.getHours() - fechaInicio.getHours();
    let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
    let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

    if (segundos < 0) { minutos--; segundos += 60; }
    if (minutos < 0) { horas--; minutos += 60; }
    if (horas < 0) { dias--; horas += 24; }
    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
        dias += ultimoMes;
    }
    if (meses < 0) { años--; meses += 12; }

    return { años, meses, dias, horas, minutos, segundos };
}

function iniciarContador() {
    const numero = document.getElementById("contadorAnimado");
    const detalle = document.getElementById("detalleTiempo");

    let ultimoMinuto = null;

    function actualizar() {
        const tiempo = calcularTiempo();

        // Total días exactos
        const totalDias = Math.floor((new Date() - fechaInicio) / (1000 * 60 * 60 * 24));
        numero.textContent = totalDias;

        // Mostrar tiempo exacto
        detalle.innerHTML = `
            ${tiempo.años} años • 
            ${tiempo.meses} meses • 
            ${tiempo.dias} días • 
            ${tiempo.horas} horas • 
            ${tiempo.minutos} minutos • 
            ${tiempo.segundos} segundos ❤️
        `;

        // 💖 Latido cada minuto
        if (tiempo.minutos !== ultimoMinuto) {
            numero.classList.remove("latido"); // reinicia animación
            void numero.offsetWidth;           // fuerza reflow
            numero.classList.add("latido");
            ultimoMinuto = tiempo.minutos;
        }
    }

    actualizar();
    setInterval(actualizar, 1000); // actualización exacta cada segundo
}

// ================= MENSAJE =================
function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.style.display = "block";
    mensaje.classList.add("show");
    mensaje.scrollIntoView({ behavior: "smooth" });
}

// ================= ANIMACIONES =================
function crearAnimaciones() {
    const contenedor = document.querySelector('.animaciones');

    const imgs = [
        "IMG_0694.PNG",
        "IMG_0691.PNG",
        "IMG_0494.PNG",
        "IMG_0772.PNG",
        "IMG_0774.PNG"
    ];

    setInterval(() => {
        const img = document.createElement("img");
        img.src = imgs[Math.floor(Math.random() * imgs.length)];

        img.style.position = "fixed";
        img.style.left = Math.random() * window.innerWidth + "px";
        img.style.top = "-100px";
        img.style.width = 40 + Math.random() * 40 + "px";
        img.style.animation = "caer 10s linear forwards";

        contenedor.appendChild(img);

        setTimeout(() => { img.remove(); }, 10000);
    }, 3000);
}

// ================= KARAOKE =================
function iniciarKaraoke() {
    const musica = document.getElementById("musica");
    const letra = document.getElementById("letraKaraoke");
    const foto = document.getElementById("fotoKaraoke");

    if (!musica) return;

  const karaoke = [
        { tiempo: 10.420, texto: "Nos conocimos un 14 de febrero en un party a la jura", img: "feb.png" },
        { tiempo: 16.250, texto: "Y ya pa'l 15 estabas desnuda en mi cama subiendo temperaturas", img: "cama.png" },
        { tiempo: 22.080, texto: "Con el tiempo me volví un fanático de todas tus locuraaaas", img: "fanatico.png" },
        { tiempo: 27.040, texto: "Yeh...", img: "ye.png" },
        { tiempo: 27.540, texto: "Y todos mis panas diciendo que le bajara, pues yo te bajé la lunaaaa", img: "luna.png" },
        { tiempo: 32.810, texto: "Enamorao' sin conoceeernos", img: "conocernos.png" },
        { tiempo: 35.720, texto: "Ansioso ya por veeernos", img: "vernos.png" },
        { tiempo: 38.250, texto: "Yo te he tirao' por el inteeerno", img: "tirado.png" },
        { tiempo: 41.120, texto: "Un perro que a ti te habla tieeeernoo", img: "max.png" },
        { tiempo: 44.050, texto: "Enamorao' sin conoceeernos", img: "dosmil.png" },
        { tiempo: 46.900, texto: "Ansioso ya por veeernos", img: "ansioso.png" },
        { tiempo: 50.420, texto: "Yeh, me volví un adicto a lo que tú me das", img: "das.png" },
        { tiempo: 54.000, texto: "Lo que me hiciste aquí se quedaaaa", img: "aqui.png" },
        { tiempo: 58.740, texto: "Yeh...", img: "ye2.png" },

        { tiempo: 62.120, texto: "2018 fue que te conocí afuera de tu universidad", img: "uni.png" },
        { tiempo: 67.450, texto: "Corrí con suerte de que andabas disponible de pura casualidad", img: "suerte.png" },
        { tiempo: 73.080, texto: "Perriamos en una rumba de San Valentín", img: "baile.png" },
        { tiempo: 76.120, texto: "Escuché que lo de ustedes ya tuvo un fin", img: "fin.png" },
        { tiempo: 78.950, texto: "Después de eso no dejamos de vernos ni por que fuese Navidaaad", img: "navidad.png" },
        { tiempo: 83.540, texto: "Quien diría que uno jodiendo se va enamorando", img: "enamorando.png" },
        { tiempo: 86.910, texto: "Se va conociendo, pa' qué perder tiempo pensando", img: "conociendo.png" },
        { tiempo: 91.250, texto: "En una estrategia en un plan perfecto", img: "plan.png" },
        { tiempo: 94.620, texto: "Quien diría que uno jodiendo se va enamorando", img: "jodiendo.png" },
        { tiempo: 98.090, texto: "Se va conociendo, pa' qué perder tiempo pensando", img: "hallo.png" },
        { tiempo: 102.050, texto: "En una estrategia en un plan perfecto", img: "plan.png" },
        { tiempo: 105.920, texto: "Enamorao' sin conoceeernos", img: "yapor.png" },
        { tiempo: 108.950, texto: "Ansioso ya por veeernos", img: "ansioso.png" },
        { tiempo: 111.820, texto: "Yo te he tirao' por el inteeerno", img: "interno.png" },
        { tiempo: 114.250, texto: "Un perro que a ti te habla tieeeernoo", img: "lucas.png" },
        { tiempo: 117.080, texto: "Enamorao' sin conoceeernos", img: "veinte.png" },
        { tiempo: 120.110, texto: "Ansioso ya por veeernos", img: "vernos.png" },
        { tiempo: 124.050, texto: "Yeh, me volví un adicto a lo que tú me das", img: "tu.png" },
        { tiempo: 127.600, texto: "Lo que me hiciste aquí se quedaaaa", img: "lo.png" }, 
        { tiempo: 130.800, texto: ".......", img: "outro.png" },
        { tiempo: 138.800, texto: "Lo que me hiciste aqui se quedaaaaaa", img: "dedo.png" },
        { tiempo: 142.000, texto: ".......", img: "sonido.png" },


    
    ];

    let lineaActual = -1;

    function actualizarKaraoke() {
        const tiempoActual = musica.currentTime;

        for (let i = karaoke.length - 1; i >= 0; i--) {
            if (tiempoActual >= karaoke[i].tiempo) {
                if (lineaActual !== i) {
                    lineaActual = i;
                    letra.textContent = karaoke[i].texto;
                    foto.style.opacity = 0;
                    setTimeout(() => {
                        foto.src = karaoke[i].img;
                        foto.style.opacity = 1;
                    }, 300);
                }
                break;
            }
        }
    }

    setInterval(actualizarKaraoke, 100);
    musica.addEventListener("seeked", () => { lineaActual = -1; });
}

// ================= INICIAR TODO =================
window.onload = function () {
    iniciarContador();
    crearAnimaciones();
    iniciarKaraoke();
};