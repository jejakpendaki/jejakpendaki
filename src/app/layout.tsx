export const metadata = {
  title: "jejakpendaki - Platform Pendaki Gunung Bali",
  description: "Jelajahi keindahan gunung Bali dengan aman dan nyaman",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
