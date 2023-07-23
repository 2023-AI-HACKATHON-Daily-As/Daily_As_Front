'use client'

import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState, useRef } from 'react';

export default function Home() {
  return (
    <main className='main index-page'>
      <Link href='/test'>테스트</Link>
    </main>
  )
}
