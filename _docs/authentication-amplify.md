---
title: Amplify
---

# Amplify

AWS Amplify is a set of services accompanied by various tools and libraries created to help the
development of apps. Their suite offers among other features, an authentication feature, which can
be used as a stand-alone authentication system. The project is able to be used with this
authentication system, as well. Should you want to implement any of the other features Amplify
offers, you can refer to their [documentation](https://docs.amplify.aws/).

## Set up your Amplify account

The documentation for this, can be found in the official documentation of the service, mentioned
above.

## Configuration

In order to configure Amplify client library you have to open (or create) `.env` file in the
project's root folder and set the following variables as presented in your Amplify account settings:

```shell
NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID=
NEXT_PUBLIC_AWS_COGNITO_REGION=
NEXT_PUBLIC_AWS_PROJECT_REGION=
NEXT_PUBLIC_AWS_USER_POOLS_ID=
NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID=
```

If you do not want to set up environment variables, settings can be applied simply on
the `amplifyConfig` object found in the `src/config.js` file.

```js
export const amplifyConfig = {
  aws_project_region: '',
  aws_cognito_identity_pool_id: '',
  aws_cognito_region: '',
  aws_user_pools_id: '',
  aws_user_pools_web_client_id: ''
};
```

## How it was implemented

As mentioned above, Amplify offers a set of components to help your development process, although
they're not used in the app.

The `Auth` singleton from the library is used to provide the authentication feature to a context (
which wraps the content of the `App` component).

This aforementioned context is then used in the component tree to access the `Auth` public methods.
It provides the user authentication status and user profile, if available.

## How to use Amplify Provider

By default, the project uses a mocked `JWT provider` (as in: it doesn't use an actual JWT based
authentication server). To make use of Amplify simply follow these steps:

### Step 1. Replace the provider and consumer

Open `src/pages/_app.js` file and replace the following line:

```js
import { AuthConsumer, AuthProvider } from '../contexts/jwt-context';
```

with

```js
import { AuthConsumer, AuthProvider } from '../contexts/amplify-context';
```

### Step 2. Replace the hook context

Open `src/hooks/use-auth.js` file and replace the following line:

```js
import { AuthContext } from '../contexts/jwt-context';
```

with

```js
import { AuthContext } from '../contexts/amplify-context';
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

- Sign in
- Sign up
- Confirm sign up
- Resend sign up
- Forgot password
- Forgot password submit
- Logout
