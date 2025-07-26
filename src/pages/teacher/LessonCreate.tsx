import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Eye, Wand2, BookOpen, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const LessonCreate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    grade: "",
    duration: "",
    content: "",
    learningObjectives: "",
    difficulty: ""
  });

  const subjects = [
    { value: "maths", label: "Mathematics", color: "bg-subject-math" },
    { value: "english", label: "English", color: "bg-subject-science" },
    { value: "hindi", label: "Hindi", color: "bg-subject-language" }
  ];

  const grades = ["1", "2", "3", "4", "5"];

  const handleSubmit = () => {
    if (!formData.title || !formData.subject || !formData.grade) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Lesson Created!",
      description: "Your lesson has been saved successfully",
    });
    
    // Navigate back to dashboard
    setTimeout(() => navigate("/teacher"), 1500);
  };
/** 
  const generateContent = () => {
    const sampleContent = `# ${formData.title || "Sample Lesson"}

## Learning Objectives
By the end of this lesson, students will be able to:
- Understand the key concepts
- Apply knowledge through practice
- Demonstrate mastery through assessment

## Introduction (5 minutes)
Welcome students and introduce today's topic. Use engaging visuals and real-world examples to capture interest.

## Main Content (20 minutes)
### Key Concept 1
Explain the fundamental ideas with clear examples and interactive demonstrations.

### Activity
Guide students through hands-on practice to reinforce learning.

## Assessment (10 minutes)
Quick formative assessment to check understanding.

## Wrap-up (5 minutes)
Summarize key points and preview next lesson.`;

    setFormData(prev => ({ ...prev, content: sampleContent }));
    toast({
      title: "Content Generated!",
      description: "AI has created a lesson structure for you",
    });
  };
*/
const generateContent = async () => {
  try {
    // Construct the API endpoint and request body based on your backend
    const apiEndpoint = '/api/generateLessonContent'; // Replace with your actual endpoint
    const requestBody = {
      title: formData.title,
      subject: formData.subject,
      grade: formData.grade,
      // Add other relevant formData properties as needed by your API
    };

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Assuming your API returns the generated content in a field named 'content'
    setFormData(prev => ({ ...prev, content: data.content }));

    toast({
      title: "Content Generated!",
      description: "AI has created lesson content for you",
    });
  } catch (error) {
    console.error("Error generating content:", error);
    toast({
      title: "Error",
      description: "Failed to generate lesson content",
      variant: "destructive",
    });
  }
};

  return (
    <div className="min-h-screen bg-gradient-warm p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/teacher")}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-foreground">Create New Lesson</h1>
          <div className="w-32" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Lesson Details</span>
                </CardTitle>
                <CardDescription>
                  Create engaging, grade-appropriate content for your students
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Lesson Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Introduction to Fractions"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input
                      id="duration"
                      type="number"
                      placeholder="10"
                      value={formData.duration}
                      onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={formData.subject} onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject.value} value={subject.value}>
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                              <span>{subject.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade Level *</Label>
                    <Select value={formData.grade} onValueChange={(value) => setFormData(prev => ({ ...prev, grade: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {grades.map((grade) => (
                          <SelectItem key={grade} value={grade}>Grade {grade}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <Select value={formData.difficulty} onValueChange={(value) => setFormData(prev => ({ ...prev, difficulty: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="objectives">Learning Objectives</Label>
                  <Textarea
                    id="objectives"
                    placeholder="What will students learn? List the key objectives..."
                    rows={3}
                    value={formData.learningObjectives}
                    onChange={(e) => setFormData(prev => ({ ...prev, learningObjectives: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="content">Lesson Content</Label>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={generateContent}
                      disabled={!formData.title || !formData.subject || !formData.grade}
                    >
                      <Wand2 className="h-4 w-4 mr-2" />
                      Generate with AI
                    </Button>
                  </div>
                  <Textarea
                    id="content"
                    placeholder="Write your lesson content here, or use AI to generate a structure..."
                    rows={12}
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Lesson Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Subject:</span>
                  {formData.subject ? (
                    <Badge variant="secondary">
                      {subjects.find(s => s.value === formData.subject)?.label}
                    </Badge>
                  ) : (
                    <span className="text-sm text-muted-foreground">Not selected</span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Grade:</span>
                  {formData.grade ? (
                    <Badge variant="outline">Grade {formData.grade}</Badge>
                  ) : (
                    <span className="text-sm text-muted-foreground">Not selected</span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Duration:</span>
                  <span className="text-sm">{formData.duration || "Not set"} min</span>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-2">Content Length:</div>
                  <div className="text-sm">{formData.content.length} characters</div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-4 space-y-3">
                <Button 
                  onClick={handleSubmit}
                  className="w-full"
                  variant="teacher"
                  size="lg"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Lesson
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  disabled={!formData.content}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="border-0 shadow-soft bg-gradient-to-b from-primary-light to-primary-light/50">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                  <Target className="h-4 w-4 mr-2" />
                  Tips for Success
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Keep content age-appropriate</li>
                  <li>• Include interactive elements</li>
                  <li>• Add visual aids and examples</li>
                  <li>• Plan for different learning styles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonCreate;