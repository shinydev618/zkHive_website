import styles from './Hivebot.module.css'
export const Hivebot = () => {
  return (
    <div className='pt-[100px] lg:pt-[180px] relative' id='hivebot'>
      <h1 className=' text-[22px] lg:text-[49px] mb-[50px] text-white  font-bold leading-[63.7px] text-center'>
        Hivebot Is Now Live
      </h1>
      <div
        className={`m-auto rounded-[20px] ${styles.border} w-full lg:w-[1021px] h-full lg:h-[562.5px] overflow-hidden z-[999] flex justify-center `}
      >
        <video
          className='w-full rounded-[20px] h-full '
          src='/img/video_hivebot.mp4'
          controls
        />
      </div>
      <div className=' absolute  bottom-[-400px] left-[-600px] w-full'>
        <img src='/img/blur.png' className=' absolute z-[-1] top-0' />
        <img src='/img/wall.png ' />
      </div>
      <div className=' absolute  top-[-200px] right-[-600px] w-full'>
        <img src='/img/blur.png' className=' absolute z-[-1] top-0' />
        <img src='/img/wall.png ' />
      </div>
    </div>
  )
}
