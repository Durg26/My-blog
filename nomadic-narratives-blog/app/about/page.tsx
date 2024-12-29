import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-coffee">About Nomadic Narratives</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Image 
          src="/placeholder.svg?height=300&width=300" 
          alt="Nomadic Narratives Team" 
          width={300} 
          height={300} 
          className="rounded-full border-4 border-secondary"
        />
        <div className="max-w-2xl">
          <p className="text-lg mb-4 text-coffee">
            Nomadic Narratives is a passion project born out of our love for travel, culture, and storytelling. We are a team of adventurers, writers, and photographers who believe in the power of shared experiences.
          </p>
          <p className="text-lg mb-4 text-coffee">
            Our mission is to inspire wanderlust, promote cultural understanding, and share the beauty of our diverse world through compelling narratives and stunning visuals.
          </p>
          <p className="text-lg text-coffee">
            Join us on our journey as we explore hidden corners of the globe, uncover local traditions, and bring you stories that will transport you to far-off lands.
          </p>
        </div>
      </div>
    </div>
  )
}

