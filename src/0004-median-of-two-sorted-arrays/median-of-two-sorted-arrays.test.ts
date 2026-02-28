import { describe, it, expect } from 'vitest'
import javascriptSort from './solutions/javascript-sort'
import twoPointersMerge from './solutions/two-pointers-merge'
import binarySearchPartition from './solutions/binary-search-partition'

type Case = {
    name: string
    nums1: number[]
    nums2: number[]
    expected: number
}

const cases: Case[] = [
    {
        name: 'example 1',
        nums1: [1, 3],
        nums2: [2],
        expected: 2
    },
    {
        name: 'example 2',
        nums1: [1, 2],
        nums2: [3, 4],
        expected: 2.5
    },
    {
        name: 'example 3',
        nums1: [1,2,3,4,5],
        nums2: [6,7,8,9,10,11,12,13,14,15,16,17],
        expected: 9
    }
]

const solutions = [
    { name: 'javascript-sort', fn: javascriptSort },
    { name: 'two-pointers-merge', fn: twoPointersMerge },
    { name: 'binary-search-partition', fn: binarySearchPartition }
]

describe('0004 - Median of Two Sorted Arrays', () => {
    for (const solution of solutions) {
        describe(solution.name, () => {
            for (const c of cases) {
                it(c.name, () => {
                    expect(solution.fn(c.nums1, c.nums2)).toEqual(c.expected)
                })
            }
        })
    }
})
