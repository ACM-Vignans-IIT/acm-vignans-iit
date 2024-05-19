import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const EventCard = ({ link, title, eventdate, featuredImage, description, rsvp, className = "" }) => {

  const router = useRouter();
  const FramerImage = motion(Image);

  return (
    <div className={`relative flex-shrink-0 block sm:w-[20rem] w-[28rem] sm:h-[20rem] h-[25rem] sm:mr-0 mb-16  rounded-lg shadow-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark ${className}`}>
      {/* <span className="absolute inset-0 lg:border-4 border-2 border-blue-500 border-dashed rounded-lg"></span> */}
      {/* <div className="relative flex flex-col h-full w-full rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"> */}
      <div className="relative flex flex-col h-full w-full rounded-lg">
        <div className="overflow-hidden rounded-t-lg bg-blue-500 flex-shrink-0 border-blue-500 border-b-4 ">
          <Link href={link} target=''>
            <FramerImage
              src={featuredImage}
              alt={title}
              className="object-cover w-full h-full  rounded-t-lg "
              id="featured-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </Link>
        </div>
        <div className=" relative overflow-hidden flex flex-col justify-between flex-1 p-4 text-dark dark:text-light bg-light dark:bg-dark rounded-b-lg">
          <div>
            <span className="flex flex-row align-middle">
              <Link href={link} target='' className="font-semibold text-sm uppercase relative group ">
                {title}
                <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === link ? 'w-full' : 'w-0'} dark:bg-light`}></span>
              </Link>
            </span>
            <p className="mt-2 text-xs font-bold text-gray-500 dark:text-gray-400">{eventdate}</p>
            <p className="mt-2 text-base sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{description}</p>
          </div>
          {/* <div className="flex justify-between items-center">
              <Link href={link} target='_blank' className="font-semibold text-sm hover:border-b-2 hover:border-solid border-dark dark:border-light">Read more</Link>
              <Link href={rsvp} target="_blank" className="btn btn-blue">RSVP Now</Link>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
