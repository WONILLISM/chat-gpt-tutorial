import { useState } from "react";

function App() {
  const [question, setQuestion] = useState<string>("");

  return (
    <>
      <div>
        <div>
          <label>Question </label>
          <input
            type="text"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
        </div>
        <button>질문하기</button>
      </div>
    </>
  );
}

export default App;
