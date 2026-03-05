/**
 * Longest Palindromic Substring - Brute Force (Index)
 * 
 * 用兩個迴圈枚舉所有的子字串，判斷是不是回文，找出最長的回文子字串。
 * 但不用 slice 來產生子字串，減少使用記憶體。
 * 並調整 isPalindrome index 的方向（由內往外 -> 由外往內），減少計算。
 * 
 * 假設 s 的長度為 n。
 * 
 * 時間複雜度：
 * isPalindrome 的左右指標移動合計為 str 的長度 l 次，其中 l <= n，為 O(n)。
 * 兩個迴圈枚舉子字串的組合為 n + (n-1) + ... + 1 = n (n + 1) / 2，為 O(n^2)。
 * 因此時間複雜度為 O(n) x O(n^2) = O(n^3)。
 * 
 * 空間複雜度：只有用一些變數，為 O(1)（不包含回傳值）。
 */
export default function longestPalindrome(s: string): string {

    if (s.length < 2) return s

    function isPalindrome(str: string, left: number, right: number) {
        while(left < right) {
            if (str[left] !== str[right]) return false
            left += 1
            right -= 1
        }
        return true
    }

    let result = ''
    for(let left = 0; left < s.length; left++) {
        for(let right = left; right < s.length; right++) {
            if (isPalindrome(s, left, right) && right - left + 1 > result.length) {
                result = s.substring(left, right + 1)
            } 
        }
    }
    return result
}
