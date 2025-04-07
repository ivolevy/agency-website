#!/bin/bash
#para ejecutar: ./clear-cache.sh

echo "🧹 Limpiando cache del proyecto Dots Solutions..."

# Eliminar node_modules y archivos de lock
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# Limpiar la cache de npm (seguro aunque uses yarn)
npm cache clean --force

# Reinstalar dependencias
npm install

echo "✅ Proyecto limpio. Cache borrada y dependencias reinstaladas."
