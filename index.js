module.exports = syncInterface => store => next => action => {
    const result = next(action);
    const nextState = store.getState();

    const reducedState = applyInterface(nextState, syncInterface);

    window.localStorage.setItem(`reduxLocalStorage`, JSON.stringify(reducedState));


    return result;
};


function applyInterface(state, syncInterface) {
    let result = {};

    if (!isPlainObject(state)) {
        console.warn('WARNING! "state" must be a plain object.' );
        console.warn('state: ', JSON.stringify(state, null, 2));
    }

    if (!isPlainObject(syncInterface)) {
        console.warn('WARNING! "syncInterface" must be a plain object.' );
        console.warn('syncInterface: ', JSON.stringify(syncInterface, null, 2));
    }

    for (var key in syncInterface) {
        result[key] = get(syncInterface[key], state[key]);
    }

    return result;
}

function get(currentInterfaceInstance, currentStateLevel) {
    let result;
    if (currentInterfaceInstance instanceof Array) {
        result = currentStateLevel.map(item => {
            return get(currentInterfaceInstance[0], item);
        });

    } else if (isPlainObject(currentInterfaceInstance)) {
        result = {};
        for (var currentKey in currentInterfaceInstance) {
            result[currentKey] = get(currentInterfaceInstance[currentKey], currentStateLevel[currentKey])
        }
    } else if (currentInterfaceInstance) {
        result = currentStateLevel;
    }
    return result;
}

function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
};

