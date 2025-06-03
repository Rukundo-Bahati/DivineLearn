import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Brain,
  Trophy,
  Calendar,
  Target,
  Clock,
  ArrowRight,
  Flame,
  BookMarked,
} from "lucide-react";

export const Dashboard = () => {
  const userEmail = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName") || userEmail?.split("@")[0] || "Learner";

  // Mock data for the dashboard
  const userProgress = {
    coursesStarted: 3,
    coursesCompleted: 1,
    totalQuizzesTaken: 8,
    currentStreak: 5,
    totalPoints: 750,
    weeklyProgress: 65,
  };

  const recommendedCourses = [
    {
      id: "1",
      title: "Introduction to World Religions",
      progress: 0,
      duration: "2 hours",
      level: "Beginner",
    },
    {
      id: "2",
      title: "Meditation Fundamentals",
      progress: 0,
      duration: "1.5 hours",
      level: "Beginner",
    },
    {
      id: "3",
      title: "Sacred Texts Overview",
      progress: 0,
      duration: "3 hours",
      level: "Intermediate",
    },
  ];

  const quickStats = [
    {
      icon: BookOpen,
      label: "Courses Started",
      value: userProgress.coursesStarted,
      color: "text-blue-500",
    },
    {
      icon: Trophy,
      label: "Courses Completed",
      value: userProgress.coursesCompleted,
      color: "text-green-500",
    },
    {
      icon: Brain,
      label: "Quizzes Taken",
      value: userProgress.totalQuizzesTaken,
      color: "text-purple-500",
    },
    {
      icon: Flame,
      label: "Day Streak",
      value: userProgress.currentStreak,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-divine-ocean mb-2">
          Welcome back, {userName}!
        </h1>
        <p className="text-gray-600">
          Continue your spiritual journey and explore new wisdom.
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {quickStats.map((stat, index) => (
          <Card key={index} className="border-divine-sky/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className={`${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-divine-ocean">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="border-divine-sky/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-divine-ocean" />
              <span>Weekly Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progress towards weekly goal</span>
                <span className="font-medium text-divine-ocean">
                  {userProgress.weeklyProgress}%
                </span>
              </div>
              <Progress value={userProgress.weeklyProgress} className="h-2" />
              <p className="text-sm text-gray-600">
                Keep going! You're making great progress.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-divine-sky/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-divine-ocean" />
              <span>Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-divine-gold" />
                  <span className="text-gray-600">Current Streak</span>
                </div>
                <span className="font-medium text-divine-ocean">
                  {userProgress.currentStreak} days
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BookMarked className="w-5 h-5 text-divine-gold" />
                  <span className="text-gray-600">Divine Points</span>
                </div>
                <span className="font-medium text-divine-ocean">
                  {userProgress.totalPoints} points
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommended Courses */}
      <Card className="border-divine-sky/20 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-divine-ocean" />
            <span>Recommended Courses</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {recommendedCourses.map((course) => (
              <Card key={course.id} className="border-divine-sky/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-divine-ocean mb-2">
                    {course.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 bg-gradient-to-r from-divine-ocean to-divine-sky hover:from-divine-sky hover:to-divine-ocean"
                    size="sm"
                  >
                    Start Learning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 