
import React from 'react';
import { 
  Bell, 
  Home, 
  Wallet, 
  Search, 
  Settings, 
  ChartBar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-quantum-purple mr-8">
          QuantumVest
        </h1>
        <div className="hidden md:flex items-center space-x-6">
          <NavItem icon={<Home size={18} />} label="Home" active />
          <NavItem icon={<ChartBar size={18} />} label="Marketplace" />
          <NavItem icon={<Search size={18} />} label="Explore" />
          <NavItem icon={<Wallet size={18} />} label="Wallet" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-quantum-warning"></span>
        </Button>
        <Button variant="ghost" size="icon">
          <Settings size={20} />
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarImage src="" alt="User" />
          <AvatarFallback className="bg-quantum-lightPurple text-white">QV</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

const NavItem = ({ 
  icon, 
  label, 
  active = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean; 
}) => {
  return (
    <div className={`flex items-center space-x-1 cursor-pointer ${active ? 'text-quantum-purple font-medium' : 'text-gray-600 hover:text-quantum-purple'}`}>
      {icon}
      <span className="text-sm">{label}</span>
      {active && <div className="h-1 w-1 rounded-full bg-quantum-purple mt-1"></div>}
    </div>
  );
};

export default Navbar;
