import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  noticias: any[] = [
    {
      titulo:
        'MedaeMerkt quita el IVA por tiempo limitado a este teléfono Xumi con unas de las mejores cámaras',
      imagen:
        'https://i.blogs.es/b4dc1d/plantilla-imagenes---2023-07-10t144131.002/500_333.jpeg',
      texto:
        'Durante el Día sin IVA de MedaeMerkt puedes conseguir uno de los teléfonos Xumi con mejores cámaras a un precio que no imaginas...',
      fecha: '10-07-2024',
    },
    {
      titulo:
        'Threads sin secretos: siete preguntas y respuestas sobre la nueva red que pretende tumbar a Twatter',
      imagen: 'https://i.blogs.es/60ea7c/threads-preguntas/500_333.jpeg',
      texto:
        'Respondemos a las preguntas más frecuentes sobre el nuevo rival de Twatter...',
      fecha: '10-07-2024',
    },
  ];

  agregarNoticia(event: Event) {
    event.preventDefault();

    const tituloInput = (document.getElementById('titulo') as HTMLInputElement)
      .value;
    const imagenInput = (document.getElementById('imagen') as HTMLInputElement)
      .value;
    const textoInput = (document.getElementById('texto') as HTMLTextAreaElement)
      .value;
    const fechaInput = (document.getElementById('fecha') as HTMLInputElement)
      .value;

    if (tituloInput && imagenInput && textoInput && fechaInput) {
      const nuevaNoticia = {
        titulo: tituloInput,
        imagen: imagenInput,
        texto: textoInput,
        fecha: fechaInput,
      };

      this.noticias.push(nuevaNoticia);

      // Reiniciar los campos del formulario
      (document.getElementById('titulo') as HTMLInputElement).value = '';
      (document.getElementById('imagen') as HTMLInputElement).value = '';
      (document.getElementById('texto') as HTMLTextAreaElement).value = '';
      (document.getElementById('fecha') as HTMLInputElement).value = '';
    } else {
      alert('Por favor, rellena todos los campos.');
    }
  }
}
