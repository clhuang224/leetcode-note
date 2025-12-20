import { ListNode } from '../../utils/list-node'
/**
 * Add Two Numbers - iteration
 * 用一個迴圈，移動指標，處理相加跟進位。
 * 
 * 假設 l1 的長度為 m ，l2 的長度為 n 。
 * 
 * 時間複雜度：會跑比較長的 linked list 的長度次數，最右邊有進位的話會多一次。
 * O(max(m, n))
 * 
 * 空間複雜度：linked list 最多會有 max(m, n) + 1 個節點（最右邊有進位）。
 * O(max(m, n))
 */
export default function (l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0, null)
    let current = dummy
    let carry = 0
    while (l1 || l2 || carry) {
        let temp = (l1?.value ?? 0) + (l2?.value ?? 0) + carry
        carry = temp < 10 ? 0 : 1
        current.next = new ListNode(temp < 10 ? temp : temp - 10, null)
        current = current.next
        l1 = l1?.next ?? null
        l2 = l2?.next ?? null
    }
    return dummy.next
}
