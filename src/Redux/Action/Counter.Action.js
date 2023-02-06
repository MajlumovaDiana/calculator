export const incrementAction = () => {
    return {
        type: "INCREMENT",
    };
};
export const decrementAction = () => {
    return {
        type: "DECREMENT",
    };
};
export const divideAction = () => {
    return {
        type: "DIVIDE",
    };
};
export const setIncrementValueAction = (value) => {
    return {
        type: "SET_INPUT",
        payload: value,
    };
};
export const setDivideValueAction = (value) => {
    return {
        type: "SET_DIVIDE",
        payload: value,
    };
};
export const incrementByUser = (value) => {
    return {
        type: "INPUT_BY_USER",
        payload: value,
    };
};