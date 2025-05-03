
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AreaChart } from '@/components/ui/area-chart';

const chartData = [
  { day: 'Mon', value: 10800 },
  { day: 'Tue', value: 11200 },
  { day: 'Wed', value: 10900 },
  { day: 'Thu', value: 11500 },
  { day: 'Fri', value: 11800 },
  { day: 'Sat', value: 12100 },
  { day: 'Sun', value: 12400 },
];

const PortfolioSummary = () => {
  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Portfolio Summary</CardTitle>
          <div className="flex space-x-2">
            <TimeButton label="1D" active />
            <TimeButton label="1W" />
            <TimeButton label="1M" />
            <TimeButton label="1Y" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex justify-between items-baseline">
            <h3 className="text-2xl font-bold">$12,456.78</h3>
            <div className="flex items-center text-quantum-success font-medium">
              <span className="text-sm">+5.2%</span>
              <span className="ml-1 text-xs">($647.23)</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
        </div>

        <div className="h-32 w-full">
          <AreaChart
            data={chartData}
            index="day"
            categories={["value"]}
            colors={["#9b87f5"]}
            valueFormatter={(value) => `$${value.toLocaleString()}`}
            className="h-full"
          />
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Risk Score</span>
              <span className="text-sm text-quantum-warning">Moderate</span>
            </div>
            <Progress value={62} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Diversification</span>
              <span className="text-sm text-quantum-success">Well Balanced</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Projected Growth</span>
              <span className="text-sm">+12.4% in 12M</span>
            </div>
            <Progress value={72} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TimeButton = ({ label, active = false }: { label: string; active?: boolean }) => {
  return (
    <button 
      className={`px-2 py-1 text-xs rounded-md transition-colors ${
        active 
          ? 'bg-quantum-purple text-white' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
};

export default PortfolioSummary;
