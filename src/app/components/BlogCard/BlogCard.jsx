'use client';

import Image from 'next/image';

const blogPosts = [
    {
        id: 1,
        title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
        date: "May 23, 2024",
        image: "/assets/blog-1.png",
        link: "#",
    },
    {
        id: 2,
        title: "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
        date: "May 23, 2024",
        image: "/assets/blog-2.png",
        link: "#",
    },
    {
        id: 3,
        title: "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
        date: "May 23, 2024",
        image: "/assets/blog-3.png",
        link: "#",
    },
];

export default function BlogsCard() {
    return (
        <div className="w-full md:w-[1200px] mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <div key={post.id} className="rounded-lg  overflow-hidden">
                        <div className="relative">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={384}
                                height={260}

                            />
                        </div>
                        <div className="p-4">
                            <p className="text-[#4A4A52] text-sm">{post.date}</p>
                            <h3 className="text-lg font-medium text-[#212337] mt-2">{post.title}</h3>
                            <a href={post.link} className="text-orange-600 font-medium flex items-center gap-1 mt-3 hover:underline">
                                Read More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
