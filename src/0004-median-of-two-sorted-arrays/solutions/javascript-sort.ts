/**
 * Median of Two Sorted Arrays - JavaScript Sort
 * 
 * 直接把兩個陣列合併，呼叫 sort，然後取中位數。
 * 
 * 假設 nums1 的長度為 n，nums2 的長度為 m。
 * 合併後的長度為 k = n + m。
 * 
 * 時間複雜度：
 * 合併為 O(n + m)。
 * 排序為 O(k log k) = O((n + m) log(n + m))。
 * 因此總時間複雜度為 O((n + m) log(n + m))。
 * 
 * 關於為什麼 comparison-based sort 會有 Ω(k log k) 的下界：
 * 長度為 k 的陣列有 k! 種排列。
 * 若將排序過程視為一棵 binary decision tree，最多比較 h 次，則最多有 2^h 個葉節點。
 * 為了區分 k! 種排列，葉節點數 2^h 必須大於等於 k!，兩邊取 log 得出 h >= log(k!)。
 * 由 Stirling 近似可知 log(k!) = Θ(k log(k))，因此 h = Ω(k log(k))。
 * 
 * 現代引擎中的排序演算法（如 TimSort 或改良版 QuickSort）
 * 在最壞情況下為 O(k log k)，
 * 因此此處排序時間複雜度為 O(k log k)。
 * 
 * 空間複雜度：合併後的陣列長度為 n + m，因此為 O(n + m)。
 */
export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const sorted = [...nums1, ...nums2].sort((a, b) => a - b)
    return sorted.length % 2
        ? sorted[Math.floor(sorted.length / 2)]
        : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
}
