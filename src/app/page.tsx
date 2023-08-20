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

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.records.map((record : any) => (
        <div key={record.recordid} className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">{record.fields.nom}</h1>
          <h2 className="text-2xl font-bold">{record.fields.nb_places_disponibles} / {record.fields.nb_places}</h2>
        </div>
      ))}
    </main>
  )
}
