//무조건 입력하게
export function countryValidHandler(dropdownValue) {
  if ((dropdownValue.value = null)) {
    return false;
  }
  return true;
}

const countryValidObj = {
  func0: {
    func: dropdownValue => countryValidHandler(dropdownValue),
    message: '국가를 입력해주세요.',
  },
};
