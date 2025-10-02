import { useState } from "react"; // useState 훅 가져오기

function ToggleBox() {
  const [visible, setVisible] = useState(true); // 상태 값과 변경 함수

  const handleToggle = () => {
    setVisible((v) => !v);
 
  };

  return (
    <div>
      {visible ? <h2>토글 연습중</h2>:<h2>숨긴상태</h2> }

      <button onClick={handleToggle}>{visible ? "숨기기" : "보이기"}</button>
    </div>
  );
}

export default function Practice() {
  return (
    <div>
      <h1>State/ useState 연습</h1>
      <ToggleBox />
    </div>
  );
}
