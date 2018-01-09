// Actions
export const ADD_CATEGORY = 'food_seeker/search_parameter/ADD_CATEGORY';
export const REMOVE_CATEGORY = 'food_seeker/search_parameter/REMOVE_CATEGORY';

// Reducer
export const initialState = {
    categories: [],
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.category],
            };
        case REMOVE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(
                    item => item !== action.category
                ),
            };

        default:
            return state;
    }
}

// Action Creators
/**
 * @param {string} category
 */
export function addCategory(category) {
    return { type: ADD_CATEGORY, category };
}

/**
 * @param {string} category
 */
export function removeCategory(category) {
    return { type: REMOVE_CATEGORY, category };
}
