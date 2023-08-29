'use client'

import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import("@/components/Map"), {
    loading: () => <div className='h-48 bg-gray-100'></div>,
    ssr: false
})

export default MapComponent

