import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { LandingPage } from "@/components/LandingPage";
import { CourseDashboard } from "@/components/CourseDashboard";
import { QuizChallenge } from "@/components/QuizChallenge";
import { UserProfile } from "@/components/UserProfile";
import { CourseLearning } from "@/components/CourseLearning";
import { Dashboard } from "@/components/Dashboard";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, User, Home, LayoutDashboard } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Page = 'landing' | 'dashboard' | 'courses' | 'quiz' | 'profile' | 'learning';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');
  const navigate = useNavigate();
  const { toast } = useToast();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    // If user is logged in, show dashboard instead of landing page
    if (isLoggedIn && currentPage === 'landing') {
      setCurrentPage('dashboard');
    }
  }, [isLoggedIn]);

  const handleStartLearning = () => {
    if (!isLoggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please sign in or create an account to start learning.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    setCurrentPage('courses');
  };

  const handleCourseSelect = (courseId: string) => {
    if (!isLoggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please sign in or create an account to access courses.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    setSelectedCourseId(courseId);
    setCurrentPage('learning');
  };

  const handlePageChange = (page: Page) => {
    if (!isLoggedIn && page !== 'landing') {
      toast({
        title: "Authentication Required",
        description: "Please sign in or create an account to access this feature.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    setCurrentPage(page);
  };

  const handleBackToCourses = () => {
    setCurrentPage('courses');
    setSelectedCourseId('');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onStartLearning={handleStartLearning} />;
      case 'dashboard':
        return <Dashboard />;
      case 'courses':
        return <CourseDashboard onCourseSelect={handleCourseSelect} />;
      case 'quiz':
        return <QuizChallenge />;
      case 'profile':
        return <UserProfile />;
      case 'learning':
        return <CourseLearning courseId={selectedCourseId} onBackToCourses={handleBackToCourses} />;
      default:
        return isLoggedIn ? <Dashboard /> : <LandingPage onStartLearning={handleStartLearning} />;
    }
  };

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, showWhenLoggedIn: true },
    { id: 'courses', label: 'Courses', icon: BookOpen, showWhenLoggedIn: true },
    { id: 'quiz', label: 'Quiz', icon: Brain, showWhenLoggedIn: true },
    { id: 'profile', label: 'Profile', icon: User, showWhenLoggedIn: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-pearl to-divine-lavender/20">
      <Header />
      
      {/* Navigation Bar - Hide during course learning and show only when logged in */}
      {currentPage !== 'learning' && (
        <nav className="bg-white/60 backdrop-blur-sm border-b border-divine-sky/20 sticky top-[73px] z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-1 py-3">
              {navigationItems
                .filter(item => !isLoggedIn ? !item.showWhenLoggedIn : item.showWhenLoggedIn)
                .map(({ id, label, icon: Icon }) => (
                  <Button
                    key={id}
                    variant={currentPage === id ? "default" : "ghost"}
                    onClick={() => handlePageChange(id as Page)}
                    className={`flex items-center space-x-2 px-4 py-2 ${
                      currentPage === id
                        ? 'bg-gradient-to-r from-divine-ocean to-divine-sky text-white shadow-md'
                        : 'text-divine-ocean hover:bg-divine-lavender/20'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </Button>
                ))}
            </div>
          </div>
        </nav>
      )}

      {/* Page Content */}
      <main>
        {renderPage()}
      </main>
      
      {/* Footer - Hide during course learning */}
      {currentPage !== 'learning' && (
        <footer className="bg-divine-ocean/10 border-t border-divine-sky/20 py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-divine-gold to-divine-sky rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-divine-ocean font-semibold">DivineLearn</span>
            </div>
            <p className="text-gray-600 text-sm">
              Bridging faiths through education • Building understanding through wisdom
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2024 DivineLearn. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Index;
