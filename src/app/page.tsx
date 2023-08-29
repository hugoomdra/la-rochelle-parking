import Card from '@/components/Card'
import Map from '@/components/MapComponent'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://api.agglo-larochelle.fr/production/opendata/api/records/1.0/search/dataset=parking___places_disponibles_en_temps_reel&facet=id', {
    cache: 'no-store'
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {

  let data = [];
  data = await getData();

  return (

    <div>
      <div className="max-w-xs sm:max-w-6xl mx-auto py-8">
        <p className='text-black text-2xl text-center font-bold mb-2'>LR Parking</p>
        <p className='text-black text-center mb-8'>Liste des parkings de <span className='font-bold'>La Rochelle</span> avec le nombre de places disponibles en temps réel.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full'>
          {data.records.map((record: any) => (
            <Card parking={record} key={record.recordid}></Card>
          ))}
        </div>
        <p className='text-black mt-8 text-center'>Made with ❤️ by <a href="https://twitter.com/hugoomdra" target='_blank' className='underline'>HugooMdra</a></p>
      </div>
    </div>
  )
}
