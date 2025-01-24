import '@testing-library/jest-dom'

beforeAll(() => {
  jest.clearAllMocks()
})

beforeEach(() => {
  jest.clearAllMocks()
  jest.resetModules()
})

afterAll(() => {
  jest.clearAllMocks()
})
