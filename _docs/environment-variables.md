---
title: Environment Variables
---

# Environment Variables

By default, Next.js compiler looks for `.env` file in projects root folder and reads
its content. In the project files you'll find a file `.env.example` that contains all the
environment variables that were used in the app environment. **Not all are required.**

## Loading Environment Variables

Next.js has built-in support for loading environment variables from `.env` file into `process.env`.

An example `.env`:

```shell
DB_HOST=localhost
DB_USER=myuser
DB_PASS=mypassword
```

This loads `process.env.DB_HOST`, `process.env.DB_USER`, and `process.env.DB_PASS` into the Node.js 
environment automatically allowing you to use them in Next.js data fetching methods and API routes.

For example, using `getStaticProps`:

```js
// pages/index.js
export async function getStaticProps() {
  const db = await myDB.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  });
  // ...
}
```

## Exposing Environment Variables to the Browser

By default environment variables are only available in the Node.js environment, meaning they won't
be exposed to the browser.

In order to expose a variable to the browser you have to prefix the variable with `NEXT_PUBLIC_`. 
For example:

```shell
NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
```

> WARNING: Do not store any secrets (such as private API keys or passwords) in the public variables!
> These environment variables are embedded into the build, meaning anyone can view them by 
> inspecting your app's files.

## Private Variables

Having access to the `NODE_ENV` is also useful for performing actions conditionally:

```js
if (process.env.NODE_ENV !== 'production') {
  analytics.disable();
}
```

Read more about environment
variables [here](https://create-react-app.dev/docs/adding-custom-environment-variables).
