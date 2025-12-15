export class ListNode {
    value: number
    next: ListNode | null

    constructor(value = 0, next: ListNode | null = null) {
        this.value = value
        this.next = next
    }
}

export function arrayToList(array: number[]): ListNode | null {
    let temp = new ListNode(0)
    let current = temp

    for (const value of array) {
        current.next = new ListNode(value)
        current = current.next
    }

    return temp.next
}

export function listToArray(node: ListNode | null): number[] {
    const result: number[] = []
    while (node) {
        result.push(node.value)
        node = node.next
    }
    return result
}
