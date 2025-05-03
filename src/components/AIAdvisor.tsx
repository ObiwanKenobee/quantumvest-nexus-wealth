
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AIAdvisor = () => {
  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">AI Investment Advisor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 p-3 bg-quantum-softGray rounded-lg animate-fade-in">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-quantum-lightPurple flex items-center justify-center text-white font-semibold">
            AI
          </div>
          <div>
            <p className="text-sm font-medium">Your tech exposure is higher than recommended</p>
            <p className="text-xs text-muted-foreground mt-1">Consider rebalancing to reduce risk</p>
          </div>
          <Button variant="outline" size="sm" className="ml-auto text-xs">
            Rebalance
          </Button>
        </div>

        <div className="flex items-center gap-3 p-3 bg-quantum-softGray rounded-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-quantum-success flex items-center justify-center text-white font-semibold">
            AI
          </div>
          <div>
            <p className="text-sm font-medium">Islamic ESG fund matches your goals</p>
            <p className="text-xs text-muted-foreground mt-1">7.2% historical return, Shariah-compliant</p>
          </div>
          <Button variant="outline" size="sm" className="ml-auto text-xs">
            View
          </Button>
        </div>

        <div className="flex items-center gap-3 p-3 bg-quantum-softGray rounded-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-quantum-warning flex items-center justify-center text-white font-semibold">
            AI
          </div>
          <div>
            <p className="text-sm font-medium">Dividend payment received</p>
            <p className="text-xs text-muted-foreground mt-1">$42.50 from Sustainable Energy Fund</p>
          </div>
          <Button variant="outline" size="sm" className="ml-auto text-xs">
            Reinvest
          </Button>
        </div>

        <div className="relative mt-4">
          <Input 
            type="text" 
            placeholder="Ask your AI financial assistant..." 
            className="pl-4 pr-20 py-6 rounded-full border-gray-200"
          />
          <Button 
            className="absolute right-1 top-1 rounded-full bg-quantum-purple hover:bg-quantum-darkPurple"
          >
            Ask AI
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAdvisor;
