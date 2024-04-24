---
title: Redux
---

# Redux

Redux is more robust alternative for state management, that offers more helpful features out of the
box. Follow the
[official documentation](https://redux.js.org/basics/usage-with-react) to understand the entire
concept behind it.

## Usage

The app uses `Redux Toolkit` with hooks (Thunk method, not Sagas) to manage the state
for `Calendar`, `Chat`,
`Kanban` and `Mail` apps.

This can be replaced with `Context API`, or any other system, in a matter of hours due the clean
structure of the project.

The app at hand uses Redux, but you can find Context API examples in the project. You can also opt
for
[Recoil](https://recoiljs.org/), maintained by **Facebook**, a new alternative that allows you to
split the state in multiple "atoms". An example is not included, but the ones from Facebook
documentation should be simple enough to use in your project.

## How to use

There are 2 main folders:

1. `src/slices` where you can find the implementation of the reducer logic.
2. `src/store` which exports a store and combines the reducers in one root reducer.

If you're new to Redux Toolkit, please read
their [official documentation](https://redux-toolkit.js.org/usage/usage-guide)
to understand the basics.

## Example

You can take as an example the blog feature of this app where; should you want to implement Redux;
you can do it as follows:

### Create a new slice

Create a new file in `src/slices`, and name it `blog.js`. Now open this new file with your favorite
IDE, and import
`createSlice` from `@reduxjs/toolkit` package to create the new slice.

```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: []
};

const slice = createSlice({
  name: 'blog',
  initialState,
  reducers: {}
});

export const { reducer } = slice;

export default slice;
```

It is important to assign a name to the slice and an initial state.

### Create a reducer action

Let's get back to the newly created slice and add a `setArticles` action.

```js
const slice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setArticles(state, payload) {
      // You should get articles from the action payload. 
      // For simplicity's sake let's use static data instead.

      state.articles = [
        {
          id: '1',
          title: 'My first article'
        }
      ];
    }
  }
});
```

> Important: The state is a Proxy object, you cannot update it directly, and you have to update its keys instead.
>
> For example `state = { name: 'Alex' }` will break the state, but `state.user = { name: 'Alex' }` works as expected.

### Create a thunk method

This allows you to dispatch multiple actions, extremely useful for async requests.

In the created slice file, create a `getPosts` method that dispatches the slice `setArticles`
action.

```js
export const getPosts = () => async (dispatch) => {
  // Here make an async request to your sever and extract the data from the server response
  // const response = await axios.get('/__fake-api__/blog/articles');
  // const { data } = reponse;

  const data = [
    {
      id: '1',
      title: 'My first article'
    }
  ];

  dispatch(slice.actions.setArticles(data));
};
```

Now, that you have a method that dispatches an action, you can update the `setArticles` action to
use the data from the payload.

```js
const slice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setArticles(state, payload) {
      state.articles = payload.articles;
    }
  }
});
```

### Combine the new slice in the root reducer

In the file `src/store/rootReducer.js` use the reducer from your newly created slice.

```js
import {reducer as blogReducer} from 'src/slices/blog';

const rootReducer = combineReducers({
  // ...other reducers
  blog: blogReducer
});
```

### Using the slice state

```jsx
import { useSelector } from 'react-redux';

const Blog = () => {
  const { articles } = useSelector((state) => state.blog);

  return (
    <div>
      <div>
        {articles.map((article) => (
          <div>
            Article ID: {article.id}
          </div>
        ))}
      </div>
    </div>
  );
};
```

> Please refrain from changing the state directly (without an action) in order to avoid chained re-renders.

### Dispatching an action

This is the last step of the process. Execute the method `getPosts` to dispatch the slice action
and update the slice state. Once the action sets the new state, the app will re-render your current
component, and the articles will be displayed.

```jsx
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'src/slices/blog';

const Blog = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.blog);

  const handleClick = () => {
    dispatch(getPosts());
  };

  return (
    <div>
      <div>
        {articles.map((article) => (
          <div>
            Article ID: {article.id}
          </div>
        ))}
      </div>
      <Button onClick={handleClick}>
        Load articles
      </Button>
    </div>
  );
};
```
