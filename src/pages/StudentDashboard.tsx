import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Play, CheckSquare, Trophy, Star, Clock, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const activities = [
    {
      title: "Today's Lessons",
      description: "Continue your learning journey",
      icon: BookOpen,
      action: () => navigate("/student/lessons"),
      variant: "student" as const,
      badge: "3 new"
    },
    {
      title: "Listen & Learn",
      description: "Audio lessons in your language",
      icon: Play,
      action: () => navigate("/student/audio"),
      variant: "secondary" as const,
      badge: "Available"
    },
    {
      title: "Take Quiz",
      description: "Test your knowledge",
      icon: CheckSquare,
      action: () => navigate("/student/quiz"),
      variant: "tertiary" as const,
      badge: "2 pending"
    },
    {
      title: "My Progress",
      description: "See how you're doing",
      icon: Trophy,
      action: () => navigate("/student/progress"),
      variant: "subject" as const,
      badge: "87%"
    }
  ];

  const subjects = [
    { name: "Mathematics", progress: 75, color: "bg-subject-math", next: "Fractions" },
    { name: "Science", progress: 82, color: "bg-subject-science", next: "Solar System" },
    { name: "Language Arts", progress: 90, color: "bg-subject-language", next: "Reading Comp" },
    { name: "Social Studies", progress: 68, color: "bg-subject-social", next: "Geography" }
  ];

  const achievements = [
    { title: "Math Master", description: "Completed 10 math lessons", icon: Star },
    { title: "Reading Star", description: "Read 5 stories this week", icon: BookOpen },
    { title: "Quiz Champion", description: "Scored 90%+ on 3 quizzes", icon: Trophy }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm p-6">
      <div className="max-w-6xl mx-auto space-y-8">
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
            <h1 className="text-4xl font-bold bg-gradient-tertiary bg-clip-text text-transparent">
              Welcome back, Student!
            </h1>
            <div className="w-20" />
          </div>
          <p className="text-lg text-muted-foreground">
            Ready to learn something new today?
          </p>
        </div>

        {/* Main Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className="group cursor-pointer border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50 relative overflow-hidden"
              onClick={activity.action}
            >
              {activity.badge && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  {activity.badge}
                </div>
              )}
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-4 rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                    <activity.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {activity.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {activity.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  variant={activity.variant} 
                  size="lg" 
                  className="w-full"
                >
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subject Progress */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-primary" />
              <span>Your Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjects.map((subject, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                      <span className="font-medium">{subject.name}</span>
                    </div>
                    <span className="text-sm font-bold text-primary">{subject.progress}%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Next: {subject.next}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span>Recent Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-b from-primary-light to-primary-light/50 rounded-lg">
                  <achievement.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;