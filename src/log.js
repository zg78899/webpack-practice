const logInput = input => `입력 받은 값은 ${input}`;
const logResult = (figure,result) =>`${figure}의 넓이는 ${result}`;

const logFigureError = "지원 되지않는 도형입니다.'정사각형' 또는 '원'을 입력해 주세요. \n커맨드 라인을 종료합니다."

module.exports={
  logInput,
  logResult,
  logFigureError
}