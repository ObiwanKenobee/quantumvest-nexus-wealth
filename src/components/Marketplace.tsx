
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Marketplace = () => {
  const assets = [
    {
      id: 1,
      name: 'Sustainable Office Complex',
      type: 'Real Estate',
      location: 'Dubai, UAE',
      yield: '5.8%',
      ownership: '26%',
      liquidity: 'Medium',
      priceChange: '+2.4%'
    },
    {
      id: 2,
      name: 'Renewable Energy Venture',
      type: 'Private Equity',
      location: 'Singapore',
      yield: '9.3%',
      ownership: '12%',
      liquidity: 'Low',
      priceChange: '+4.7%'
    },
    {
      id: 3,
      name: 'Digital Art Collection',
      type: 'Art & Collectibles',
      location: 'Global',
      yield: '3.2%',
      ownership: '64%',
      liquidity: 'High',
      priceChange: '-1.2%'
    }
  ];

  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Tokenized Asset Marketplace</CardTitle>
          <button className="text-sm text-quantum-purple hover:text-quantum-darkPurple font-medium">
            Browse All
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {assets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const AssetCard = ({ asset }: { asset: any }) => {
  return (
    <div className="investment-card flex items-center justify-between">
      <div className="flex items-center">
        <div className="h-12 w-12 rounded bg-quantum-softGray flex items-center justify-center text-quantum-purple">
          {asset.type === 'Real Estate' ? 'RE' : 
           asset.type === 'Private Equity' ? 'PE' : 'AC'}
        </div>
        <div className="ml-3">
          <h3 className="font-medium text-sm">{asset.name}</h3>
          <div className="flex items-center mt-1">
            <Badge variant="outline" className="text-xs mr-2">
              {asset.type}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {asset.location}
            </span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center justify-end">
          <span className={`text-sm font-medium ${
            asset.priceChange.startsWith('+') ? 'text-quantum-success' : 'text-quantum-danger'
          }`}>
            {asset.priceChange}
          </span>
          <span className="text-xs text-muted-foreground ml-2">24h</span>
        </div>
        <div className="flex items-center justify-end mt-1">
          <span className="text-sm font-medium mr-2">{asset.yield}</span>
          <span className="text-xs text-muted-foreground">yield</span>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
