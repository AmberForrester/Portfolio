import { Spotlight } from './ui/Spotlight';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>

        {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>

            <Spotlight className='top-10 left-full h-[80-vh] w-[50vw]' fill='purple'/>

            <Spotlight className='top-28 left-80 h-[80-vh] w-[50vw]' fill='blue'/>
        </div>

        {/**
       *  UI: grid
       * Link: https://ui.aceternity.com/components/grid-and-dot-backgrounds
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
        <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in.
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

    </div>
  )
}

export default Hero