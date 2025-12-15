import { ListNode } from "../../utils/list-node"

/**
 * Add Two Numbers - recursion
 * 用遞迴的方式處理兩個 linked list 的每一個節點相加的問題。
 * 
 * 時間複雜度
 * 最好的情況：1 = O(1)（解答為[0]時）
 * 最差的情況：O(n^2)（每一格都進位時）
 * 平均：O(n)
 * 
 * 空間複雜度：會有 n 層的遞迴呼叫堆疊。
 * O(n)
 */
export default function addTwoNumbers(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2
    if (!list2) return list1
    let current = list1.value + list2.value
    let node = current > 9
        ? new ListNode(current - 10, addTwoNumbers(addTwoNumbers(new ListNode(1, null), list1.next), list2.next))
        : new ListNode(current, addTwoNumbers(list1.next, list2.next))
    return node
}
