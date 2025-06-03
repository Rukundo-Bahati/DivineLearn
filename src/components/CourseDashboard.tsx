
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Play, CheckCircle, Lock } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  progress: number;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  completed: boolean;
  locked: boolean;
}

interface CourseDashboardProps {
  onCourseSelect: (courseId: string) => void;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'God in Hinduism',
    description: 'Explore the diverse concepts of the divine in Hindu traditions',
    duration: '8 min',
    progress: 100,
    icon: '🕉️',
    difficulty: 'Beginner',
    completed: true,
    locked: false
  },
  {
    id: '2',
    title: 'What is Monotheism?',
    description: 'Understanding the belief in one supreme deity',
    duration: '6 min',
    progress: 75,
    icon: '☪️',
    difficulty: 'Beginner',
    completed: false,
    locked: false
  },
  {
    id: '3',
    title: 'Buddhist Compassion',
    description: 'The heart of Buddhist teachings on loving-kindness',
    duration: '10 min',
    progress: 30,
    icon: '☸️',
    difficulty: 'Intermediate',
    completed: false,
    locked: false
  },
  {
    id: '4',
    title: 'Christian Trinity',
    description: 'Understanding the Father, Son, and Holy Spirit',
    duration: '7 min',
    progress: 0,
    icon: '✝️',
    difficulty: 'Intermediate',
    completed: false,
    locked: false
  },
  {
    id: '5',
    title: 'Jewish Sabbath',
    description: 'The sacred practice of rest and reflection',
    duration: '5 min',
    progress: 0,
    icon: '✡️',
    difficulty: 'Beginner',
    completed: false,
    locked: false
  },
  {
    id: '6',
    title: 'Islamic Prayer',
    description: 'The five daily prayers and their significance',
    duration: '9 min',
    progress: 0,
    icon: '🕌',
    difficulty: 'Beginner',
    completed: false,
    locked: true
  }
];

export const CourseDashboard = ({ onCourseSelect }: CourseDashboardProps) => {
  const handleCourseClick = (course: Course) => {
    if (!course.locked) {
      onCourseSelect(course.id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-pearl to-divine-lavender/20 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-divine-ocean mb-2">Your Learning Journey</h2>
          <p className="text-gray-600">Continue exploring spiritual wisdom at your own pace</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="border-divine-sky/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{course.icon}</span>
                  {course.completed && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {course.locked && <Lock className="w-5 h-5 text-gray-400" />}
                </div>
                <CardTitle className="text-lg text-divine-ocean">{course.title}</CardTitle>
                <p className="text-sm text-gray-600">{course.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    course.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {course.difficulty}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-divine-ocean font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                
                <Button 
                  className={`w-full ${
                    course.locked 
                      ? 'bg-gray-300 cursor-not-allowed' 
                      : course.completed 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-gradient-to-r from-divine-ocean to-divine-sky hover:from-divine-sky hover:to-divine-ocean'
                  } text-white`}
                  disabled={course.locked}
                  onClick={() => handleCourseClick(course)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  {course.locked ? 'Locked' : course.completed ? 'Review' : course.progress > 0 ? 'Continue' : 'Start'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
