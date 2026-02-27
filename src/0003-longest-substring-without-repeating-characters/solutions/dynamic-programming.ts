/**
 * Longest Substring Without Repeating Characters - Dynamic Programming
 * 
 * 將 Sliding Window 的解法改寫成 DP。
 * 用一個 Array 紀錄 DP 的結果，其中 dp[i] 為以第 i 個字元為結尾的最長不重複子字串長度。
 * 並用一個 Map 紀錄每個字元前一次出現的位置。
 * 當 s[i] 在以 i - 1 為結尾的最長不重複子字串（window）內出現過時，dp[i] 為 i - 該字元前一次出現位置。
 * 否則，dp[i] 為 dp[i-1] + 1。
 * 每次迴圈紀錄字元前一次出現的位置，並計算 maxLength。
 * 
 * 假設 s 的長度為 n，字元種類有 m 種，其中 m <= n。
 * 最長不重複子字串長度（max window size）為 l，其中 l <= m。
 * 
 * 時間複雜度：DP 計算次數為 s 的長度 n，每次計算 O(1)，因此為 O(n)。
 * 
 * 空間複雜度：
 * DP Array 長度為 n，Map 包含 s 中出現過的所有字元，最多為 m 種。（max window 中的字元最多為 l 種。）
 * n + m <= 2n = O(n)。
 * 但由於 DP Array 每次只用到 dp[i-1] 的值，因此可以改用一個變數紀錄前次的值。
 * 如果 DP 只使用一個變數，空間複雜度會是 Map 的大小，為 O(m)。
 */
export default function lengthOfLongestSubstring(s: string): number {
    const dp = new Array(s.length).fill(1)
    const lastIndex = new Map<string, number>()
    let maxLength = 0
    for (let i = 0; i < dp.length; i++) {
        if (i > 0) {
            const prev = lastIndex.get(s[i])
            const left = i - dp[i-1]
            if (prev !== undefined && prev >= left) dp[i] = i - prev
            else dp[i] = dp[i-1] + 1
        }
        lastIndex.set(s[i], i)
        maxLength = Math.max(maxLength, dp[i])
    }
    return maxLength
}
