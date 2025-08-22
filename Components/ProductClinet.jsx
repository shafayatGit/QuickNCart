"use client"
import React from 'react'

export default function ProductClient({data}) {
  return (
    <div>{JSON.stringify(data)}</div>
  )
}
