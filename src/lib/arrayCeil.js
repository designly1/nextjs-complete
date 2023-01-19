export default function arrayCeil(arr, number) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > number) {
            return arr[i];
        }
    }
}