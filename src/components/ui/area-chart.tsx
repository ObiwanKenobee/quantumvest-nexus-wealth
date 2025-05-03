
import React from 'react';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

interface AreaChartProps {
  data: Array<{ [key: string]: any }>;
  index: string;
  categories: string[];
  colors?: string[];
  valueFormatter?: (value: number) => string;
  className?: string;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showGrid?: boolean;
  showTooltip?: boolean;
  areaType?: "monotone" | "basis" | "linear" | "natural" | "step" | "stepAfter" | "stepBefore";
  height?: number | string;
  width?: number | string;
}

export function AreaChart({
  data,
  index,
  categories,
  colors = ["#9b87f5"],
  valueFormatter = (value: number) => `${value}`,
  className = "",
  showXAxis = false,
  showYAxis = false,
  showGrid = false,
  showTooltip = true,
  areaType = "monotone",
  height = "100%",
  width = "100%",
}: AreaChartProps) {
  // Create a config object for the chart container
  const chartConfig: Record<string, { color: string }> = {};
  categories.forEach((category, i) => {
    chartConfig[category] = {
      color: colors[i % colors.length],
    };
  });

  return (
    <ChartContainer config={chartConfig} className={className}>
      <ResponsiveContainer width={width} height={height}>
        <RechartsAreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          
          {showXAxis && <XAxis dataKey={index} />}
          
          {showYAxis && <YAxis />}
          
          {showTooltip && (
            <Tooltip 
              formatter={(value: number) => valueFormatter(value)} 
              labelFormatter={(label) => `${label}`}
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          )}

          {categories.map((category, i) => {
            const gradientId = `colorGradient-${category}`;
            const color = colors[i % colors.length];
            
            return (
              <React.Fragment key={category}>
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type={areaType}
                  dataKey={category}
                  stroke={color}
                  fillOpacity={1}
                  fill={`url(#${gradientId})`}
                />
              </React.Fragment>
            );
          })}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
