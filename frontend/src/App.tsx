import { useState } from "react";

function App() {
  const [question, setQuestion] = useState<string>("");

  const fetchAnswer = async () => {
    try {
      const res = await fetch(`http://localhost:4000/question`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
        }),
      });

      console.log(res);
      // setQuestion(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuestionButton = () => {
    fetchAnswer();
  };

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
        <button onClick={handleQuestionButton}>질문하기</button>
      </div>
    </>
  );
}

export default App;
