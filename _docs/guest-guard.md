---
title: Guest Guard
---

# Guest Guard

There are some situations when you want to make a route visible exclusively for users that are not
authenticated, such as
`/authentication/register`, `/authentication/login`, etc. 

For such situations, the app provides you with a sample `GuestGuard` component that can be used to 
make redirect the user to a certain route  (currently `/dashboard`). Should you want to modify said 
route you can do so by modifying the `GuestGuard` component. There was no need to make a more complex 
logic for this GuestGuard component, as the business logic needed for your specific app might 
need a different approach regardless.

To be able to prevent the entire page render, the app provides a simple `hoc` utility that wraps the
page with the GuestGuard.

## Example

```jsx
// src/pages/authentication/login.js
import { withGuestGuard } from '../../hocs/with-guest-guard';

const Login = () => {
  return (
    <div>
      content
    </div>
  );
};

export default withGuestGuard(Login);
```

## How it works

It connects with the authentication provider (Amplify, Auth0, Firebase, or JWT, depending on your
setup) and extracts the required data to detect whether it can render the children passed as props,
otherwise it redirects the user to the `/dashboard` route.
