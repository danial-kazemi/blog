
export default function AboutLayout({
    children,
}: Readonly <{
    children : React.ReactNode
}>) {
  return (
    <section className='about'>
        {children}
    </section>
  )
}
