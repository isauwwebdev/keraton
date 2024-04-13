import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport bg-red" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
        <div className="embla__controls">
            <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
                <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'bg-white embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : ''
                )}
                />
            ))}
            </div>
        </div>
      </div>


    </section>
  )
}

export default EmblaCarousel
