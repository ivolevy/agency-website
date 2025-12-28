# Guía de Implementación: Colores, Tipografías y Partículas con Hover

Esta guía contiene toda la información necesaria para replicar el diseño de Dota Solutions en tu sitio personal.

## 🎨 Colores

### Colores Principales
```css
:root {
  /* Rosa principal (usado en botones, acentos) */
  --rosa-principal: #ff80bf;        /* rgb(255, 128, 191) */
  
  /* Rosa claro */
  --rosa-claro: #FFA7C4;            /* rgb(255, 167, 196) */
  
  /* Rosa salmón (usado en gradientes) */
  --rosa-salmon: #ea9c9c;           /* rgb(234, 156, 156) */
  
  /* Grises */
  --gris-claro: #D7D6CE;
  --gris-oscuro: #2A2A2A;
  --gris-opaco: #353535;
  
  /* Fondo */
  --negro-mate: #090909;
  --negro: #000000;
}
```

### Gradientes Usados
```css
/* Gradiente principal para botones y elementos destacados */
background: linear-gradient(to bottom, #ff80bf, #ea9c9c);

/* Ejemplo de uso con sombra */
background: linear-gradient(to bottom, #ff80bf, #ea9c9c);
box-shadow: 0px 4px 15px rgba(255, 128, 191, 0.3);
```

### Colores para Partículas
Los colores RGB usados en las partículas:
- Rosa principal: `rgb(255, 128, 191)`
- Rosa claro: `rgb(255, 167, 196)`
- Rosa salmón: `rgb(234, 156, 156)`

---

## 🔤 Tipografías

### Fuentes de Google Fonts

Agrega estos enlaces en el `<head>` de tu HTML:

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link 
  href="https://fonts.googleapis.com/css2?family=Inria+Serif:wght@300;400;700&family=MuseoModerno:wght@100..900&family=Inter:wght@200;300;400&display=swap" 
  rel="stylesheet">
<!-- Titles: Instrument Serif -->
<link 
  href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" 
  rel="stylesheet">
```

### Configuración CSS

```css
/* Fuente base del sitio */
html, body {
  font-family: "MuseoModerno", sans-serif;
  font-weight: 300;
  background-color: #000;
}

/* Títulos principales (h1) - Instrument Serif */
h1 {
  font-family: "Instrument Serif", serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Texto secundario y descripciones - Inter */
.text-secondary {
  font-family: "Inter", sans-serif;
  font-weight: 300;
}

/* Texto normal - MuseoModerno */
body {
  font-family: "MuseoModerno", sans-serif;
  font-weight: 300;
}
```

### Fuentes Disponibles
- **MuseoModerno**: Fuente principal del sitio (sans-serif)
- **Instrument Serif**: Para títulos principales (serif)
- **Inter**: Para texto secundario y descripciones (sans-serif)

---

## ✨ Componente de Partículas con Hover

### React Component (ParticlesBackground.jsx)

```jsx
import { useEffect, useRef } from "react";

export const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef();
  const particlesRef = useRef([]);
  const mousePosRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      mousePosRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Colores de las partículas (en RGB)
    const colorSets = [
      { r: 255, g: 128, b: 191 }, // rosa principal
      { r: 255, g: 167, b: 196 }, // rosa claro
      { r: 234, g: 156, b: 156 }, // rosa salmón
    ];

    // Calcular número de partículas según el tamaño del canvas
    const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
    particlesRef.current = Array.from({ length: particleCount }, () => {
      const colorSet = colorSets[Math.floor(Math.random() * colorSets.length)];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        r: colorSet.r,
        g: colorSet.g,
        b: colorSet.b,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mousePos = mousePosRef.current;

      // Actualizar posición de partículas con efecto hover
      particles.forEach((particle) => {
        if (mousePos) {
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const influenceRadius = 250;

          // Las partículas se alejan del cursor
          if (distance < influenceRadius && distance > 0) {
            const force = (influenceRadius - distance) / influenceRadius;
            const angle = Math.atan2(dy, dx);

            particle.vx -= Math.cos(angle) * force * 0.15;
            particle.vy -= Math.sin(angle) * force * 0.15;
          }
        }

        // Movimiento de partículas
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Fricción para suavizar el movimiento
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mantener dentro del canvas
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      });

      // Dibujar líneas entre partículas cercanas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const particle = particles[i];
          const otherParticle = particles[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 128, 191, ${(1 - distance / 120) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      }

      // Dibujar las partículas
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.r}, ${particle.g}, ${particle.b}, ${particle.opacity})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles-background"
      style={{ 
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "transparent",
        pointerEvents: "none"
      }}
    />
  );
};
```

### Versión Vanilla JavaScript (sin React)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Partículas con Hover</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #000;
      overflow: hidden;
    }
    
    #particles-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: transparent;
      pointer-events: none;
    }
  </style>
</head>
<body>
  <canvas id="particles-canvas"></canvas>

  <script>
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mousePos = null;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      mousePos = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleMouseLeave = () => {
      mousePos = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const colorSets = [
      { r: 255, g: 128, b: 191 }, // rosa principal
      { r: 255, g: 167, b: 196 }, // rosa claro
      { r: 234, g: 156, b: 156 }, // rosa salmón
    ];

    const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
    particles = Array.from({ length: particleCount }, () => {
      const colorSet = colorSets[Math.floor(Math.random() * colorSets.length)];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        r: colorSet.r,
        g: colorSet.g,
        b: colorSet.b,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        if (mousePos) {
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const influenceRadius = 250;

          if (distance < influenceRadius && distance > 0) {
            const force = (influenceRadius - distance) / influenceRadius;
            const angle = Math.atan2(dy, dx);

            particle.vx -= Math.cos(angle) * force * 0.15;
            particle.vy -= Math.sin(angle) * force * 0.15;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vx *= 0.98;
        particle.vy *= 0.98;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const particle = particles[i];
          const otherParticle = particles[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 128, 191, ${(1 - distance / 120) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.r}, ${particle.g}, ${particle.b}, ${particle.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
  </script>
</body>
</html>
```

---

## 📝 Uso del Componente

### En React

```jsx
import { ParticlesBackground } from './components/ParticlesBackground';

function App() {
  return (
    <div>
      <ParticlesBackground />
      {/* Tu contenido aquí */}
    </div>
  );
}
```

### Estilos CSS Adicionales

```css
/* Para el contenedor de partículas */
.particles-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: transparent;
  pointer-events: none;
}

/* Asegúrate de que el contenido esté por encima */
.content {
  position: relative;
  z-index: 1;
}
```

---

## 🎯 Resumen de Parámetros Ajustables

### Partículas
- **Densidad**: `particleCount = Math.floor((canvas.width * canvas.height) / 8000)`
  - Número menor = más partículas
  - Número mayor = menos partículas

- **Velocidad**: `vx: (Math.random() - 0.5) * 0.3`
  - Aumenta 0.3 para más velocidad

- **Tamaño**: `size: Math.random() * 2 + 0.5`
  - Cambia el rango para partículas más grandes/pequeñas

- **Radio de influencia del hover**: `influenceRadius = 250`
  - Aumenta para mayor área de efecto

- **Distancia de conexión**: `distance < 120`
  - Aumenta para más líneas conectadas

---

## 🚀 Ejemplo Completo de Integración

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Sitio Personal</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100..900&family=Inter:wght@200;300;400&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: "MuseoModerno", sans-serif;
      font-weight: 300;
      background-color: #000;
      color: #fff;
    }
    
    h1 {
      font-family: "Instrument Serif", serif;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    
    #particles-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    }
    
    .content {
      position: relative;
      z-index: 1;
      padding: 50px;
      min-height: 100vh;
    }
    
    .btn {
      background: linear-gradient(to bottom, #ff80bf, #ea9c9c);
      color: #000;
      padding: 12px 24px;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      font-weight: 600;
      box-shadow: 0px 4px 15px rgba(255, 128, 191, 0.3);
      transition: transform 0.3s ease;
    }
    
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0px 6px 20px rgba(255, 128, 191, 0.4);
    }
  </style>
</head>
<body>
  <canvas id="particles-canvas"></canvas>
  
  <div class="content">
    <h1>Mi Sitio Personal</h1>
    <p>Contenido aquí...</p>
    <button class="btn">Botón con estilo</button>
  </div>

  <!-- Incluir el script de partículas aquí -->
  <script>
    // ... código de partículas de arriba ...
  </script>
</body>
</html>
```

---

¡Listo! Con esta guía puedes replicar completamente el diseño de Dota Solutions en tu sitio personal.



