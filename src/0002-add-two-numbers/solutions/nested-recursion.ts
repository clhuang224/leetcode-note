import { ListNode } from '../../utils/list-node'

/**
 * Add Two Numbers - nested recursion
 * 用遞迴逐節點相加兩個 linked list，並在每一層用遞迴處理進位。
 *
 * 假設 l1 長度為 m，l2 長度為 n。
 *
 * 時間複雜度：
 * 遞迴深度最多為 max(m, n)（可能再多 1 個節點用來處理最後進位），
 * 每一層只做 O(1) 的計算，因此總時間為 O(max(m, n))。
 *
 * 空間複雜度：
 * 遞迴呼叫堆疊深度最多為 max(m, n)，因此為 O(max(m, n))。
 */
export default function addTwoNumbers(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2
    if (!list2) return list1
    let current = list1.value + list2.value
    return current > 9
        ? new ListNode(current - 10, addTwoNumbers(addTwoNumbers(new ListNode(1, null), list1.next), list2.next))
        : new ListNode(current, addTwoNumbers(list1.next, list2.next))
}
