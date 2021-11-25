import { NO_MATCH } from "../common";

const linearSearch = (items: any[], item: any): number => {

    let i = items.length

    for (i>0; i--;) {
        if (items[i] == item) {
            return i;
        }
    }
    return NO_MATCH;
}

export default linearSearch;