"use client"

import { use } from "react"
import dynamic from "next/dynamic"

const ResultClient = dynamic(() => import("./result-client"), {
  ssr: false,
  loading: () => (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center">
      <div className="max-w-md p-6 text-center">
        <p className="text-gray-600">Loading analysis...</p>
      </div>
    </main>
  ),
})

export default function ResultPage({ params }: { params: Promise<{ statementId: string }> }) {
  const { statementId } = use(params)
  return <ResultClient statementId={statementId} />
}
