## This is middleware for sync redux store with localStorage

Every time when store change occurs, specified field automatically write to localStorage

### Download
```
npm i sync-redux-with-localstorage -D
```


### Example:

### store

```
state.cats = [
   {
    name: 'Fat Cat',
    id: 1,
  },
 {
    name: 'Good Cat',
    id: 2,
  },
];
```

### interface

```
const syncInterface = {
  cats: {
    id: true,
  },
}
```

### usage
```
import syncReduxWithLocalstorage from 'sync-redux-with-localstorage';

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, syncReduxWithLocalstorage(syncInterface))),
);
```

### in localStorage will be saved:

```
  reduxLocalStorage:cats[{ id: 1 }, { id: 2 }]
```
