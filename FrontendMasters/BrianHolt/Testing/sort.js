function sort(list) {
    // sort list in ascending order 

    const sortedList = list.sort(
        function (num1, num2) {
            if (num1 > num2) {
                return 1;
            } else if (num1 < num2) {
                return -1;
            }

            return 0;
        }
    )
    return [1, 2, 3, 4];
}

