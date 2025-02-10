"use client";

import { motion } from "framer-motion";
import { CheckIcon, XIcon } from "lucide-react";



// 定义 works 数组
const works = [
  {
    name: "音乐创作",
    description: "“堪堪算平平，不够惊心”",
    image: "musicc.jpg",
  },
  {
    name: "图片创作",
    description: "“多梦的夜晚又深又暗的水潭”",
    image: "pugongying.png",
  },
  {
    name: "海报创作",
    description: "“你的目光是一个女孩的黄金时代”",
    image: "postal.jpg",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      </div>

      <div className="container-custom">
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            多元内容创作
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              {" "}拓展世界边界
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            MIKO，永远在迭代的路上
          </p>
        </motion.div>

        {/* 作品展示 */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {works.map((work, index) => (
            <motion.div
              key={work.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* 作品图片 */}
              <div className="h-full rounded-3xl bg-white shadow-xl ring-1 ring-gray-200 p-8">
                <img src={work.image} alt={work.name} className="h-full w-full object-cover rounded-3xl" />
              </div>

              {/* 作品描述 */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-900">{work.name}</h3>
                <p className="mt-2 text-gray-600">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
