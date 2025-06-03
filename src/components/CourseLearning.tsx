
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, BookOpen } from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  content: string;
  image?: string;
  keyPoints: string[];
}

interface CourseData {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

interface CourseLearningProps {
  courseId: string;
  onBackToCourses: () => void;
}

const coursesData: { [key: string]: CourseData } = {
  '1': {
    id: '1',
    title: 'God in Hinduism',
    description: 'Explore the diverse concepts of the divine in Hindu traditions',
    icon: '🕉️',
    lessons: [
      {
        id: '1-1',
        title: 'Introduction to Hindu Concepts of God',
        content: 'Hinduism presents a rich tapestry of divine concepts, from the ultimate reality of Brahman to the personal deities that millions worship daily. Unlike monotheistic religions, Hinduism embraces both unity and diversity in its understanding of the divine.',
        keyPoints: [
          'Brahman represents the ultimate, formless reality',
          'Personal deities (Ishta Devata) help connect with the divine',
          'The concept of "many paths, one truth" (Ekam Sat Vipra Bahudha Vadanti)'
        ]
      },
      {
        id: '1-2',
        title: 'Brahman: The Ultimate Reality',
        content: 'Brahman is described in Hindu philosophy as Sat-Chit-Ananda: existence, consciousness, and bliss. This formless, infinite reality is beyond human comprehension yet is the essence of all existence.',
        keyPoints: [
          'Sat (Existence) - eternal, unchanging being',
          'Chit (Consciousness) - pure awareness and knowledge',
          'Ananda (Bliss) - infinite joy and peace'
        ]
      },
      {
        id: '1-3',
        title: 'The Trinity: Brahma, Vishnu, Shiva',
        content: 'The Hindu trinity represents three fundamental aspects of divine function: creation (Brahma), preservation (Vishnu), and transformation (Shiva). These are not separate gods but different manifestations of the one divine reality.',
        keyPoints: [
          'Brahma - the creator aspect of divinity',
          'Vishnu - the preserver who maintains cosmic order',
          'Shiva - the transformer who enables renewal and growth'
        ]
      }
    ]
  },
  '2': {
    id: '2',
    title: 'What is Monotheism?',
    description: 'Understanding the belief in one supreme deity',
    icon: '☪️',
    lessons: [
      {
        id: '2-1',
        title: 'Defining Monotheism',
        content: 'Monotheism is the belief in the existence of only one God. This concept forms the foundation of Judaism, Christianity, and Islam, though each tradition has its unique understanding of the divine nature.',
        keyPoints: [
          'Belief in one supreme, all-powerful deity',
          'Rejection of multiple gods or goddesses',
          'Central to Abrahamic faiths'
        ]
      }
    ]
  }
};

export const CourseLearning = ({ courseId, onBackToCourses }: CourseLearningProps) => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  const courseData = coursesData[courseId];
  
  if (!courseData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-divine-pearl to-divine-lavender/20 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center py-8">
            <p className="text-gray-600 mb-4">Course not found</p>
            <Button onClick={onBackToCourses}>Back to Courses</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentLesson = courseData.lessons[currentLessonIndex];
  const totalLessons = courseData.lessons.length;
  const progress = ((currentLessonIndex + 1) / totalLessons) * 100;

  const handleNextLesson = () => {
    if (currentLessonIndex < totalLessons - 1) {
      setCompletedLessons(prev => new Set(prev.add(currentLesson.id)));
      setCurrentLessonIndex(prev => prev + 1);
    }
  };

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prev => prev - 1);
    }
  };

  const handleCompleteLesson = () => {
    setCompletedLessons(prev => new Set(prev.add(currentLesson.id)));
  };

  const isLastLesson = currentLessonIndex === totalLessons - 1;
  const isLessonCompleted = completedLessons.has(currentLesson.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-pearl to-divine-lavender/20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-divine-sky/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={onBackToCourses}
                className="text-divine-ocean hover:bg-divine-lavender/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{courseData.icon}</span>
                <div>
                  <h1 className="text-xl font-bold text-divine-ocean">{courseData.title}</h1>
                  <p className="text-sm text-gray-600">Lesson {currentLessonIndex + 1} of {totalLessons}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32">
                <Progress value={progress} className="h-2" />
              </div>
              <span className="text-sm text-divine-ocean font-medium">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-divine-sky/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-divine-ocean flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                {currentLesson.title}
                {isLessonCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {currentLesson.content}
                </p>
              </div>

              <div className="bg-divine-sky/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-divine-ocean mb-4">Key Points:</h3>
                <ul className="space-y-2">
                  {currentLesson.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-divine-gold rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {!isLessonCompleted && (
                <div className="text-center">
                  <Button
                    onClick={handleCompleteLesson}
                    className="bg-gradient-to-r from-divine-ocean to-divine-sky hover:from-divine-sky hover:to-divine-ocean text-white px-6 py-2"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mark as Complete
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              onClick={handlePreviousLesson}
              disabled={currentLessonIndex === 0}
              className="border-divine-sky/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Lesson
            </Button>

            {isLastLesson ? (
              <Button
                onClick={onBackToCourses}
                className="bg-gradient-to-r from-divine-gold to-divine-sunset hover:from-divine-sunset hover:to-divine-gold text-white"
              >
                Course Complete!
                <CheckCircle className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleNextLesson}
                disabled={!isLessonCompleted}
                className="bg-gradient-to-r from-divine-ocean to-divine-sky hover:from-divine-sky hover:to-divine-ocean text-white"
              >
                Next Lesson
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
