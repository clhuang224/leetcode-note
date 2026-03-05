/**
 * Longest Palindromic Substring - Three Loop Brute Force
 * 
 * 用兩個迴圈枚舉所有的子字串，判斷是不是回文，找出最長的回文子字串。
 * 
 * 假設 s 的長度為 n。
 * 
 * 時間複雜度：
 * isPalindrome 的左右指標移動合計為 n 次，為 O(n)。
 * 兩個迴圈枚舉子字串的組合為 n + (n-1) + ... + 1 = n (n + 1) / 2，為 O(n^2)。
 * 因此時間複雜度為 O(n^3)。
 * 
 * 空間複雜度：只有幾個變數紀錄數值和計算，為 O(1)。
 */
export default function longestPalindrome(s: string): string {

    if (s.length < 2) return s

    function isPalindrome(str: string) {
        if (str.length < 2) return true
        let left = (str.length - str.length % 2) / 2 - 1
        let right = left + 1 + str.length % 2
        while(right < str.length) {
            if (str[left] !== str[right]) return false
            left -= 1
            right += 1
        }
        return true
    }

    let result = ''
    for(let left = 0; left < s.length; left++) {
        for(let right = left; right <= s.length; right++) {
            const current = s.slice(left, right)
            if (isPalindrome(current) && current.length > result.length) {
                result = current
            } 
        }
    }
    return result
}
