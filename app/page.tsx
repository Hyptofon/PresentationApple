import { SlideNav } from "@/components/presentation/slide-nav"
import { Slide01Title } from "@/components/presentation/slide-01-title"
import { Slide02Ecosystem } from "@/components/presentation/slide-02-ecosystem"
import { Slide03UX } from "@/components/presentation/slide-03-ux"
import { Slide04Architecture } from "@/components/presentation/slide-04-architecture"
import { Slide05Privacy } from "@/components/presentation/slide-05-privacy"
import { Slide06Halo } from "@/components/presentation/slide-06-halo"
import { Slide07Show } from "@/components/presentation/slide-07-show"
import { Slide08Video } from "@/components/presentation/slide-08-video"
import { Slide09Discuss } from "@/components/presentation/slide-09-discuss"
import { Slide10Conclusion } from "@/components/presentation/slide-10-conclusion"
import { FullscreenButton } from "@/components/fullscreen-button"

export default function PresentationPage() {
  return (
    <main className="relative">
      {/* Side navigation */}
      <SlideNav />

      {/* Slides */}
      <Slide01Title />
      <Slide02Ecosystem />
      <Slide03UX />
      <Slide04Architecture />
      <Slide05Privacy />
      <Slide06Halo />
      <Slide07Show />
      <Slide08Video />
      <Slide09Discuss />
      <Slide10Conclusion />
      <FullscreenButton />
    </main>
  )
}
