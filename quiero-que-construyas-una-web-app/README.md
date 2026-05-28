# Vuelan Recibidos - Juego de Destinos

Web app interactiva para pantalla tactil 16:9, pensada para una activacion de viajes de Toque & Toque.

## Correr localmente

```bash
npm install
npm run dev
```

Despues abrir la URL que muestra Vite, normalmente:

```bash
http://localhost:5173
```

Para generar una version lista para publicar:

```bash
npm run build
```

## Editar preguntas

Las preguntas estan en:

```bash
src/data/questions.js
```

Cada pregunta puede ser:

- `multiple-choice`
- `map`
- `language`
- `experience`
- `writing`

Para sumar una pregunta nueva, copiar un objeto existente, cambiar `id`, `question`, `country`, `answer`, `options` y `image`.

## Imagenes y logos

Colocar imagenes de destinos en:

```bash
public/assets/destinations/
```

Ejemplo:

```bash
public/assets/destinations/hoi-an.jpg
```

Colocar logos de marca en:

```bash
public/assets/logos/
```

Si una imagen no existe, la app muestra automaticamente un bloque visual con el nombre del destino para no romper la partida.

## Facultades

La lista editable esta al final de:

```bash
src/data/questions.js
```

Buscar `faculties` y agregar, quitar o renombrar opciones.

## Ranking y LocalStorage

La app guarda partidas en LocalStorage con esta clave:

```bash
vuelan-recibidos-games
```

Desde la pantalla de ranking se puede resetear con el boton de papelera.

Tambien se puede borrar manualmente desde la consola del navegador:

```js
localStorage.removeItem('vuelan-recibidos-games')
```

## Pantalla completa

La app tiene un boton con icono de pantalla completa en el encabezado.

Tambien se puede usar el atajo del navegador:

- macOS: `Ctrl + Cmd + F` en algunos navegadores
- Chrome/Edge: menu del navegador, pantalla completa

## Publicar gratis en Vercel

1. Subir el proyecto a GitHub.
2. Entrar a https://vercel.com.
3. Crear un nuevo proyecto e importar el repositorio.
4. Framework preset: `Vite`.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.
