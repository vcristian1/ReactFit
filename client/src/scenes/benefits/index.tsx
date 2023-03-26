import React from 'react'
import { BenefitType, SelectedPage } from '../../shared/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import Benefit from './Benefit';

// Telling typescript that this is an array with a BenefitType of Object. Always make sure your objects are type'd
const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of Diverse Classes",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and Pro Trainers",
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
     id='benefits'
     className='mx-auto min-h-full w-5/6 py-20'
    >
        <motion.div 
         className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
         onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER HERE */}
            <div
             className='md:my-5 md:w-3/5'
            >
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.
                </p>
            </div>

            {/* BENEFITS HERE */}
            <div className='mt-5 items-center  justify-between gap-8 md:flex'>
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                     key={benefit.title}
                     icon={benefit.icon}
                     title={benefit.title}
                     description={benefit.description}
                     setSelectedPage={setSelectedPage}
                    />
                ))}
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits