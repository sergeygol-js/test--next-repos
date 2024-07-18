'use client'
import TestTable from '@/components/test-table/TestTable'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <p>Table page</p>
      { TestTable }
    </main>
  );
}
