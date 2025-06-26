import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ClipboardList, User, UtensilsCrossed } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const mobileNavItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/order-tracking', icon: ClipboardList, label: 'Orders' },
    { href: '/profile', icon: User, label: 'Profile' }, // Note: /profile route doesn't exist yet
  ];

  return (
    <>
      {/* Spacer to prevent content from being hidden behind the fixed mobile footer */}
      <div className="h-16 md:hidden" />

      {/* Mobile Bottom Navigation Bar */}
      <footer className="fixed bottom-0 left-0 z-40 w-full border-t bg-background md:hidden">
        <nav className="grid h-16 grid-cols-3">
          {mobileNavItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`flex flex-col items-center justify-center gap-1 p-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <item.icon className="h-6 w-6" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </footer>

      {/* Desktop Footer */}
      <footer className="hidden bg-secondary/50 md:block">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="h-5 w-5 text-primary" />
              <span className="font-bold">QuickBites</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </nav>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} QuickBites. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;