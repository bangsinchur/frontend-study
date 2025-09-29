function TitleBox({title,count}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>현재개수: {count}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>props 연습</h1>
      <TitleBox title="첫번째 상자" count={1} />
      <TitleBox title="두번째 상자" count={2} />
    </div>
  );
}

export default App;
