
const nombre = prompt("Cómo te llamas?")
alert("Hola " + nombre + "! Bienvenido a mi portfolio!")
const frases = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "No cuentes los días, haz que los días cuenten.",
    "La mente es todo. Lo que pienses, eso serás.",
    "La felicidad es una mariposa que cuando la persigues siempre está fuera de tu alcance, pero que si te sientas silenciosamente puede posarse sobre ti.",
    "La mejor venganza es un gran éxito.",
    "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
    "La vida es un 10% lo que me pasa y un 90% cómo reacciono a ello."
];
function generarFrase() {
    const indice = Math.floor(Math.random() * frases.length);
    const fraseAleatoria = frases[indice];
    document.getElementById("frase").innerText = fraseAleatoria;
}
document.getElementById("btn-generar").addEventListener("click", generarFrase);