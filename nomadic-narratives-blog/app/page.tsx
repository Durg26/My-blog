'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

const blogCategories = [
  { title: 'Adventure Awaits', description: 'Discover thrilling experiences from around the globe.' },
  { title: 'Cultural Insights', description: 'Dive deep into diverse traditions and ways of life.' },
  { title: 'Hidden Gems', description: 'Uncover lesser-known destinations off the beaten path.' },
  { title: 'Foodie Journeys', description: 'Savor the flavors of international cuisines.' },
  { title: 'Sustainable Travel', description: 'Explore eco-friendly and responsible travel options.' },
  { title: 'Travel Tips', description: 'Get insider advice for smooth and enjoyable trips.' },
]

export default function Home() {
  const [visibleCategories, setVisibleCategories] = useState(3)
  const { toast } = useToast()

  const loadMore = () => {
    setVisibleCategories(prevVisible => Math.min(prevVisible + 3, blogCategories.length))
    if (visibleCategories + 3 >= blogCategories.length) {
      toast({
        title: "All categories loaded!",
        description: "You've seen all our exciting blog categories.",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-coffee">Welcome to Nomadic Narratives</h1>
      <p className="text-xl text-center mb-12 text-coffee">Embark on a journey through words and experiences</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogCategories.slice(0, visibleCategories).map((category, index) => (
          <Card key={index} className="bg-card border-secondary hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="text-primary">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-coffee">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {visibleCategories < blogCategories.length && (
        <div className="text-center mt-8">
          <Button onClick={loadMore} className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded transition-colors">
            Load More Categories
          </Button>
        </div>
      )}
      
      <div className="text-center mt-12">
        <Link href="/about" className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition-colors">
          Learn More About Us
        </Link>
      </div>
    </div>
  )
}

