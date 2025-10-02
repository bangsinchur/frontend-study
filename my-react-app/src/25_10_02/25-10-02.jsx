import Button from "./Button";

export default function Practice() {
  const buttonClick = () => {
    alert("빨간색 버튼이클릭 되었습니다.");
  };

  const sizes = {
    small: "80px",
    medium: "160px",
    large: "200px",
  };

  return (
    <div>
      <h1>Props 연습</h1>
      <Button
        text="빨간색 큰버튼"
        color="red"
        size={sizes.large}
        click={buttonClick}
      />
    </div>
  );
}
