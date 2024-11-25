import React, { useState } from "react";
import { Info } from "lucide-react";

const ShopifyInfo: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const shopifySteps = [
    "Log in to your Shopify admin dashboard",
    "Go to Settings (gear icon at bottom left)",
    'Click "Apps and sales channels"',
    'Select "Develop apps" at the top right',
    'Click "Create an app" button',
    'Enter a name for your app and click "Create app"',
    'Go to "API credentials"',
    'Click "Configure Admin API access"',
    "Select the required permissions (scopes) your token needs",
    'Click "Save"',
    'Click "Install app"',
    "Copy your Admin API access token that appears",
  ];

  return (
    <div className="relative inline-block">
      <Info
        className="cursor-help"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <div className="absolute z-10 w-64 p-4 border rounded-md shadow-lg left-full ml-2 top-0">
          <ol className="list-decimal pl-4 text-sm">
            {shopifySteps.map((step, index) => (
              <li key={index} className="mb-1">
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default ShopifyInfo;
