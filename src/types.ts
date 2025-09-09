export type SubscriptionType = 'All' | 'Paid' | 'Free';
export type InstalledOption = 'All' | 'Installed' | 'Not Installed';

export interface TileType {
  _id: string;
  name: string;
  category: 'Category 1' | 'Category 2' | 'Category 3';
  short_description: string;
  complete_description: string;
  subscription_type: {
    type: 'Free' | 'Paid';
    cost: string;
  };
  version: string;
  image_path: string;
  installed: boolean;
  metadata: Record<string, string>;
}
