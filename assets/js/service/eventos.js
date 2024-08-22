import { buscarPorNombre, consumoAnimales, renderizarImagen } from "./animalesService.js";

const eventoSelectChange = () => {
    const animal = document.querySelector('#animal');
    animal.addEventListener('change', async () => {
        const animales = await consumoAnimales();
        const animalBuscado = buscarPorNombre(animal.value, animales.animales);
        renderizarImagen('preview', animalBuscado);
    });
}

export{
    eventoSelectChange
}