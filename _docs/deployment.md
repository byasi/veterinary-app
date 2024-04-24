---
title: Deployment
---

# Deployment

## Node.js Server

Next.js can be deployed to any hosting provider that supports Node.js. Make sure your `package.json` 
has the `"build"` and `"start"` scripts:

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

`next build` builds the production application in the `.next` folder. After building, `next start` 
starts a Node.js server that supports hybrid pages, serving both statically generated and 
server-side rendered pages.

## Static HTML Export

`next export` allows you to export your app to static HTML, which can be run standalone without the 
need of a Node.js server.

The exported app supports almost every feature of Next.js, including dynamic routes, prefetching, 
preloading and dynamic imports.

`next export` works by prerendering all pages to HTML. For dynamic routes, your page can export a 
`getStaticPaths` function to let the exporter know which HTML pages to generate for that route.

By default, `next export` will generate an `out` directory, which can be served by any static 
hosting service or CDN.

The choice of your server software isn’t important either. Since the output of the export command 
is completely platform-agnostic, there’s no need to explicitly use Node.

### Vercel Deployment

The easiest way to deploy Next.js to production is to use the `Vercel` platform from the creators of 
Next.js. `Vercel` is a cloud platform for static sites, hybrid apps, and Serverless Functions. Read 
more about it from [official docs](https://nextjs.org/docs/deployment)

### Netlify Deployment

Netlify lets you link a GitHub, GitLab, or Bitbucket repository to a site for continuous deployment. 
Each time you push to your Git provider, Netlify runs a build with your tool of choice and deploys 
the result to their CDN. Read more about it from 
[official docs](https://docs.netlify.com/configure-builds/get-started)

### Firebase Hosting

Using the Firebase CLI, you deploy files from local directories on your computer to your Hosting
server. Beyond serving static content, you can use Cloud Functions for Firebase or Cloud Run to
serve dynamic content and host microservices on your sites. Read more about it
from [official docs](https://firebase.google.com/docs/hosting).
