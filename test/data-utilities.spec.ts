import {
  incrementedNumber,
  randomBoolean,
  randomDate,
  randomDateBetween,
  randomElement,
  randomId,
  randomNumber,
  randomNumberBetween,
  randomString,
} from '../src'
import { randomDateRangeMax, randomDateRangeMin, resetIncrementedNumbers } from '../src/data-utilties'

describe('Data utilities', () => {
  describe('randomNumber', () => {
    it('generates', () => {
      expect(randomNumber()).toBeGreaterThanOrEqual(0)
    })
  })
  describe('randomNumberBetween', () => {
    it('generates a random number between two inputs', () => {
      const sut = randomNumberBetween(5, 10)

      expect(sut).toBeGreaterThanOrEqual(5)
      expect(sut).toBeLessThanOrEqual(10)
    })
  })
  describe('randomString', () => {
    it('generates a random string with the length between the two inputs', () => {
      const sut = randomString(10, 20)

      expect(sut.length).toBeGreaterThanOrEqual(10)
      expect(sut.length).toBeLessThanOrEqual(20)
    })
  })
  describe('randomId', () => {
    it('generates a random ID of the requested length', () => {
      expect(randomId(10).length).toBe(10)
    })
  })
  describe('randomDate', () => {
    it('generates a random date', () => {
      expect(randomDate().getTime()).toBeGreaterThanOrEqual(randomDateRangeMin.getTime())
      expect(randomDate().getTime()).toBeLessThanOrEqual(randomDateRangeMax.getTime())
    })
  })
  describe('randomDateBetween', () => {
    it('generates a random date', () => {
      const dateMin = new Date(2025, 1, 1)
      const dateMax = new Date(2025, 1, 31)
      expect(randomDateBetween(dateMin, dateMax).getTime()).toBeGreaterThanOrEqual(dateMin.getTime())
      expect(randomDateBetween(dateMin, dateMax).getTime()).toBeLessThanOrEqual(dateMax.getTime())
    })
  })
  describe('randomBoolean', () => {
    it('returns a random boolean', () => {
      expect([true, false].includes(randomBoolean())).toBe(true)
    })
  })
  describe('incrementedNumber', () => {
    it('increments on each call', () => {
      resetIncrementedNumbers()
      expect(incrementedNumber('k1')).toBe(1)
      expect(incrementedNumber('k1')).toBe(2)
    })
    it('different keys have different increments', () => {
      resetIncrementedNumbers()
      expect(incrementedNumber('k1')).toBe(1)
      expect(incrementedNumber('k1')).toBe(2)
      expect(incrementedNumber('k2')).toBe(1)
    })
  })
  describe('randomElement', () => {
    it('returns a random element', () => {
      const elements = [1, 2, 3, 4, 5, 6]
      expect(randomElement(elements)).toBeGreaterThanOrEqual(1)
      expect(randomElement(elements)).toBeLessThanOrEqual(6)
    })
  })
})
