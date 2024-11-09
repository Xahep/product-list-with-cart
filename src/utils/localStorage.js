export const loadCartState = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
        console.error("Error loading state from localStorage", err);
        return undefined;
    }
};

export const saveCartState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (err) {
        console.error("Error saving state to localStorage", err);
    }
};