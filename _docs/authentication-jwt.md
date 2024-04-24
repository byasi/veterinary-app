---
title: JWT
---

# JSON Web Token (JWT)

Most auth providers use this strategy under the hood to provide access tokens. Currently, the app
doesn't cover the backend service, and this service is mocked (faked) using http client
interceptors. The implementation is basic, but enough to give you a starting point.

## How it was implemented

Since tokens are meant to be created on the backend server, they are built with encrypt, encode and
decode utility methods because they are not meant to be used on the client. These utilities can be
found in `src/utils/jwt`. These are for development purposes only, and you must remove (or avoid
using) them.

## How to use JWT Provider

The app is delivered with JWT Provider as default auth strategy. If you changed or removed it, and
you want it back, simply follow these steps:

### Step 1. Import the provider

Open `src/pages/_app.js` file, import the provider and wrap the App component with it.

```js
// src/pages/_app.js
import { AuthConsumer, AuthProvider } from '../contexts/jwt-context';

const App = (props) => {
  const { Component, pageProps } = props;
    
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};
```

### Step 2. Set the hook context

Open `src/hooks/use-auth.js` file and replace the current context the following line:

```js
import { AuthContext } from '../contexts/jwt-context';
```

## How to use auth

### Retrieve user profile

In the example below, you can find how it can be used in any component not just the `App`. Should
you want to use it in any other component, you'll have to import the `useAuth` hook and use it as
needed.

```jsx
// src/pages/index.js
import { useAuth } from '../hooks/use-auth';

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      Email: {user.email}
    </div>
  );
};
```

### Auth methods / actions

> For simplicity and space limitations, the code below is used only to exemplify, actual code can be found in the components.

```jsx
// src/pages/index.js
import { useAuth } from '../hooks/use-auth';

const Home = () => {
  const { login } = useAuth();
  
  const handleLogin = () => {
    // Email/username and password
    login('demo@devias.io', 'Password123!');
  };

  return (
    <div>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
```

## Implemented flows

Currently, the app only covers the main flows:

- Register
- Login
- Logout
