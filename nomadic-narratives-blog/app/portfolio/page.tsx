import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const portfolioItems = [
  { title: "Sunrise over Machu Picchu", description: "An unforgettable morning in Peru" },
  { title: "Streets of Marrakech", description: "Exploring the vibrant markets of Morocco" },
  { title: "Northern Lights in Iceland", description: "Chasing the aurora in the Land of Fire and Ice" },
  { title: "Cherry Blossoms in Kyoto", description: "Springtime magic in Japan" },
  { title: "Safari in the Serengeti", description: "Witnessing the great migration in Tanzania" },
  { title: "Sailing the Greek Islands", description: "Island hopping in the Aegean Sea" },
]

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-coffee">Our Adventures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <Card key={index} className="bg-card border-secondary hover:border-primary transition-colors">
            <Image 
              src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(item.title)}`} 
              alt={item.title} 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-primary">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-coffee">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

