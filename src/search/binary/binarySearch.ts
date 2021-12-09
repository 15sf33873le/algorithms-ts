const binarySearch = (items: any[], item: any): number => {


    // Calculate initial values of lowest/highest pointers to encapsulate whole list
    let lowest_ptr: number = 0
    let highest_ptr: number = items.length - 1
    let final: number = -2
    let middle_ptr: number = -2

    do {
        // Calculate new middle and make the comparison
        middle_ptr = Math.floor((lowest_ptr + highest_ptr) / 2)
        console.log(middle_ptr);
        if (item == items[middle_ptr]){
            // Item found, return its index
            final = middle_ptr
        }
        else if (lowest_ptr == highest_ptr){
            // This is the exit condition, we haven't found what we are looking for
            final = -1
        }
        else if (item < items[middle_ptr]){
            // If the item is smaller than the middle, look in the lower half
            if (middle_ptr == 0){
                final = -1
            }
            highest_ptr = middle_ptr - 1;
        }
        else if (item > items[middle_ptr]){
            // The item is larger than the middle, look in the upper half
            if (middle_ptr == items.length - 1){
                final = -1
            }
            lowest_ptr = middle_ptr + 1;    
        }
    }
    while (final == -2);
    return final
}

export default binarySearch;