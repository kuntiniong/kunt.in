My personal website built with Astro.

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## File Structure

```
kunt.in/
      ├── src/
      │   ├── layouts/
      │   │   └── Layout.astro      // main layout
      │   └── pages/
      │       ├── index.astro       // home page
      │       ├── about.astro       // about page
      │       ├── projects.astro    // projects page
      │       ├── courses.astro     // courses page
      │       └── contact.astro     // contact page
      ├── public/
      │   ├── assets/
      │   │   ├── css/
      │   │   │   └── styles.css    // global css
      │   │   ├── images/
      │   │   └── js/
      │   │       ├── animation.js  // gsap animations
      │   │       └── dark-mode.js  // dark mode toggle
      │   └── CNAME                 // custom domain
      ├── astro.config.mjs          // astro config
      ├── package.json
      └── README.md
```

## Deployment

This site is deployed on Vercel with automatic deployments from the main branch. 