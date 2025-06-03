
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Award, BookOpen, Calendar, Trophy, Heart } from "lucide-react";

interface UserStats {
  coursesCompleted: number;
  totalCourses: number;
  streak: number;
  points: number;
  badges: Badge[];
  weeklyProgress: number[];
}

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earned: boolean;
  earnedDate?: string;
}

const badges: Badge[] = [
  {
    id: '1',
    name: 'First Steps',
    icon: '👶',
    description: 'Complete your first lesson',
    earned: true,
    earnedDate: '2024-05-15'
  },
  {
    id: '2',
    name: 'Wisdom Seeker',
    icon: '🔍',
    description: 'Complete 5 courses',
    earned: true,
    earnedDate: '2024-05-20'
  },
  {
    id: '3',
    name: 'Multi-Faith Explorer',
    icon: '🌍',
    description: 'Learn about 3 different religions',
    earned: true,
    earnedDate: '2024-05-25'
  },
  {
    id: '4',
    name: 'Quiz Master',
    icon: '🧠',
    description: 'Score 100% on 5 quizzes',
    earned: false
  },
  {
    id: '5',
    name: 'Consistent Learner',
    icon: '📅',
    description: 'Maintain a 30-day streak',
    earned: false
  },
  {
    id: '6',
    name: 'Community Helper',
    icon: '🤝',
    description: 'Help 10 fellow learners',
    earned: false
  }
];

const userStats: UserStats = {
  coursesCompleted: 8,
  totalCourses: 25,
  streak: 12,
  points: 2450,
  badges,
  weeklyProgress: [20, 45, 30, 60, 80, 40, 55]
};

export const UserProfile = () => {
  const completionRate = (userStats.coursesCompleted / userStats.totalCourses) * 100;
  const earnedBadges = badges.filter(b => b.earned);

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-pearl to-divine-lavender/20 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Profile Header */}
        <Card className="border-divine-sky/20 mb-8">
          <CardContent className="p-8">
            <div className="flex items-center space-x-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/favicon.ico" />
                <AvatarFallback className="bg-gradient-to-br from-divine-gold to-divine-sky text-white text-2xl">
                  SL
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-divine-ocean mb-2">Spiritual Learner</h1>
                <p className="text-gray-600 mb-4">Exploring wisdom traditions since May 2024</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-divine-ocean">{userStats.points}</div>
                    <div className="text-sm text-gray-600">Divine Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-divine-ocean">{userStats.streak}</div>
                    <div className="text-sm text-gray-600">Day Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-divine-ocean">{userStats.coursesCompleted}</div>
                    <div className="text-sm text-gray-600">Courses Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-divine-ocean">{earnedBadges.length}</div>
                    <div className="text-sm text-gray-600">Badges Earned</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Progress Overview */}
          <Card className="border-divine-sky/20">
            <CardHeader>
              <CardTitle className="flex items-center text-divine-ocean">
                <BookOpen className="w-5 h-5 mr-2" />
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Overall Completion</span>
                    <span className="text-divine-ocean font-medium">{Math.round(completionRate)}%</span>
                  </div>
                  <Progress value={completionRate} className="h-3" />
                </div>
                
                <div>
                  <h4 className="font-medium text-divine-ocean mb-3">This Week's Activity</h4>
                  <div className="flex items-end space-x-2 h-20">
                    {userStats.weeklyProgress.map((value, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-gradient-to-t from-divine-sky to-divine-gold rounded-t"
                          style={{ height: `${value}%` }}
                        />
                        <span className="text-xs text-gray-500 mt-1">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="border-divine-sky/20">
            <CardHeader>
              <CardTitle className="flex items-center text-divine-ocean">
                <Star className="w-5 h-5 mr-2" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {earnedBadges.slice(0, 3).map((badge) => (
                  <div key={badge.id} className="flex items-center space-x-3 p-3 bg-divine-lavender/10 rounded-lg">
                    <span className="text-2xl">{badge.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-divine-ocean">{badge.name}</h4>
                      <p className="text-sm text-gray-600">{badge.description}</p>
                      {badge.earnedDate && (
                        <p className="text-xs text-gray-500">Earned on {badge.earnedDate}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Badges Collection */}
        <Card className="border-divine-sky/20 mt-8">
          <CardHeader>
            <CardTitle className="flex items-center text-divine-ocean">
              <Award className="w-5 h-5 mr-2" />
              Badge Collection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {badges.map((badge) => (
                <div 
                  key={badge.id} 
                  className={`text-center p-4 rounded-lg border-2 transition-all duration-300 ${
                    badge.earned 
                      ? 'border-divine-gold bg-divine-gold/10 scale-105' 
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <h4 className={`font-medium text-sm mb-1 ${
                    badge.earned ? 'text-divine-ocean' : 'text-gray-500'
                  }`}>
                    {badge.name}
                  </h4>
                  <p className={`text-xs ${
                    badge.earned ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contributions */}
        <Card className="border-divine-sky/20 mt-8">
          <CardHeader>
            <CardTitle className="flex items-center text-divine-ocean">
              <Heart className="w-5 h-5 mr-2" />
              Community Contributions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-br from-divine-lavender to-divine-lotus rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-divine-ocean mb-2">Share Your Wisdom</h3>
              <p className="text-gray-600 mb-4">
                Help others by contributing questions, insights, or translations
              </p>
              <Badge variant="outline" className="border-divine-sky text-divine-ocean">
                Coming Soon
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
