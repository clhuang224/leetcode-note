/**
 * Longest Substring Without Repeating Characters - Sliding Window
 * 
 * 用一個 Map 紀錄每個字元前一次出現的位置。
 * 右指標起始為 0，依迴圈每次增加 1。
 * 左指標起始為 0，當右指標所指的字元在目前 window 內出現過，將 left 移動到該字元前一次出現位置的下一格。
 * 每次迴圈都紀錄右指標所指字元的位置，並計算當下 window 的長度。
 * 
 * 假設 s 的長度為 n，字元種類有 m 種，其中 m <= n。
 * 最長不重複子字串長度（max window size）為 l，其中 l <= m。
 * 
 * 時間複雜度：O(n)。
 * 右指標共向右移動 n 次，左指標向右移動 0 到 n 次，最多 2n 次移動，為 O(n)。
 * 移動次數不受 l 和 m 影響，只與 n 有關。
 * 
 * 空間複雜度：Map 包含 s 中出現過的所有字元，最多為 m 種。（max window 中的字元最多為 l 種。）
 * O(m)，其中 l <= m <= n。
 */
export default function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0, left = 0
    const lastIndex = new Map<string, number>()
    for (let right = 0; right < s.length; right++) {
        const prev = lastIndex.get(s[right])
        if (prev !== undefined && prev >= left) left = prev + 1

        lastIndex.set(s[right], right)

        const windowLength = right - left + 1
        maxLength = Math.max(maxLength, windowLength)
    }
    return maxLength
}
