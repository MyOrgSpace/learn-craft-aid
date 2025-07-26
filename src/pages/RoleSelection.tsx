import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-strong">
          <img 
            src={heroImage} 
            alt="Modern classroom with diverse students learning" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h1 className="text-5xl font-bold">
                  LearnCraft Aid
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="space-y-6 animate-fade-in">
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering educators in multi-grade classrooms with AI-powered tools for 
            <span className="text-primary font-semibold"> personalized learning, lesson creation, and automated grading</span>
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>AI-Powered Lessons</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Multi-Grade Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>Personalized Learning</span>
            </div>
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Teacher Card */}
          <Card className="group cursor-pointer border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-secondary-light/20">
            <CardHeader className="pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-6 rounded-2xl bg-gradient-secondary text-secondary-foreground shadow-medium group-hover:shadow-strong transition-all duration-300">
                  <GraduationCap className="h-12 w-12" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center text-foreground group-hover:text-secondary transition-colors">
                I'm a Teacher
              </CardTitle>
              <CardDescription className="text-center text-muted-foreground text-base">
                Create lessons, manage multiple grades, generate quizzes, and track student progress with AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Multi-grade lesson planning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Automated quiz generation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>AI-powered grading</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Audio lesson generation</span>
                </li>
              </ul>
              <Button 
                variant="teacher" 
                size="xl" 
                className="w-full"
                onClick={() => navigate("/teacher")}
              >
                Enter Teacher Dashboard
              </Button>
            </CardContent>
          </Card>

          {/* Student Card */}
          <Card className="group cursor-pointer border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-tertiary-light/20">
            <CardHeader className="pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-6 rounded-2xl bg-gradient-tertiary text-tertiary-foreground shadow-medium group-hover:shadow-strong transition-all duration-300">
                  <Users className="h-12 w-12" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center text-foreground group-hover:text-tertiary transition-colors">
                I'm a Student
              </CardTitle>
              <CardDescription className="text-center text-muted-foreground text-base">
                Access your personalized lessons, take quizzes, listen to audio content, and track your learning progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  <span>Personalized lesson content</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  <span>Interactive quizzes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  <span>Audio learning support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  <span>Progress tracking</span>
                </li>
              </ul>
              <Button 
                variant="student" 
                size="xl" 
                className="w-full"
                onClick={() => navigate("/student")}
              >
                Enter Student Portal
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="text-center space-y-2 text-sm text-muted-foreground">
          <p>Built for educators managing diverse learning environments</p>
          <p className="text-xs">Supporting personalized education for every student</p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;