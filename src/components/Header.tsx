import { Button } from "@/components/ui/button";
import { Globe, User, LogIn } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-divine-sky/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-8 h-8 bg-gradient-to-br from-divine-gold to-divine-sky rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-divine-ocean to-divine-gold bg-clip-text text-transparent">
            DivineLearn
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Select defaultValue="en">
            <SelectTrigger className="w-32 border-divine-sky/30">
              <Globe className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="ar">العربية</SelectItem>
              <SelectItem value="hi">हिन्दी</SelectItem>
              <SelectItem value="he">עברית</SelectItem>
            </SelectContent>
          </Select>
          
          {isLoggedIn ? (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-divine-ocean hover:bg-divine-lavender/20"
              onClick={() => navigate("/share")}
            >
              <User className="w-4 h-4 mr-2" />
               Share
            </Button>
          ) : (
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-divine-ocean hover:bg-divine-lavender/20"
                onClick={() => navigate("/login")}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-divine-ocean to-divine-sky hover:from-divine-sky hover:to-divine-ocean text-white"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
