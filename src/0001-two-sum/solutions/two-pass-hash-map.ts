/**
 * Two Sum - two-pass hash map
 * 第一次迴圈用 Map 紀錄數字與 index 的對應關係；
 * 第二次迴圈找到 target - numbers[i] 是否存在於 Map 中。
 * 
 * 時間複雜度
 * 最好的情況：O(n)
 * 最差的情況：O(n)
 * 平均：O(n)
 * 
 * 空間複雜度：最差情況下， Map 會存放 n 個 key-value pair 。
 * O(n)
 */
export default function (numbers: number[], target: number): [number, number] {
    let map = new Map<number, number>()
    for (let i = 0; i < numbers.length; i++) {
        map.set(numbers[i], i)
    }
    for (let i = 0; i < numbers.length; i++) {
        let y = target - numbers[i]
        if (map.has(y) && map.get(y) !== i) {
            if (map.get(y)! < i) return [map.get(y)!, i]
            return [i, map.get(y)!]
        }
    }
    return [-1, -1]
}
