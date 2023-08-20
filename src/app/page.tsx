import Image from 'next/image'

async function getData() {
  const res = await fetch('https://api.agglo-larochelle.fr/production/opendata/api/records/1.0/search/dataset=parking___places_disponibles_en_temps_reel&facet=id')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {

  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 py-16 lg:w-1/3 mx-auto">
      <p className='text-black text-2xl text-center font-bold mb-2'>LR Parking</p>
      <p className='text-black text-center mb-8'>Liste des parkings de <span className='font-bold'>La Rochelle</span> avec le nombre de places disponibles en temps réel.</p>
      {data.records.map((record : any) => (
        <div key={record.recordid} className="flex flex-col items-center justify-center text-black border-2 border-black rounded-lg h-48 w-full px-4 text-center mb-8">
          <p className="text-lg font-bold">{record.fields.nom}</p>
          <p className="text-xl">{record.fields.nb_places_disponibles} / {record.fields.nb_places}</p>
        </div>
      ))}
      <p className='text-black'>Made with ❤️ by <a href="https://twitter.com/hugoomdra" target='_blank' className='underline'>HugooMdra</a></p>
    </main>
  )
}
