package sample;

public class java {
    public void sort(int[] arr) {
        mergeSort(arr);
    }
    private void mergeSort(int[] arr) {
        int length = arr.length;

        if (length < 2)
            return;

        int middle = length / 2;
        int[] leftArr = new int[middle];
        int[] rightArr = new int[length - middle];

        for (int i = 0; i < middle; i++) 
            leftArr[i] = arr[i];
        for (int i = middle; i < length; i++) 
            rightArr[i - middle] = arr[i];

        mergeSort(leftArr);
        mergeSort(rightArr);
        merge(arr, leftArr, rightArr);
    }
    private void merge(int[] arr, int[] leftArr, int[] rightArr) {
        int leftIdx = 0, rightIdx = 0, arrIdx = 0;
        
        while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
            if (leftArr[leftIdx] < rightArr[rightIdx]) {
                arr[arrIdx] = leftArr[leftIdx];
                leftIdx++;
            }
            else {
                arr[arrIdx] = rightArr[rightIdx];
                rightIdx++;
            }
            arrIdx++;
        }
        if (leftIdx < leftArr.length)
            copyRest(leftArr, leftIdx, arr, arrIdx);
        else
            copyRest(rightArr, rightIdx, arr, arrIdx);
    }

    private void copyRest(int[] srcList, int srcIndex, int[] dstList, int dstIndex) {
        while (srcIndex < srcList.length) {
            dstList[dstIndex] = srcList[srcIndex];
            dstIndex++;
            srcIndex++;
        }
    }
}
