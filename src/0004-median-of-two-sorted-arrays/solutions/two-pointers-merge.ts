/**
 * Median of Two Sorted Arrays - Two Pointers Merge
 * 
 * 用兩個指標指向陣列的項目，直到找到新陣列的中位數項目。
 * 
 * 若陣列長度為 k ，有 k = index + 1 項，其中 0 <= index < k
 * k 為奇數時，中位數為第 (k - 1) / 2 項
 * k 為偶數時，中位數為 (第 k / 2 - 1 項 + 第 k / 2 項) / 2
 *
 * 假設 nums1 的長度為 n，nums2 的長度為 m
 * 當 n + m 為奇數，i + j <= (n + m - 1) / 2 = rightBound
 * 當 n + m 為偶數，i + j <= (n + m) / 2 = rightBound
 *
 * 每次迴圈比較當下所指的值，並移動指標，直到 i + j > rightBound
 *
 * 時間複雜度：指標合計最多移動 (n + m) / 2 + 1 次，為 O(n + m)。
 * 空間複雜度：只有幾個變數紀錄數值和計算，為 O(1)
*/
export default function (nums1: number[], nums2: number[]): number {

    const newLength = nums1.length + nums2.length
    const isOdd = newLength % 2 !== 0
    const rightBound = isOdd ? (newLength - 1) / 2 : newLength / 2
    let i = 0, j = 0
    let previous = 0, current = 0

    while(i + j <= rightBound) {
        previous = current
        if (i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])) {
            current = nums1[i]
            i += 1
            continue
        }
        current = nums2[j]
        j += 1
    }

    return isOdd ? current : (previous + current) / 2
}
