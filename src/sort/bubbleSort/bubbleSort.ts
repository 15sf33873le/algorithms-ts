import { SortAlgorithm } from "../common";
import swap from "../swap";

const bubbleSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    // Your code here
    let lim = items.length
    for(let i=0; i<lim; i++) {
        for (let j=0 ;j < lim-i; j++) {
            if (items[j] > items[j+1]) {
                swap(items,j,j+1);
            }
        }
    }
    return items;
}

export default bubbleSort;