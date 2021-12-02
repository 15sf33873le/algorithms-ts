import { NO_MATCH } from "../common"
let result: number;

const binarySearch = (items: any[], item: any): number => {


    // Calculate initial values of lowest/highest pointers to encapsulate whole list
    let lowest_ptr: number = 0
    let highest_ptr: number = items.length - 1
    let done = false

    while (done != true) {
        // Calculate new middle and make the comparison
        let middle_ptr: number = Math.floor((lowest_ptr + highest_ptr) / 2)
        console.log(middle_ptr);
        if (item == items[middle_ptr]){
            // Item found, return its index
            result = middle_ptr
            done = true
        }
        else if (lowest_ptr == highest_ptr){
            // This is the exit condition, we haven't found what we are looking for
            result = NO_MATCH
            done = true
        }
        else if (item < items[middle_ptr]){
            // If the item is smaller than the middle, look in the lower half
            if (middle_ptr == 0){
                result = NO_MATCH
                done = true
            }
            highest_ptr = middle_ptr - 1;
        }
        else if (item > items[middle_ptr]){
            // The item is larger than the middle, look in the upper half
            if (middle_ptr == items.length - 1){
                result = NO_MATCH
                done = true
            lowest_ptr = middle_ptr + 1;
            }
        }
    }
    return result
}

export default binarySearch;