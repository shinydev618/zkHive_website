import { useEffect, useRef } from 'react'
import { SUPONSORS } from '../../constants/About'
import { Star } from '../../icons/Star'
import styles from './Protecting.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const INDIVIDUALS = [
  'Analyses files, pdfs and documents',
  'Analyses and secures voice messages',
  'Legitimacy score for links and IPs',
  'Verifies the authenticity of socials',
  'Verifies the authenticity of airdrops and staking links',
]

const COMMUNITIES = [
  'Realtime user activity monitor',
  'Bot Intrusion Detection and Prevention',
  'Real-Time Threat Intelligence',
  'Legitimacy score for users',
  'Connected hive between all the communities',
  'Customized detection based on traffic patterns',
]

export const Protecting = () => {
  const ref = useRef(null)
  const sponsorsRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    gsap.fromTo(
      el,
      { y: 400, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
        },
      }
    )
  }, [])

  useEffect(() => {
    const el = sponsorsRef.current
    gsap.fromTo(
      el,
      { y: 400, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
        },
      }
    )
  }, [])

  return (
    <div id='about' className='bg-black'>
      <div className=' container px-5 lg:px-0  '>
        <div className='flex justify-center flex-col items-center'>
          <h1 className=' text-[28px] lg:text-[49px] font-bold lg:leading-[63.7px] text-center text-white title'>
            Protecting Individuals & Communities
          </h1>
          <p className=' text-[16px] lg:text-xl mt-6 w-full lg:w-[60%] font-normal text-center leading-8 !text-[#EBEDF0]'>
            zkHive takes the security of both individuals and crypto communities
            to the next level, thanks to our proprietary connectivity AI
          </p>
        </div>
        <div>
          <div className={`${styles.default_bg} mt-[50px] rounded-[30px]`}>
            <div ref={ref} className='py-5 lg:py-[60px] px-0 lg:px-[70px]'>
              <div className='flex flex-col gap-y-5 lg:flex-row'>
                <div
                  className={` w-full lg:w-[50%] rounded-r-[30px] lg:rounded-r-none rounded-l-[30px] px-6  lg:pl-10  py-6 lg:py-[75px] ${styles.card_gradient}`}
                >
                  <div className='flex flex-col lg:flex-row gap-x-[20px] items-center '>
                    <div className={`${styles.line} !w-[47%]`}></div>
                    <h1 className=' w-full my-5 lg:my-0 text-center lg:w-[50%] text-[39px] font-bold leading-[50.7px] lg:text-left text-white'>
                      Individuals
                    </h1>
                  </div>
                  <div className='flex flex-col lg:flex-row gap-x-[31px]'>
                    <img
                      className='w-full lg:w-[45%] h-full object-contain rounded-[20px]'
                      src='/img/communities_01.png'
                    />
                    <div className=' w-full lg:w-[55%]'>
                      <ul className='w-full flex justify-start flex-col gap-y-6 mt-[18px]'>
                        {INDIVIDUALS.map((item, index) => (
                          <li
                            key={index}
                            className='flex text-[#EBEDF0] w-full font-[400] leading-[25.6px] gap-x-3 text-[16px]'
                          >
                            <div>
                              <Star className='!w-[26px] !h-[26px]' />
                            </div>
                            <div>{item}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className='flex justify-end px-[35px] mt-10'>
                    <div className='btn'>
                      <button
                        className='default_button !cursor-pointer px-[38px] py-[11px]'
                        onClick={() =>
                          window.open('https://medium.com/@zkhive')
                        }
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={`w-full rounded-l-[30px] lg:rounded-l-none lg:w-[50%] gap-x-[31px] py-6 lg:py-[79px] pl-6 pr-6 lg:pl-[34px] lg:pr-[24px] rounded-r-[30px] flex flex-col lg:flex-row ${styles.card_gradient}`}
                >
                  <div>
                    <h1 className='text-[39px] font-bold leading-[50.7px]  text-center lg:text-left text-white'>
                      Communities
                    </h1>
                    <div className={`${styles.line} my-10 !w-full `}></div>
                    <img
                      className=' w-full lg:w-[293px]'
                      src='/img/communities-backup_01.png'
                    />
                  </div>
                  <div className='w-full'>
                    <ul className='w-full flex flex-col gap-y-6 mt-[18px]'>
                      {COMMUNITIES.map((item, index) => (
                        <li
                          key={index}
                          className='flex text-[#EBEDF0] w-full font-[400] leading-[25.6px] gap-x-3 text-[16px]'
                        >
                          <div>
                            <Star className='!w-[26px] !h-[26px]' />
                          </div>
                          <div>{item}</div>
                        </li>
                      ))}
                    </ul>
                    <div className='flex justify-end mt-10'>
                      <div className='btn'>
                        <button
                          className='default_button !cursor-pointer px-[38px] py-[11px]'
                          onClick={() =>
                            window.open('https://medium.com/@zkhive')
                          }
                        >
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={sponsorsRef}
              className={`px-[54px] gap-x-[163px] gap-y-[35px] lg:gap-y-[71px] grid grid-cols-1 lg:grid-cols-4 py-[52px] pb-[53px] bg-black border rounded-[30px] ${styles.partner_border} `}
            >
              {SUPONSORS.map((img, index) => (
                <div
                  key={index}
                  className='flex justify-center items-center hover:scale-[1.1] cursor-pointer transition-all duration-300'
                >
                  <img src={img} className='lg:w-auto max-w-40' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
