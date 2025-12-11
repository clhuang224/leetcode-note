import { describe, it, expect } from 'vitest'
import twoLoopBruteForce from './solutions/two-loop-brute-force'
import onePassHashMap from './solutions/one-pass-hash-map'
import twoPassHashMap from './solutions/two-pass-hash-map'

type Case = {
    name: string
    numbers: number[]
    target: number
    expected: [number, number]
}

const cases: Case[] = [
    {
        name: 'example 1',
        numbers: [2, 7, 11, 15],
        target: 9,
        expected: [0, 1],
    },
    {
        name: 'example 2',
        numbers: [3, 2, 4],
        target: 6,
        expected: [1, 2],
    },
    {
        name: 'example 3',
        numbers: [3, 3],
        target: 6,
        expected: [0, 1],
    },
    {
        name: 'no solution',
        numbers: [1, 2, 3],
        target: 100,
        expected: [-1, -1]
    }
]

const solutions = [
    { name: 'two-loop brute force', fn: twoLoopBruteForce },
    { name: 'two-pass hash map', fn: twoPassHashMap },
    { name: 'one-pass hash map', fn: onePassHashMap }
]

describe('0001 - Two Sum', () => {
    for (const solution of solutions) {
        describe(solution.name, () => {
            for (const c of cases) {
                it(c.name, () => {
                    expect(solution.fn(c.numbers, c.target)).toEqual(c.expected)
                })
            }
        })
    }
})