
import React from 'react';
import Navbar from '@/components/Navbar';
import PortfolioSummary from '@/components/PortfolioSummary';
import AIAdvisor from '@/components/AIAdvisor';
import CulturePools from '@/components/CulturePools';
import Marketplace from '@/components/Marketplace';
import WalletOverview from '@/components/WalletOverview';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to QuantumVest</h1>
          <p className="text-gray-600">Your personalized wealth dashboard</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <PortfolioSummary />
              <AIAdvisor />
            </div>
            
            <div className="mb-6">
              <CulturePools />
            </div>
            
            <div>
              <Marketplace />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <WalletOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
