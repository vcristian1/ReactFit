import React from 'react'
import { SelectedPage } from '../../shared/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import HText from '../../shared/HText';

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
            <div>
                <HText>MORE THAN JUST A GYM</HText>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits