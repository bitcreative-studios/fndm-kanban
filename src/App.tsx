import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/Button'

type TypographySectionHeadingProps = {
  weight: 'bold' | 'medium'
  fontSize: number
  lineHeight: number
}
const TypographySectionHeading = ({
  weight,
  fontSize,
  lineHeight,
}: TypographySectionHeadingProps) => (
  <div className="space-x-4 font-medium text-grey-100">
    <span>Plus Jakarta Sans</span>
    <span className="text-black">{weight.toUpperCase()}</span>
    <span>{`${fontSize}px`}</span>
    <span>{`${lineHeight}px Line`}</span>
  </div>
)
function App() {
  return (
    <div className="container mx-auto">
      <h1 className="heading-xl mb-10 space-x-3">
        <span className="text-brand">02</span>
        <span className="">Typography</span>
      </h1>
      <div className="grid grid-cols-[auto_1fr] gap-x-24">
        <div className="space-y-10">
          <section className="space-y-2">
            <TypographySectionHeading weight="bold" fontSize={24} lineHeight={30} />
            <h2 className="heading-xl">Heading (XL)</h2>
          </section>
          <section className="space-y-2">
            <TypographySectionHeading weight="bold" fontSize={18} lineHeight={23} />
            <h2 className="heading-lg">Heading (L)</h2>
          </section>
          <section className="space-y-2">
            <TypographySectionHeading weight="bold" fontSize={16} lineHeight={19} />
            <h2 className="heading-md">Heading (M)</h2>
          </section>
          <section className="space-y-2">
            <TypographySectionHeading weight="bold" fontSize={12} lineHeight={15} />
            <h2 className="heading-sm">Heading (S)</h2>
          </section>
        </div>
        <div className="space-y-10">
          <section className="space-y-2">
            <TypographySectionHeading weight="bold" fontSize={16} lineHeight={23} />
            <p className="body-lg">
              Body (L) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
              hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
              mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
              sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
              potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
              metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
              id, est.
            </p>
          </section>
          <section className="space-y-2">
            <TypographySectionHeading weight="bold" fontSize={16} lineHeight={23} />
            <p className="body-md">
              Body (L) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
              hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
              mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
              sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
              potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
              metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
              id, est.
            </p>
          </section>
        </div>
      </div>
      <div className="mt-24">
        <h1 className="heading-xl mb-10 space-x-3">
          <span className="text-brand">03</span>
          <span className="">Interactive Elements</span>
        </h1>
      </div>
      <section className="mt-10 space-x-4">
        <Button size="large" disabled>
          Button Primary (L)
        </Button>
        <Button>Button Primary</Button>
        <Button disabled>Button Disabled </Button>
        <div className="inline-block w-[416px]">
          <Button fluid variant="danger">
            Button Fluid Danger
          </Button>
        </div>
        <Button variant="secondary">Button Secondary</Button>
        <Button variant="danger">Button Danger</Button>
      </section>
    </div>
  )
}

export default App
