---
title: Auth Guard
---

# Auth Guard

This is a simple component that can be used to protect a private route. It controls whether it
should allow navigation to a requested route based on given context. Similar to the GuestGuard,
the app provides a `hoc` to prevent the entire page render.

## Example

```jsx
// src/pages/dashboard/index.js
import { withAuthGuard } from '../../hocs/with-auth-guard';

const Overview = () => {
  return (
    <div>
      content
    </div>
  );
};

export default withAuthGuard(Overview);
```

## How it works

It connects with the authentication provider (Amplify, Auth0, Firebase, or JWT, depending on your
setup) and extracts the required data to detect whether it should render the children passed as
props, otherwise it redirects to the `Login` component with a redirect url query string parameter
to allow the Login component to redirect back to the requested url after a successful 
authentication.

## How it can be extended

As mentioned, this is a sample component, thus it can and should be adjusted to match your business
needs.
