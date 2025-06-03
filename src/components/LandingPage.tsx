import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Star,
  Users,
  Award,
  Heart,
  Globe,
  Zap,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LandingPageProps {
  onStartLearning: () => void;
}

export const LandingPage = ({ onStartLearning }: LandingPageProps) => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Star,
      title: "Gamified Learning",
      description: "Earn badges, track progress, and compete on leaderboards while exploring spiritual concepts.",
    },
    {
      icon: Users,
      title: "All Faiths Welcome",
      description: "Learn about Christianity, Islam, Judaism, Hinduism, Buddhism, and more in an inclusive space.",
    },
    {
      icon: Award,
      title: "Bite-sized Lessons",
      description: "Quick 5-10 minute lessons that fit into your busy schedule, perfect for daily spiritual growth.",
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with learners worldwide, share insights, and grow together in understanding.",
    },
    {
      icon: Zap,
      title: "Interactive Learning",
      description: "Engage with multimedia content, quizzes, and practical exercises for deeper understanding.",
    },
    {
      icon: Heart,
      title: "Personalized Path",
      description: "Follow your own spiritual journey with customized learning paths and recommendations.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Interfaith Student",
      content: "DivineLearn has opened my eyes to the beautiful diversity of world religions. The bite-sized lessons make it easy to learn consistently.",
      avatar: "S",
    },
    {
      name: "Ahmed K.",
      role: "Spiritual Seeker",
      content: "The interactive approach and supportive community have made my spiritual journey so much more meaningful. Highly recommended!",
      avatar: "A",
    },
    {
      name: "Rachel L.",
      role: "Religious Scholar",
      content: "As someone who studies religion academically, I'm impressed by the depth and accuracy of the content while remaining accessible.",
      avatar: "R",
    },
  ];

  return (
    <div className="min-h-screen">
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
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={onStartLearning}
              className="bg-gradient-to-r from-divine-ocean to-divine-sky hover:from-divine-sky hover:to-divine-ocean text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Learning
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/register")}
              className="border-divine-sky text-divine-ocean hover:bg-divine-lavender/20 px-8 py-6 text-lg rounded-full"
            >
              Create Account
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-divine-pearl/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine-ocean mb-4">Why Choose DivineLearn?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform combines modern learning technology with timeless spiritual wisdom
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center border-divine-sky/20 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-divine-gold to-divine-sunset rounded-full mx-auto mb-4 flex items-center justify-center">
                  {<feature.icon className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-divine-ocean">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-divine-ocean text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-divine-pearl/80">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-divine-pearl/80">Lessons</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-divine-pearl/80">Faith Traditions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-divine-pearl/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-divine-pearl/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine-ocean mb-4">What Our Learners Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of spiritual seekers who have found their path with DivineLearn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-divine-sky/20">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-divine-gold to-divine-sky rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-divine-ocean">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-divine-ocean to-divine-sky text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-divine-pearl/90 max-w-2xl mx-auto">
            Join our growing community of spiritual seekers and start exploring the wisdom of world religions today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => navigate("/register")}
              className="bg-white text-divine-ocean hover:bg-divine-pearl px-8 py-6 text-lg rounded-full"
            >
              Create Free Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/login")}
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-divine-ocean mb-12 text-center">
              Everything You Need to Grow
            </h2>
            
            <div className="space-y-6">
              {[
                "Access to comprehensive lessons on major world religions",
                "Interactive quizzes and assessments to test your knowledge",
                "Personalized learning paths based on your interests",
                "Community forums for discussion and sharing insights",
                "Progress tracking and achievement badges",
                "Mobile-friendly platform for learning on the go",
                "Expert-curated content ensuring accuracy and respect",
                "Regular updates with new lessons and features",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-divine-gold" />
                  </div>
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-b from-divine-pearl/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-divine-ocean mb-6">Join Our Global Community</h2>
            <p className="text-xl text-gray-600 mb-12">
              Connect with fellow seekers, share your insights, and grow together in understanding and wisdom.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border-divine-sky/20 text-center">
                <Users className="w-12 h-12 text-divine-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-divine-ocean mb-2">Discussion Forums</h3>
                <p className="text-gray-600">Engage in meaningful conversations about spirituality and faith</p>
              </Card>
              
              <Card className="p-6 border-divine-sky/20 text-center">
                <MessageCircle className="w-12 h-12 text-divine-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-divine-ocean mb-2">Study Groups</h3>
                <p className="text-gray-600">Form or join study groups to learn together and share perspectives</p>
              </Card>
              
              <Card className="p-6 border-divine-sky/20 text-center">
                <Globe className="w-12 h-12 text-divine-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-divine-ocean mb-2">Global Events</h3>
                <p className="text-gray-600">Participate in online events, workshops, and discussions</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
