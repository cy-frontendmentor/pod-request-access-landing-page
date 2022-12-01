import Image from 'next/image';
import Form from '../components/form/form';
const page = () => {
  return (
    <div className=' max-w-[1440px] mx-auto'>
      <Image
        src='/assets/mobile/image-host.jpg'
        alt='logo'
        width={375}
        height={667}
        className=' absolute top-0 right-0 w-full h-full mix-blend-screen opacity-10 -z-40 sm:hidden '
      ></Image>

      <div className='flex-col flex items-center relative pt-[62px] pb-[94px]  z-100 sm:pt-[50px] sm:pl-[39px] sm:pb-[257px] sm:items-start lg:pt-[102px]  lg:pb-[130px] '>
        <Image
          src='/assets/desktop/image-host.jpg'
          alt='logo'
          width={962}
          height={640}
          className=' absolute top-[130px] -right-[14px] w-[962px] h-[640px]  -z-40 hidden lg:inline-block'
        ></Image>
        <Image
          src='/assets/tablet/image-host.jpg'
          alt='logo'
          width={491}
          height={767}
          className=' absolute top-0 right-0 w-[491px] h-[767px]  -z-40 hidden sm:inline-block lg:hidden'
        ></Image>

        <Image
          src='/assets/desktop/bg-pattern-dots.svg'
          alt='logo'
          width={232}
          height={104}
          className=' absolute bottom-0 left-0 w-[232px] h-[104px]  -z-40 hidden sm:inline-block lg:right-0 lg:left-auto lg:top-[718px]'
        ></Image>
        <Image
          src='/assets/desktop/logo.svg'
          alt='logo'
          width={135}
          height={56}
          className='w-[135px] h-[56px] flex-1 mb-[57px] sm:mb-[152px] lg:mb-[103px] '
        ></Image>
        <div className=' mx-[24px] sm:bg-mirage grid sm:max-w-[723px] sm:mx-0 '>
          <div className='text-center grid gap-y-4 mb-[33px] sm:text-left  order-1 sm:gap-y-[31px] sm:mb-[40px] sm:pt-[93px]'>
            <h1 className='text-[26px] leading-[38px] text-medium-aquamarine sm:text-[48px] sm:leading-[56px]'>
              Publish your podcasts <span className=' text-white'>everywhere.</span>
            </h1>
            <p className=' sm:max-w-[445px] sm:text-[18px] sm:leading-[28px]'>
              Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple
              Podcasts, Google Podcasts, Pocket Casts and more!
            </p>
          </div>
          <div className='flex justify-between items-center mb-[44px] sm:max-w-[536px] order-2 sm:order-last sm:mb-0'>
            <Image
              src='/assets/desktop/spotify.svg'
              alt='logo'
              width={96}
              height={29}
              className='w-[56px] h-[17px] sm:w-[96px] sm:h-[29px]'
            ></Image>
            <Image
              src='/assets/desktop/apple-podcast.svg'
              alt='logo'
              width={78}
              height={29}
              className='w-[45px] h-[17px] sm:w-[78px] sm:h-[29px]'
            ></Image>
            <Image
              src='/assets/desktop/google-podcasts.svg'
              alt='logo'
              width={125}
              height={18}
              className='w-[73px] h-[11px] sm:w-[125px] sm:h-[17.5px]'
            ></Image>
            <Image
              src='/assets/desktop/pocket-casts.svg'
              alt='logo'
              width={129}
              height={26}
              className='w-[77px] h-[15px] sm:w-[129px] sm:h-[26px]'
            ></Image>
          </div>
          <Form className='order-3 sm:mb-[64px]'></Form>
        </div>
      </div>
    </div>
  );
};

export default page;
