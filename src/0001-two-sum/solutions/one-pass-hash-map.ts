/**
 * Two Sum - one-pass hash map
 * 用 Map 紀錄數字與 index 的對應關係，同時找到 target - numbers[i] 是否存在於 Map 中。
 * 
 * 時間複雜度
 * 最好的情況：1 = O(1)（解答為[0, 1]時）
 * 最差的情況：O(n)
 * 平均：O(n)
 * 
 * 空間複雜度：最差情況下， Map 會存放 n 個 key-value pair 。
 * O(n)
 */
export default function (numbers: number[], target: number): [number, number] {
    let map = new Map<number, number>()
    for (let i = 0; i < numbers.length; i++) {
        let y = target - numbers[i]
        if (map.has(y)) {
            if (map.get(y)! < i) return [map.get(y)!, i]
            return [i, map.get(y)!]
        }
        map.set(numbers[i], i)
    }
    return [-1, -1]
}
