
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  ChevronRight, 
  MapPin, 
  Camera, 
  Leaf 
} from 'lucide-react';
import ContentPage from '@/components/ContentPage';

// Sample data for ContentPage
const sampleDestinations = [
  {
    name: 'วัดภูแก้ว',
    description: 'วัดเก่าแก่ที่มีประวัติศาสตร์ยาวนาน เป็นศูนย์รวมทางจิตใจของชาวบ้านในพื้นที่',
    image: '/placeholder.svg'
  },
  {
    name: 'อ่างเก็บน้ำน้ำฮี',
    description: 'แหล่งน้ำธรรมชาติที่สวยงาม เหมาะแก่การพักผ่อนหย่อนใจและทำกิจกรรมกลางแจ้ง',
    image: '/placeholder.svg'
  },
  {
    name: 'พิพิธภัณฑ์วัฒนธรรมภูไท',
    description: 'ศูนย์เรียนรู้วิถีชีวิต ประเพณี และวัฒนธรรมของชาวภูไทที่น่าสนใจ',
    image: '/placeholder.svg'
  },
];

const sampleProducts = [
  {
    name: 'ผ้าทอภูไทลายขอ',
    price: 2500,
    details: 'ผ้าทอมือชั้นดีด้วยภูมิปัญญาที่สืบทอดมาหลายชั่วอายุคน ด้วยลวดลายอันเป็นเอกลักษณ์'
  },
  {
    name: 'เครื่องเงินภูไทโบราณ',
    price: 1200,
    details: 'เครื่องประดับที่ทำจากเงินแท้ ออกแบบตามแบบฉบับดั้งเดิม สวยงามและมีคุณค่า'
  },
  {
    name: 'น้ำปลาร้าสูตรดั้งเดิม',
    price: 180,
    details: 'น้ำปลาร้าที่หมักตามสูตรโบราณ รสชาติกลมกล่อม เข้มข้น เป็นที่นิยมของคนท้องถิ่น'
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F1F0FB] text-[#221F26] flex flex-col">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#9C4A1A]">
            Tour Der Wang
          </h1>
          <p className="text-xl mb-6 text-gray-700">
            เปิดประตูสู่ความงามแห่งอีสานเหนือ... ที่นี่มีทุกสิ่งที่คุณไม่รู้
          </p>
          <div className="flex space-x-4">
            <Button variant="default" className="bg-[#9C4A1A] hover:bg-[#7A3C15]">
              สำรวจเส้นทาง <ChevronRight className="ml-2" />
            </Button>
            <Button variant="outline">
              เกี่ยวกับเรา
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <img 
            src="/placeholder.svg" 
            alt="วังสามหมอ" 
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              icon: MapPin, 
              title: 'จุดเช็กอิน', 
              description: 'สำรวจสถานที่ท่องเที่ยวลับๆ ของวังสามหมอ' 
            },
            { 
              icon: Camera, 
              title: 'วัฒนธรรมภูไท', 
              description: 'เรียนรู้วิถีชีวิตและประเพณีอันงดงาม' 
            },
            { 
              icon: Leaf, 
              title: 'ของดีท้องถิ่น', 
              description: 'ค้นพบสินค้าชุมชนและอาหารพื้นบ้าน' 
            }
          ].map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="w-10 h-10 text-[#9C4A1A] mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Content Page with Destinations and Products */}
      <ContentPage 
        destinations={sampleDestinations} 
        products={sampleProducts} 
      />
    </div>
  );
};

export default Index;
