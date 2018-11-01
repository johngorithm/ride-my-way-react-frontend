import saveToLocalStorage from 'utils/saveToLocalStorage';

const mockResponse = {
  data: {
    user: {},
    token: '87sd8fa9sd7asd9f8sa'
  }
}
describe('SAVE TO LOCAL STORAGE TESTS', () => {
  test('it runs successfully', () => {
    expect(saveToLocalStorage(mockResponse)).toBe(true);
  })
})
