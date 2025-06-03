import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // For demo purposes, using test credentials
    if (email === "demo@divinelearn.com" && password === "divine123") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      
      toast({
        title: "Success!",
        description: "Welcome back to DivineLearn",
      });
      setTimeout(() => {
        navigate("/", { state: { redirectToDashboard: true } });
      }, 1000);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid credentials. Please try again.",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-pearl to-divine-lavender/20 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-divine-gold to-divine-sky rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">D</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-divine-ocean to-divine-gold bg-clip-text text-transparent">
            Welcome Back
          </h1>
        </div>

        <Card className="border-divine-sky/20">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Continue your spiritual journey with DivineLearn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-divine-sky/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-divine-sky/30 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-divine-ocean to-divine-sky hover:from-divine-sky hover:to-divine-ocean"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Signing in..."
                ) : (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </>
                )}
              </Button>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Button
                    variant="link"
                    className="text-divine-ocean p-0"
                    onClick={() => navigate("/register")}
                  >
                    Register here
                  </Button>
                </p>
                <p className="text-xs text-gray-500">
                  Test credentials: demo@divinelearn.com / divine123
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 