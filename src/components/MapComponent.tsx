'use client'

import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import("@/components/Map"), {
    loading: () => <div></div>,
    ssr: false
})

export default MapComponent

