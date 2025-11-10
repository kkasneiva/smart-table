import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    return (data, state, action) => {
        const searchValue = state[searchField]?.trim().toLowerCase();
        if (!searchValue) return data;

        // @todo: #5.2 — применить компаратор
        const compare = createComparison(
            ['skipEmptyTargetValues'],
            [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]
        );

        return data.filter(row => compare(row, state));
    };
}