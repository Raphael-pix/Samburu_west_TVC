import React from 'react'
import { ArrowRight } from 'lucide-react'


interface FeaturedCourse {
    title: string;
    description: string;
    icon: string;
}

const CourseCard = ({ course }: { course: FeaturedCourse }) => {
    return (
        <div className="p-6 border rounded-lg text-center space-y-4 transition-all duration-300 hover:shadow-lg 
hover:border-blue-500 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">{course.icon}</div>
            <h3 className="font-semibold">{course.title}</h3>
            <p className="text-gray-600 text-sm">{course.description}</p>
            <button className="text-blue-600 transition-transform duration-300 hover:scale-110">
                <ArrowRight size={20} className="mx-auto" />
            </button>
        </div>
    )
}

export default CourseCard
