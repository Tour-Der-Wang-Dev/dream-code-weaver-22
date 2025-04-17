
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ShoppingBag, Bookmark, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Destination {
  name: string;
  description: string;
  image: string;
}

interface Product {
  name: string;
  price: number;
  details: string;
}

interface ContentPageProps {
  destinations: Destination[];
  products: Product[];
}

const ContentPage: React.FC<ContentPageProps> = ({ destinations, products }) => {
  return (
    <div className="min-h-screen bg-[#F1F0FB] text-[#221F26] py-12">
      <div className="container mx-auto px-4">
        {/* Top Destinations Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#9C4A1A] mb-2">จุดหมายยอดนิยม</h2>
              <p className="text-lg text-gray-600">ค้นพบสถานที่ท่องเที่ยวที่น่าตื่นตาตื่นใจในวังสามหมอ</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              ดูทั้งหมด <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <Badge className="absolute top-4 right-4 bg-[#9C4A1A]">
                    แนะนำ
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-bold">{destination.name}</CardTitle>
                    <MapPin className="h-5 w-5 text-[#9C4A1A]" />
                  </div>
                  <CardDescription className="line-clamp-2">
                    {destination.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full bg-[#9C4A1A] hover:bg-[#7A3C15]">
                    <Bookmark className="mr-2 h-4 w-4" /> สำรองที่นั่ง
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Local Products Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#9C4A1A] mb-2">ของดีท้องถิ่น</h2>
              <p className="text-lg text-gray-600">ค้นพบผลิตภัณฑ์คุณภาพจากภูมิปัญญาท้องถิ่น</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              ดูทั้งหมด <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6">
            {products.map((product, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-100 flex items-center justify-center p-4 md:h-full">
                    <ShoppingBag className="h-16 w-16 text-[#9C4A1A]" />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <span className="text-lg font-semibold text-[#9C4A1A]">฿{product.price.toLocaleString()}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{product.details}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="bg-[#F2FCE2] text-[#9C4A1A] border-[#9C4A1A]">
                        OTOP
                      </Badge>
                      <Button size="sm" className="bg-[#9C4A1A] hover:bg-[#7A3C15]">
                        สั่งซื้อสินค้า
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContentPage;
