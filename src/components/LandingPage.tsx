
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Star, Users, Award } from "lucide-react";

interface LandingPageProps {
  onStartLearning: () => void;
}

export const LandingPage = ({ onStartLearning }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-pearl via-divine-lavender/30 to-divine-sky/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-gentle-float mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-divine-gold to-divine-sky rounded-full mx-auto flex items-center justify-center mb-6 animate-soft-glow">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-divine-ocean via-divine-gold to-divine-lavender bg-clip-text text-transparent">
            Explore the Divine,
            <br />
            One Lesson at a Time
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover spiritual wisdom from all faiths through bite-sized, interactive lessons. 
            Learn about different beliefs, practices, and traditions in a peaceful, inclusive environment.
          </p>
          
          <Button 
            size="lg" 
            onClick={onStartLearning}
            className="bg-gradient-to-r from-divine-ocean to-divine-sky hover:from-divine-sky hover:to-divine-ocean text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Learning
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center border-divine-sky/20 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-divine-gold to-divine-sunset rounded-full mx-auto mb-4 flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-divine-ocean">Gamified Learning</h3>
            <p className="text-gray-600">Earn badges, track progress, and compete on leaderboards while exploring spiritual concepts.</p>
          </Card>
          
          <Card className="p-6 text-center border-divine-sky/20 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-divine-lavender to-divine-lotus rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-divine-ocean">All Faiths Welcome</h3>
            <p className="text-gray-600">Learn about Christianity, Islam, Judaism, Hinduism, Buddhism, and more in an inclusive space.</p>
          </Card>
          
          <Card className="p-6 text-center border-divine-sky/20 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-divine-sage to-divine-ocean rounded-full mx-auto mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-divine-ocean">Bite-sized Lessons</h3>
            <p className="text-gray-600">Quick 5-10 minute lessons that fit into your busy schedule, perfect for daily spiritual growth.</p>
          </Card>
        </div>
      </section>
    </div>
  );
};
