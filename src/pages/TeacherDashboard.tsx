import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, PenTool, Volume2, ScanLine, BarChart3, Users, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Create Lessons",
      description: "Design engaging lessons for multiple grades and subjects",
      icon: BookOpen,
      action: () => navigate("/teacher/lessons/create"),
      variant: "teacher" as const,
      color: "bg-subject-language"
    },
    {
      title: "Audio Lessons",
      description: "Read lessons aloud in multiple languages", 
      icon: Volume2,
      action: () => navigate("/teacher/audio"),
      variant: "secondary" as const,
      color: "bg-subject-arts"
    },
    {
      title: "Create Quizzes",
      description: "Build assessments for your lessons",
      icon: PenTool,
      action: () => navigate("/teacher/quizzes/create"),
      variant: "tertiary" as const,
      color: "bg-subject-math"
    },
    {
      title: "Scan & Grade",
      description: "Automatically grade homework and quizzes",
      icon: ScanLine,
      action: () => navigate("/teacher/grading"),
      variant: "subject" as const,
      color: "bg-subject-science"
    },
    {
      title: "Analytics",
      description: "Track student progress across grades",
      icon: BarChart3,
      action: () => navigate("/teacher/analytics"),
      variant: "default" as const,
      color: "bg-subject-social"
    },
    {
      title: "Manage Students",
      description: "Organize your multi-grade classroom",
      icon: Users,
      action: () => navigate("/teacher/students"),
      variant: "outline" as const,
      color: "bg-subject-math"
    }
  ];

  const stats = [
    { label: "Active Lessons", value: "12", icon: BookOpen },
    { label: "Students", value: "45", icon: Users },
    { label: "Pending Grades", value: "8", icon: Clock },
    { label: "Avg Score", value: "87%", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Home
            </Button>
            <h1 className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
              Teacher Dashboard
            </h1>
            <div className="w-20" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage your multi-grade classroom with AI-powered tools for personalized learning
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-200">
              <CardContent className="p-4">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group cursor-pointer border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50"
              onClick={feature.action}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-xl ${feature.color} text-white shadow-soft`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {feature.description}
                </CardDescription>
                <Button 
                  variant={feature.variant} 
                  size="sm" 
                  className="w-full opacity-80 group-hover:opacity-100 transition-opacity"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Math Quiz Grade 3 - Created</span>
                <span className="text-xs text-muted-foreground">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Science Lesson Grade 4 - Audio Generated</span>
                <span className="text-xs text-muted-foreground">4 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">Language Arts Quiz - 15 submissions graded</span>
                <span className="text-xs text-muted-foreground">1 day ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;