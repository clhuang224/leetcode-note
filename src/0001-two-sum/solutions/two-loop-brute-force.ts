/**
 * Two Sum - two-loop brute force
 * 用兩個 index 指向陣列中的兩個數字來比較。
 * 
 * 時間複雜度
 * 最好的情況：1 = O(1)（解答為 [0, 1] 時）
 * 最差的情況：n(n-1)/2 = O(n^2)
 * 平均：O(n^2)
 * 
 * 空間複雜度：只使用固定兩個變數 i 和 j ，與 n 無關。
 * O(1)
 */
export default function (numbers: number[], target: number): [number, number] {
    let i = 0, j = 1
    for (; i < numbers.length; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
    return [-1, -1]
}
