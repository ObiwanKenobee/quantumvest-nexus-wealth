
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CulturePools = () => {
  const pools = [
    {
      id: 1,
      name: 'Islamic Growth Fund',
      type: 'Shariah-Compliant',
      yield: '8.2%',
      principleProtection: 'High',
      impact: 92,
      members: 1245,
      color: 'bg-gradient-to-r from-purple-500 to-indigo-600'
    },
    {
      id: 2,
      name: 'ESG Impact Portfolio',
      type: 'Carbon-Neutral',
      yield: '6.5%',
      principleProtection: 'Medium',
      impact: 88,
      members: 856,
      color: 'bg-gradient-to-r from-emerald-500 to-teal-600'
    },
    {
      id: 3,
      name: 'Ubuntu Community Fund',
      type: 'Social Impact',
      yield: '7.3%',
      principleProtection: 'Medium-High',
      impact: 94,
      members: 731,
      color: 'bg-gradient-to-r from-amber-500 to-orange-600'
    }
  ];

  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Culturally-Aligned Pools</CardTitle>
          <Button size="sm">View All</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {pools.map((pool) => (
            <PoolCard key={pool.id} pool={pool} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const PoolCard = ({ pool }: { pool: any }) => {
  return (
    <div className="investment-card">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-base">{pool.name}</h3>
          <div className="flex items-center mt-1">
            <Badge variant="outline" className="text-xs mr-2">
              {pool.type}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {pool.members.toLocaleString()} members
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-quantum-success font-medium">
            {pool.yield}
          </div>
          <div className="text-xs text-muted-foreground">Annual Yield</div>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-quantum-softGray flex items-center justify-center text-xs font-medium">
            {pool.impact}
          </div>
          <div className="ml-2">
            <div className="text-xs">Impact Score</div>
            <div className={`w-24 h-1.5 bg-gray-100 rounded-full mt-1`}>
              <div 
                className={`h-full rounded-full ${pool.color}`} 
                style={{ width: `${pool.impact}%` }}
              ></div>
            </div>
          </div>
        </div>
        <Button size="sm" variant="secondary">
          Join Pool
        </Button>
      </div>
    </div>
  );
};

const Button = ({ 
  children, 
  size = "default", 
  variant = "default",
  className = ""
}: { 
  children: React.ReactNode;
  size?: "default" | "sm";
  variant?: "default" | "secondary";
  className?: string;
}) => {
  return (
    <button 
      className={`
        ${size === "default" ? "px-4 py-2" : "px-3 py-1 text-sm"} 
        ${
          variant === "default" 
            ? "bg-quantum-purple hover:bg-quantum-darkPurple text-white" 
            : "bg-gray-100 hover:bg-gray-200 text-gray-800"
        }
        rounded-md font-medium transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default CulturePools;
