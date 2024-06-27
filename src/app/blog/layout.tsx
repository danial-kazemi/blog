

export default function BlogLayout({
    children,
}: Readonly <{children: React.ReactNode}>) {
  return (
    <section className="Blog">
        {children}
    </section>
  )
}

