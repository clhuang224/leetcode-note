/**
 * Median of Two Sorted Arrays - Binary Search Partition
 * 
 * 若長度為 k 的已排序陣列，切成 [0, x-1], [x, k-1] 兩段，
 * 稱為 left（長度為 x）和 right。
 * 
 * 若 max(left) <= min(right)，
 * 當 k 為奇數，中位數為 left 的最後一項，
 * 當 k 為偶數，中位數為 left 最後一項和 right 第一項的平均。
 * 
 * 假設 nums1 的長度為 n，nums2 的長度為 m。
 * 
 * nums1 的 left1 有 x 個項目，0 <= x <= n（x 有 n+1 種可能）；
 * nums2 的 left2 有 y 個項目，0 <= y <= m（y 有 m+1 種可能）。
 * 
 * 當以下條件成立：
 * nums1[x-1] <= nums2[y]
 * nums2[y-1] <= nums1[x]
 * 
 * 則可推得 max(left1, left2) <= min(right1, right2)
 * 
 * 假設 k = n + m，且 x + y = bound = floor((k + 1) / 2)
 * 
 * 當 k 為奇數，中位數為 max(left1, left2)，
 * 當 k 為偶數，中位數為 (max(left1, left2) + min(right1, right2)) / 2
 * 
 * 時間複雜度：
 * 由於 0 <= x <= n，binary search 的搜尋範圍為 n + 1。
 * 每次將搜尋範圍減半，以找到唯一解，因此 (n + 1) / 2^h <= 1，推得 h >= log(n + 1)。
 * 解法一開始比較 m 和 n 的大小，以短的陣列來搜尋，因此時間複雜度為 O(log(min(n, m)))。
 * 
 * 空間複雜度：只有幾個變數紀錄數值和計算，為 O(1)。
 */
export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)

    const n = nums1.length
    const m = nums2.length
    const k = n + m
    const bound = Math.floor((k + 1) / 2)

    let x = 0, y = 0
    let xMin = 0, xMax = n
    let maxLeft = -Infinity, minRight = Infinity

    while (xMin <= xMax) {
        x = Math.floor((xMin + xMax) / 2) 
        y = bound - x

        const left1Last = x < 1 ? -Infinity : nums1[x-1]
        const right1First = x >= n ? Infinity : nums1[x]
        const left2Last = y < 1 ? -Infinity : nums2[y-1]
        const right2First = y >= m ? Infinity : nums2[y]

        if (left1Last > right2First) {
            xMax = x - 1
            continue
        }
        if (left2Last > right1First) {
            xMin = x + 1
            continue
        }

        maxLeft = Math.max(left1Last, left2Last)
        minRight = Math.min(right1First, right2First)
        break
    }
    return k % 2 === 1 ? maxLeft : (maxLeft + minRight) / 2
}
