export default function ShopLayout({
    children,
}: Readonly <{children: React.ReactNode}>) {
  return (
    <section className="shop-page">
        {children}
    </section>
  )
}
