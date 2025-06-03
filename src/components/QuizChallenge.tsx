
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Trophy, Users } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  encouragement: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "In Hinduism, what does 'Om' represent?",
    options: ["A meditation posture", "The sound of the universe", "A type of prayer", "A sacred text"],
    correct: 1,
    encouragement: "Wonderful! Om is indeed considered the primordial sound of creation."
  },
  {
    id: 2,
    question: "Which religion emphasizes the Five Pillars as core practices?",
    options: ["Christianity", "Buddhism", "Islam", "Judaism"],
    correct: 2,
    encouragement: "Excellent! The Five Pillars are fundamental to Islamic practice."
  },
  {
    id: 3,
    question: "What is the central concept in Buddhism for ending suffering?",
    options: ["Nirvana", "Karma", "Dharma", "Samsara"],
    correct: 0,
    encouragement: "Perfect! Nirvana represents the ultimate goal of liberation from suffering."
  }
];

export const QuizChallenge = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-pearl to-divine-lavender/20 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-divine-ocean mb-2">Daily Wisdom Challenge</h2>
          <p className="text-gray-600">Test your knowledge and earn divine points!</p>
        </div>

        {/* Progress and Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="border-divine-sky/20">
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-divine-ocean" />
              <div className="text-2xl font-bold text-divine-ocean">{timeLeft}s</div>
              <div className="text-sm text-gray-600">Time Left</div>
            </CardContent>
          </Card>
          
          <Card className="border-divine-sky/20">
            <CardContent className="p-4 text-center">
              <Trophy className="w-6 h-6 mx-auto mb-2 text-divine-gold" />
              <div className="text-2xl font-bold text-divine-ocean">{score}/{questions.length}</div>
              <div className="text-sm text-gray-600">Score</div>
            </CardContent>
          </Card>
          
          <Card className="border-divine-sky/20">
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-divine-sage" />
              <div className="text-2xl font-bold text-divine-ocean">#3</div>
              <div className="text-sm text-gray-600">Leaderboard</div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-divine-ocean font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Question Card */}
        <Card className="border-divine-sky/20 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-divine-ocean text-center">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full p-4 text-left justify-start h-auto border-divine-sky/30 hover:bg-divine-lavender/20 ${
                    selectedAnswer === index 
                      ? showResult
                        ? index === currentQ.correct
                          ? 'bg-green-100 border-green-500 text-green-700'
                          : 'bg-red-100 border-red-500 text-red-700'
                        : 'bg-divine-sky/20 border-divine-sky'
                      : showResult && index === currentQ.correct
                        ? 'bg-green-100 border-green-500 text-green-700'
                        : ''
                  }`}
                  onClick={() => !showResult && handleAnswerSelect(index)}
                  disabled={showResult}
                >
                  <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>
            
            {showResult && (
              <div className="mt-6 p-4 bg-divine-lavender/20 rounded-lg text-center">
                <p className="text-divine-ocean font-medium mb-2">
                  {selectedAnswer === currentQ.correct ? "🎉 Correct!" : "💫 Great try!"}
                </p>
                <p className="text-gray-600 italic">"{currentQ.encouragement}"</p>
              </div>
            )}
            
            <div className="mt-6 flex justify-center">
              {!showResult ? (
                <Button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="bg-gradient-to-r from-divine-ocean to-divine-sky hover:from-divine-sky hover:to-divine-ocean text-white px-8"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-divine-gold to-divine-sunset hover:from-divine-sunset hover:to-divine-gold text-white px-8"
                >
                  {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Challenge"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
