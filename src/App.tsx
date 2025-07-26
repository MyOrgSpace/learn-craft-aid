import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RoleSelection from "./pages/RoleSelection";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import LessonCreate from "./pages/teacher/LessonCreate";
import PlaceholderPage from "./pages/teacher/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/teacher/lessons/create" element={<LessonCreate />} />
          <Route 
            path="/teacher/audio" 
            element={<PlaceholderPage 
              title="Audio Lessons" 
              description="Generate and manage audio content for your lessons in multiple languages"
              feature="Text-to-Speech Integration"
            />} 
          />
          <Route 
            path="/teacher/quizzes/create" 
            element={<PlaceholderPage 
              title="Quiz Creator" 
              description="Create interactive quizzes and assessments for your lessons"
              feature="AI Quiz Generation"
            />} 
          />
          <Route 
            path="/teacher/grading" 
            element={<PlaceholderPage 
              title="Scan & Grade" 
              description="Automatically scan and grade homework and quiz submissions"
              feature="AI-Powered Grading"
            />} 
          />
          <Route 
            path="/teacher/analytics" 
            element={<PlaceholderPage 
              title="Student Analytics" 
              description="Track student progress and performance across subjects and grades"
              feature="Learning Analytics Dashboard"
            />} 
          />
          <Route 
            path="/teacher/students" 
            element={<PlaceholderPage 
              title="Student Management" 
              description="Organize and manage your multi-grade classroom effectively"
              feature="Classroom Management Tools"
            />} 
          />
          {/* Student routes */}
          <Route 
            path="/student/lessons" 
            element={<PlaceholderPage 
              title="My Lessons" 
              description="Access your personalized learning content"
              feature="Student Learning Portal"
            />} 
          />
          <Route 
            path="/student/audio" 
            element={<PlaceholderPage 
              title="Listen & Learn" 
              description="Audio lessons in your preferred language"
              feature="Audio Learning Experience"
            />} 
          />
          <Route 
            path="/student/quiz" 
            element={<PlaceholderPage 
              title="Take Quiz" 
              description="Interactive quizzes to test your knowledge"
              feature="Student Assessment Portal"
            />} 
          />
          <Route 
            path="/student/progress" 
            element={<PlaceholderPage 
              title="My Progress" 
              description="Track your learning journey and achievements"
              feature="Student Progress Dashboard"
            />} 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
