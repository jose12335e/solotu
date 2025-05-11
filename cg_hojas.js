const chapters = document.querySelectorAll('.chapter');
let currentIndex = 0;

function showChapter(index) {
  // Ocultar todos los capítulos
  chapters.forEach((chapter, i) => {
    chapter.style.display = i === index ? 'block' : 'none';
  });
}
    // Actualizar el botón "Siguiente" y "Anterior"
{
function nextpage0() {
  window.location.href = "capitulo1.html";
      }      
function prevpage() {
  window.location.href = "introduccion.html";
}
function nextpage() {
  window.location.href = "capitulo2.html";
}
function prevpage2() {
  window.location.href = "capitulo1.html";
}
function nextpage2() {
  window.location.href = "capitulo3.html";
}
function prevpage3() {
  window.location.href = "capitulo2.html";
}
function nextpage3() {
  window.location.href = "capitulo4.html";
}
function prevpage4() {
  window.location.href = "capitulo3.html";
}
function nextpage4() {
  window.location.href = "capitulo5.html";
}
function prevpage5() {  
  window.location.href = "capitulo4.html";
}
function nextpage5() {
  window.location.href = "capitulo6.html";
}
function prevpage6() {
  window.location.href = "capitulo5.html";
}
function nextpage6() {
  window.location.href = "capitulo7.html";
}
function prevpage7() {
  window.location.href = "capitulo6.html";
}
function nextpage7() {
  window.location.href = "conclucion.html";
}
function inicio() {
  window.location.href = "hojas.html";
}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex < chapters.length - 1) {
    currentIndex++;
    showChapter(currentIndex);
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showChapter(currentIndex);
  }
});

// Mostrar el primer capítulo al cargar
showChapter(currentIndex); 
}

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const chapters = document.querySelectorAll('.nav a');
    let unlockedChapters = 1; // Solo la introducción está desbloqueada inicialmente

    chapters.forEach((chapter, index) => {
        if (index >= unlockedChapters) {
            chapter.style.pointerEvents = 'none'; // Deshabilita el enlace
            chapter.style.opacity = '0.5'; // Reduce la opacidad para indicar que está bloqueado
        }

        chapter.addEventListener('click', function() {
            if (index < unlockedChapters) {
                // Simula la lectura del capítulo
                unlockedChapters = Math.max(unlockedChapters, index + 2);
                localStorage.setItem('unlockedChapters', unlockedChapters);
            }
        });
    });

    // Recupera el estado de los capítulos desbloqueados al cargar la página
    const savedUnlockedChapters = localStorage.getItem('unlockedChapters');
    if (savedUnlockedChapters) {
        unlockedChapters = parseInt(savedUnlockedChapters, 10);
    }
});