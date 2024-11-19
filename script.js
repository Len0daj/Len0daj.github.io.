
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('.divisiones_contenido img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});


const toggleThemeBtn = document.createElement('button');
toggleThemeBtn.textContent = 'Modo Claro/Oscuro';
toggleThemeBtn.style.position = 'fixed';
toggleThemeBtn.style.bottom = '10px';
toggleThemeBtn.style.right = '10px';
toggleThemeBtn.style.padding = '10px 20px';
toggleThemeBtn.style.backgroundColor = '#249b6e';
toggleThemeBtn.style.color = '#fff';
toggleThemeBtn.style.border = 'none';
toggleThemeBtn.style.borderRadius = '5px';
toggleThemeBtn.style.cursor = 'pointer';
document.body.appendChild(toggleThemeBtn);

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    toggleThemeBtn.textContent = document.body.classList.contains('dark-theme') 
        ? 'Modo Oscuro Activado' 
        : 'Modo Claro/Oscuro';
});


const darkThemeStyles = document.createElement('style');
darkThemeStyles.textContent = `
    body.dark-theme {
        background-color: #121212;
        color: #ffffff;
    }
    body.dark-theme nav {
        background-color: #333333;
    }
    body.dark-theme .btn {
        background-color: #555555;
    }
    body.dark-theme .logo-funcion {
        filter: invert(1); /* Invertir colores para mejor contraste */
    }
`;
document.head.appendChild(darkThemeStyles);

document.querySelectorAll('#seccion_descargas, #seccion_comentarios').forEach(section => {
    section.addEventListener('click', () => {
        alert('Esta sección está en desarrollo. ¡Próximamente!');
    });
});


document.addEventListener('submit', e => {
    e.preventDefault();
    alert('Formulario enviado con éxito.');
});


window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        document.querySelector('.contenido_inf').style.flexDirection = 'column';
    } else {
        document.querySelector('.contenido_inf').style.flexDirection = 'row';
    }
});

const secciones = {
    inicio: document.getElementById('seccion_inicio'),
    funciones: document.getElementById('seccion_funciones'),
    descargas: document.getElementById('seccion_descargas'),
    comentarios: document.getElementById('seccion_comentarios')
};

const botones = document.querySelectorAll('nav a');

const irASeccion = (id) => {
    const seccion = secciones[id];
    if (seccion) {
        seccion.scrollIntoView({
            behavior: 'smooth'
        });
    }
};


document.body.style.overflow = 'hidden';

botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        const idSeccion = boton.getAttribute('href').substring(1);
        irASeccion(idSeccion);
    });
});

const formularioComentarios = document.getElementById('formulario_comentarios');
const comentariosGuardados = document.querySelector('.comentarios-guardados');

// Manejo de envío de formulario
document.getElementById('formulario_comentarios').addEventListener('submit', (e) => {
    e.preventDefault();

    // Capturar datos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validar que todos los campos estén completos
    if (nombre && email && asunto && mensaje) {
        alert(`Gracias, ${nombre}. Hemos recibido tu mensaje.`);
        document.getElementById('formulario_comentarios').reset(); // Limpiar formulario
    } else {
        alert('Por favor, completa todos los campos.');
    }
});



