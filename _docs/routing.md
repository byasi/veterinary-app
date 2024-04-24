---
title: Routing
---

# Routing

Next.js has a file-system based router built on the concept of pages.

When a file is added to the `pages` directory it's automatically available as a route.

The files inside the `pages` directory can be used to define most common patterns.

## Index routes

The router will automatically route files named index to the root of the directory.

- `pages/index.js` → `/`
- `pages/blog/index.js` → `/blog`

## Nested routes

The router supports nested files. If you create a nested folder structure files will be automatically routed in the same way still.

- `pages/blog/first-post.js` → `/blog/first-post`
- `pages/dashboard/settings/username.js` → `/dashboard/settings/username`

## Dynamic route segments

Defining routes by using predefined paths is not always enough for complex applications. In Next.js
you can add brackets to a page ([param]) to create a dynamic route (a.k.a. url slugs, pretty urls, 
and others).

To match a dynamic segment you can use the bracket syntax. This allows you to match named parameters.

- `pages/blog/[slug].js` → `/blog/:slug` (`/blog/hello-world`)
- `pages/[username]/settings.js` → `/:username/settings` (`/foo/settings`)
- `pages/post/[...all].js` → `/post/*` (`/post/2020/id/title`)
