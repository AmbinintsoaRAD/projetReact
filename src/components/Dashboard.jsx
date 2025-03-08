import { useEffect,useState } from "react"; /**ny useEffect de hoock en react */
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [score,setScore] = useState(0);
  const [quizFinished,setQuizFinished] = useState(false);

  useEffect(() => { 
    const user = sessionStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
  }, []);
  const questions =[
    {
      question: "Quelle est la capitale de la Madagascar ?",
      options: ["Antananarivo", "Itasy", "Anjanahary", "Tamatave"],
      answer: "Antananarivo",
    },
    {
      question: "2 + 2 = ?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "Quel est le langage principal pour créer des pages web ?",
      options: ["Python", "HTML", "Java", "C++"],
      answer: "HTML",
    },
  ];

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer){
      setScore(score +1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 text-white">
    {!quizFinished ? (
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h1>
        <div className="grid grid-cols-2 gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    ) : (
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold mb-4">Quiz terminé ! 🎉</h1>
        <p className="text-xl">Votre score : {score} / {questions.length}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Recommencer
        </button>
      </div>
    )}
  </div>
);
};

export default Dashboard;
