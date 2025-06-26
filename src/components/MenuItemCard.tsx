import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus } from 'lucide-react';

interface MenuItemCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  name,
  description,
  price,
  imageUrl,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  console.log('MenuItemCard loaded for:', name);

  const handleAddToOrder = () => {
    toast.success(`${name} has been added to your order.`);
    setIsDialogOpen(false); // Close the dialog
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <div className="flex items-start justify-between gap-4 p-4 border-b">
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
          <p className="text-base font-bold mt-2">${price.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={name}
              className="w-24 h-24 object-cover rounded-md"
            />
          )}
          <DialogTrigger asChild>
            <Button size="sm" className="w-full">
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </DialogTrigger>
        </div>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <h4 className="font-medium mb-2">Options</h4>
          <RadioGroup defaultValue="medium">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="small" id="r1" />
              <Label htmlFor="r1">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="r2" />
              <Label htmlFor="r2">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="r3" />
              <Label htmlFor="r3">Large</Label>
            </div>
          </RadioGroup>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleAddToOrder}>
            Add to Order for ${price.toFixed(2)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItemCard;