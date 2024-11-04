'use client'
// Your Server Component will now be able to directly render your provider since it's been marked as a Client Component:

import { ThemeProvider } from 'next-themes'


export function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider>
}