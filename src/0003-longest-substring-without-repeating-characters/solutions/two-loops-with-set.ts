/**
 * Longest Substring Without Repeating Characters - Two Loops with Set
 * 
 * 外迴圈為左指標，內迴圈為右指標，並用一個 Set 紀錄兩個指標之間已經出現過的字元。
 * 當遇到非重複字元時，比較左右指標之間的長度與當下紀錄的 maxLength，並更新 maxLength。
 * 
 * 假設 s 的長度為 n，字元種類有 m 種，其中 m <= n。
 * 最長不重複子字串長度為 l，其中 l <= m。
 * 
 * 時間複雜度：O(n * l)，其中 l <= m <= n，隨著 l 增加，時間複雜度會增加。
 * 最差的情況：s 中有 m = n = l 種字元，完全不重複，為 O(n^2)。
 * 最好的情況：s 中只有 m = l = 1 種字元，全部重複，為 O(n)。
 * 
 * 空間複雜度：Set 中最多有 l 種字元。
 * O(l)，其中 l <= m <= n。
 */
export default function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0
    for (let left = 0; left < s.length; left++) {
        const seen = new Set()
        for (let right = left; right < s.length; right++) {
            if (seen.has(s[right])) break
            seen.add(s[right])
            maxLength = Math.max(maxLength, right - left + 1)
        }
    }
    return maxLength
}
