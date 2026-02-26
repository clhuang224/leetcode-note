import { describe, it, expect } from 'vitest'
import twoLoopsWithSet from './solutions/two-loops-with-set'
import slidingWindow from './solutions/sliding-window'

type Case = {
    name: string
    str: string
    expected: number
}

const cases: Case[] = [
    {
        name: 'example 1',
        str: 'abcabcbb',
        expected: 3
    },
    {
        name: 'example 2',
        str: 'bbbbb',
        expected: 1
    },
    {
        name: 'example 3',
        str: 'pwwkew',
        expected: 3
    },
    {
        name: 'example 4',
        str: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ '.repeat(526) + 'ABCD',
        expected: 95
    },
    {
        name: 'example 5',
        str: ' ',
        expected: 1
    },
    {
        name: 'example 6',
        str: 'dvdf',
        expected: 3
    }
]

const solutions = [
    { name: 'two-loops-with-set', fn: twoLoopsWithSet },
    { name: 'sliding-window', fn: slidingWindow }
]

describe('0003 - Longest Substring Without Repeating Characters', () => {
    for (const solution of solutions) {
        describe(solution.name, () => {
            for (const c of cases) {
                it(c.name, () => {
                    expect(solution.fn(c.str)).toEqual(c.expected)
                })
            }
        })
    }
})
