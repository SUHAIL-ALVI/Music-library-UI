'use client'
import Link from 'next/link'
import courseData from '../data/music_course.json'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
        
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)


  return (
   <div className='py-12 bg-gray-900'>
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the best</p>
            </div>
        </div>
        <div className='m-10 px-5'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            
            {featuredCourses.map((course:Course)=>(
                <div key={course.id} className="flex justify-center">
                    <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                </div>
            ))}  
            </div>

        </div>
        <div className='mt-25 text-center'>
            <Link href={"/courses"}
            className='"relative text-[#5fd6a3] text-[15px] py-[0.7em] 
            px-[2.7em] tracking-[0.06em] font-inherit rounded-[0.6em] overflow-hidden 
            transition-all duration-300 leading-[1.4em] border-2 border-[#3af5a4] 
            bg-[linear-gradient(to_right,_rgba(27,_253,_156,_0.1)_1%,_transparent_40%,_transparent_60%,_rgba(27,_253,_156,_0.1)_100%)] 
            shadow-[inset_0_0_10px_rgba(27,_253,_156,_0.4),_0_0_9px_3px_rgba(27,_253,_156,_0.1)]
             hover:text-[#4eff8f] hover:shadow-[inset_0_0_10px_rgba(27,_253,_156,_0.6),_0_0_9px_3px_rgba(27,_253,_156,_0.2)] 
             before:absolute before:left-[-4em] before:w-[4em] 
             before:h-full before:top-0 before:transition-transform 
             before:duration-400 before:ease-in-out 
             before:bg-[linear-gradient(to_right,_transparent_1%,_rgba(27,_253,_156,_0.1)_40%,_rgba(27,_253,_156,_0.1)_60%,_transparent_100%)]
             hover:before:transform hover:before:translate-x-[15em]"'>
            View All courses
            </Link>
            
        </div>
   </div>
  )

}

export default FeaturedCourses