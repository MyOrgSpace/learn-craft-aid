import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Construction } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  feature: string;
}

const PlaceholderPage = ({ title, description, feature }: PlaceholderPageProps) => {
  const navigate = useNavigate();

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
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <div className="w-32" />
        </div>

        {/* Coming Soon Card */}
        <Card className="border-0 shadow-soft text-center">
          <CardHeader className="pb-6">
            <div className="flex justify-center mb-4">
              <div className="p-6 rounded-2xl bg-gradient-primary text-primary-foreground shadow-medium">
                <Construction className="h-12 w-12" />
              </div>
            </div>
            <CardTitle className="text-2xl text-foreground">
              {feature} Coming Soon
            </CardTitle>
            <CardDescription className="text-base max-w-2xl mx-auto">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="font-semibold text-foreground mb-3">Planned Features:</h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Intuitive interface design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>AI-powered assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Multi-grade support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Real-time collaboration</span>
                </li>
              </ul>
            </div>
            
            <Button 
              variant="teacher" 
              size="lg"
              onClick={() => navigate("/teacher")}
            >
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlaceholderPage;