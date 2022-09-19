//무조건 입력하게
export function languageValidHandler(dropdownValue) {
  if (dropdownValue.value == null) {
    return false;
  }
  return true;
}

const languageValidObj = {
  func0: {
    func: dropdownValue => languageValidHandler(dropdownValue),
    message: '사용언어를 입력해주세요.',
  },
};
