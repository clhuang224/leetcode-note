import { ListNode } from '../../utils/list-node'

/**
 * Add Two Numbers - recursion with carry
 * 用遞迴逐節點相加兩個 linked list 的值和進位，並回傳新增的節點。
 *
 * 假設 list1 長度為 m，list2 長度為 n。
 *
 * 時間複雜度：
 * 遞迴深度最多為 max(m, n)（可能再多 1 個節點用來處理最後進位），
 * 每一層只做 O(1) 的計算，因此總時間為 O(max(m, n))。
 *
 * 空間複雜度：
 * 遞迴呼叫堆疊深度最多為 max(m, n)，因此為 O(max(m, n))。
 */
export default function addTwoNumbers(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    function addTwoNumbersWithCarry(list1: ListNode | null, list2: ListNode | null, carry: 0 | 1): ListNode | null {
        if (!list1 && !list2 && !carry) return null

        let current = (list1?.value ?? 0) + (list2?.value ?? 0) + carry
        return new ListNode(
            current % 10,
            addTwoNumbersWithCarry(
                list1?.next ?? null,
                list2?.next ?? null,
                current >= 10 ? 1 : 0
            )
        )
    }

    return addTwoNumbersWithCarry(list1, list2, 0)
}
