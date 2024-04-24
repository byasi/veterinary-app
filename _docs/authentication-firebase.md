---
title: Firebase
---

# Firebase

Firebase is a complete set of solutions, from Analytics to Cloud Functions. In the app at hand, only
the authentication service is used, although you can decide to use more of their features. Please
refer to their [documentation](https://firebase.google.com/docs)
as you deem necessary.

## Set up your Firebase account

The documentation for this, can be found in the official documentation of the service, mentioned
above.

## Configuration

To configure Firebase client library you have to open (or create) `.env` file in the project's root
folder and set the following variables as presented in your Firebase account settings:

```shell
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
```

If you do not want to set up environment variables, settings can be applied simply on
the `firebaseConfig` object found in the `src/config.js` file.

```js
export const firebaseConfig = {
  apiKey: '',
  appId: '',
  authDomain: '',
  databaseURL: '',
  messagingSenderId: '',
  projectId: '',
  storageBucket: ''
};
```

## How it was implemented

As mentioned above, Firebase offers a set of components to help your development process, although
they're not used in the app.

The `firebase.auth` factory from the library is used to create and provide the authentication
feature to a context (which wraps the content of the `App` component).

This aforementioned context is then used in the component tree to access the `Auth` public methods.
It provides the user authentication status and user profile, if available.

## How to use Firebase Auth Provider

By default, the project uses a mocked `JWT provider` (as in: it doesn't use an actual JWT based
authentication server). To make use of Amplify simply follow these steps:

### Step 1. Replace the provider

Open `src/pages/_app.js` file and replace the following line:

```js
import { AuthConsumer, AuthProvider } from '../contexts/jwt-context';
```

with

```js
import { AuthConsumer, AuthProvider } from '../contexts/firebase-auth-context';
```

### Step 2. Replace the hook context

Open `src/hooks/use-auth.js` file and replace the following line:

```js
import { AuthContext } from '../contexts/jwt-context';
```

with

```js
import { AuthContext } from '../contexts/firebase-auth-context';
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
  const { signInWithEmailAndPassword } = useAuth();
  
  const handleLogin = () => {
    // Email and password
    signInWithEmailAndPassword('demo@devias.io', 'Password123!');
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

- Create user with email and password
- Sign in with email and password
- Sign in with popup (Google)
- Logout
