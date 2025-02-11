import React from 'react'
import { ICustomStackCardProps } from './type'
import CustomImage from '../common/CustomImage'
import CustomText from '../common/CustomTextNormal'
import ArrowRightIcon from '../../assets/icons/arrow_right.svg';

const CustomStackCard:React.FC<ICustomStackCardProps> = ({ title, description, link, imageURI }) => {
  return (
   <div className='flex items-center gap-4 justify-between bg-stack-card-background p-2 rounded-xl'>
    <div className='flex items-center'>
      <div className='bg-stack-card-background-secondary p-2 rounded-lg'>
        <CustomImage src={imageURI} alt={title} />
      </div>
      <div className='pl-3'>
        <CustomText title={title} fontFamily='funnel-sans-semibold text-lg'/>
        <CustomText title={description} classes='text-sm md:hidden xl:block' textColor='secondary-text'/>
      </div>
    </div>
    <div onClick={() => window.open(link, '_blank')}>
      <CustomImage src={ArrowRightIcon} alt='arrow-icon'/>
    </div>
   </div>
  )
}

export default CustomStackCard