export function dateValidHandler(inputValue) {
  let regxNum = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
  if (!regxNum.test(inputValue)) {
    return false;
  }
  return true;
}

export function dateLengthValidHandler(inputValue) {
  if (inputValue.trim().length > 0 && inputValue.trim().length < 9) {
    return true;
  }
  return false;
}

const dateValidObj = {
  func0: {
    func: inputValue => dateLengthValidHandler(inputValue),
    message: '생년월일을 입력해주세요.',
  },
  func1: {
    func: inputValue => dateValidHandler(inputValue),
    message: '생년월일은 형식에 맞는 8자리의 숫자만 입력하실 수 있습니다.',
  },
};
