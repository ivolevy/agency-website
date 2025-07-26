// Utilidades para optimización de rendimiento

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fonts = [
    '/src/assets/fonts/hero/Hero-Regular.ttf',
    '/src/assets/fonts/hero/Hero-Bold.ttf'
  ];

  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font;
    link.as = 'font';
    link.type = 'font/ttf';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // Preload critical images
  const criticalImages = [
    '/dota.webp'
  ];

  criticalImages.forEach(image => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = image;
    link.as = 'image';
    document.head.appendChild(link);
  });
};

// Intersection Observer para lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  });
};

// Debounce function para optimizar eventos
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function para optimizar eventos
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Optimizar scroll events
export const optimizeScroll = (callback) => {
  return throttle(callback, 16); // ~60fps
};

// Prefetch non-critical resources
export const prefetchResources = () => {
  // Prefetch other pages
  const routes = [
    '/politica-de-privacidad',
    '/aviso-legal',
    '/cookies'
  ];

  routes.forEach(route => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = route;
    document.head.appendChild(link);
  });
};

// Optimizar animaciones
export const optimizeAnimations = () => {
  // Reducir motion para usuarios que lo prefieren
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.1s');
  }
};

// Inicializar todas las optimizaciones
export const initPerformanceOptimizations = () => {
  preloadCriticalResources();
  prefetchResources();
  optimizeAnimations();
}; 