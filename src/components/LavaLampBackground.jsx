import { useEffect, useRef } from "react";

export const LavaLampBackground = () => {
  const canvasRef = useRef(null);
  const mousePosRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Obtener el contenedor padre para calcular posición relativa
    const container = canvas.parentElement;
    if (!container) return;

    // Configurar tamaño del canvas
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Tracking del cursor dentro del contenedor
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = { x: null, y: null };
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Detectar si es mobile
    const isMobile = window.innerWidth <= 768;
    
    // Configuración de blobs (bolas de lámpara de lava)
    const blobs = [];
    const blobCount = 4;

    // Colores rosas/pink para el efecto
    const colors = [
      { r: 255, g: 128, b: 191 }, // Pink principal
      { r: 234, g: 156, b: 156 }, // Pink claro
      { r: 255, g: 100, b: 180 }, // Pink intenso
      { r: 240, g: 120, b: 200 }, // Pink medio
    ];

    // Velocidades más altas en mobile
    const baseSpeed = isMobile ? 1.2 : 0.5;
    const maxSpeed = isMobile ? 2.5 : 1;

    // Crear blobs
    for (let i = 0; i < blobCount; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 80 + Math.random() * 120,
        vx: (Math.random() - 0.5) * baseSpeed,
        vy: (Math.random() - 0.5) * baseSpeed,
        color: colors[i % colors.length],
        opacity: 0.3 + Math.random() * 0.2,
      });
    }

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Detectar mobile dinámicamente
      const isMobileNow = window.innerWidth <= 768;
      const currentMaxSpeed = isMobileNow ? 2.5 : 1;
      const variationFactor = isMobileNow ? 0.04 : 0.02;

      // Actualizar y dibujar blobs
      const mousePos = mousePosRef.current;
      blobs.forEach((blob) => {
        // Reacción al cursor: los blobs se alejan cuando el cursor está cerca
        if (mousePos.x !== null && mousePos.y !== null) {
          const dx = mousePos.x - blob.x;
          const dy = mousePos.y - blob.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const influenceRadius = 200;

          if (distance < influenceRadius && distance > 0) {
            // Fuerza de repulsión que aumenta cuanto más cerca está el cursor
            const force = (influenceRadius - distance) / influenceRadius;
            const angle = Math.atan2(dy, dx);
            // Aplicar fuerza de repulsión (alejándose del cursor)
            blob.vx -= Math.cos(angle) * force * 0.3;
            blob.vy -= Math.sin(angle) * force * 0.3;
          }
        }

        // Movimiento suave y orgánico
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Rebotar en los bordes con suavidad
        if (blob.x < blob.radius || blob.x > canvas.width - blob.radius) {
          blob.vx *= -1;
        }
        if (blob.y < blob.radius || blob.y > canvas.height - blob.radius) {
          blob.vy *= -1;
        }

        // Mantener dentro del canvas
        blob.x = Math.max(blob.radius, Math.min(canvas.width - blob.radius, blob.x));
        blob.y = Math.max(blob.radius, Math.min(canvas.height - blob.radius, blob.y));

        // Variación suave del tamaño (efecto de respiración)
        const sizeVariation = Math.sin(Date.now() * 0.001 + blob.x * 0.01) * 10;
        const currentRadius = blob.radius + sizeVariation;

        // Crear gradiente radial para cada blob
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, currentRadius
        );
        gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.opacity})`);
        gradient.addColorStop(0.5, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);

        // Dibujar blob con gradiente
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Variación suave de velocidad (movimiento más orgánico)
        // Más variación en mobile para movimiento más dinámico
        blob.vx += (Math.random() - 0.5) * variationFactor;
        blob.vy += (Math.random() - 0.5) * variationFactor;

        // Limitar velocidad máxima (más alta en mobile)
        blob.vx = Math.max(-currentMaxSpeed, Math.min(currentMaxSpeed, blob.vx));
        blob.vy = Math.max(-currentMaxSpeed, Math.min(currentMaxSpeed, blob.vy));
      });

      // Dibujar conexiones suaves entre blobs cercanos
      for (let i = 0; i < blobs.length; i++) {
        for (let j = i + 1; j < blobs.length; j++) {
          const dx = blobs[i].x - blobs[j].x;
          const dy = blobs[i].y - blobs[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 300;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(blobs[i].x, blobs[i].y);
            ctx.lineTo(blobs[j].x, blobs[j].y);
            ctx.strokeStyle = `rgba(255, 128, 191, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="lava-lamp-canvas"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "auto",
        opacity: 0.6,
      }}
    />
  );
};

