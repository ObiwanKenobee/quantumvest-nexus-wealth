
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const WalletOverview = () => {
  const wallets = [
    {
      id: 1,
      name: 'Ethereum',
      symbol: 'ETH',
      balance: '1.28',
      value: '2,560.00',
      change: '+3.2%'
    },
    {
      id: 2,
      name: 'Solana',
      symbol: 'SOL',
      balance: '24.5',
      value: '1,225.00',
      change: '+5.7%'
    },
    {
      id: 3,
      name: 'USD Coin',
      symbol: 'USDC',
      balance: '1,500.00',
      value: '1,500.00',
      change: '0.0%'
    }
  ];

  return (
    <Card className="dashboard-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Wallet & Assets</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Deposit</Button>
            <Button variant="default" size="sm">Send</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">Total Balance</p>
            <Badge>Connected</Badge>
          </div>
          <h2 className="text-2xl font-bold">$5,285.00</h2>
        </div>

        <div className="space-y-3">
          {wallets.map((wallet) => (
            <div key={wallet.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-quantum-softGray flex items-center justify-center font-semibold text-sm">
                  {wallet.symbol}
                </div>
                <div className="ml-3">
                  <p className="font-medium">{wallet.name}</p>
                  <p className="text-xs text-muted-foreground">{wallet.balance} {wallet.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">${wallet.value}</p>
                <p className={`text-xs ${
                  wallet.change === '0.0%' ? 'text-muted-foreground' : 
                  wallet.change.startsWith('+') ? 'text-quantum-success' : 'text-quantum-danger'
                }`}>
                  {wallet.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full mt-4">
          View All Assets
        </Button>
      </CardContent>
    </Card>
  );
};

export default WalletOverview;
