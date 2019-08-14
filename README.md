## This is middleware for sync redux store with localStorage

Every time when store change occurs, specified field automatically write to localStorage

### Example:
```
import syncReduxWithLocalstorage from 'sync-redux-with-localstorage';

export default createStore(
    rootReducer,
    applyMiddleware(syncReduxWithLocalstorage('field_name')),
);
```
