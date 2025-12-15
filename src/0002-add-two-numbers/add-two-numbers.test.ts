import { describe, it, expect } from 'vitest'
import recursion from './solutions/recursion'
import { arrayToList, listToArray } from '../utils/list-node'

type Case = {
    name: string
    list1: number[]
    list2: number[]
    expected: number[]
}

const cases: Case[] = [
    {
        name: 'example 1',
        list1: [2, 4, 3],
        list2: [5, 6, 4],
        expected: [7, 0, 8],
    },
    {
        name: 'example 2',
        list1: [0],
        list2: [0],
        expected: [0],
    },
    {
        name: 'example 3',
        list1: [9, 9, 9, 9, 9, 9, 9],
        list2: [9, 9, 9, 9],
        expected: [8, 9, 9, 9, 0, 0, 0, 1],
    }
]

const solutions = [
    { name: 'recursion', fn: recursion }
]

describe('0002 - Add Two Numbers', () => {
    for (const solution of solutions) {
        describe(solution.name, () => {
            for (const c of cases) {
                it(c.name, () => {
                    expect(listToArray(solution.fn(arrayToList(c.list1), arrayToList(c.list2)))).toEqual(c.expected)
                })
            }
        })
    }
})