"use client";

import { motion } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  BoltIcon,
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "丰富的AIGC经验",
    description: "从音乐到视频，从构图到韵脚，和AI一起生成她眼中的美学世界",
    icon: ChatBubbleLeftRightIcon,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "不断提升的AI编程",
    description: "cursor或是Marscode，从零基础小白到你眼前的页面，一直在进步。",
    icon: CursorArrowRaysIcon,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "成熟的视觉产出能力",
    description: "专栏节目、平面设计、简单动画、视效包装，一个人就是一个团队。",
    icon: SparklesIcon,
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "创造爆款的内容运营",
    description: "B站热榜内容贡献者，探究内容运营动作，用封面提升23%的拉新率。",
    icon: ShieldCheckIcon,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "专业的项目执行",
    description: "执行在准，目标要准，执行求快，一击即中，参与多个国家级大创项目，高效产出。",
    icon: BoltIcon,
    color: "from-blue-500 to-violet-500",
  },
  {
    name: "结构化的思考输出",
    description: "有结构的输出才能达成有效沟通，有沉淀的思考才能转化为智慧。",
    icon: GlobeAltIcon,
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "团队粘合剂",
    description: "不是领头羊，却是点子王，乐观且开朗，坚韧有退让",
    icon: DocumentTextIcon,
    color: "from-red-500 to-rose-500",
  },
  {
    name: "多元知识背景",
    description: "专业的艺术与传播能力，深研化学材料三年，目前正在成长为专业车企人。",
    icon: UserGroupIcon,
    color: "from-fuchsia-500 to-pink-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
        <div className="absolute inset-0">
          <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="features-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 .5H32M.5 0V32" fill="none" stroke="rgb(226 232 240 / 0.3)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#features-grid)" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              了解一下 
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              一个可以与你并肩同行的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                {" "}伙伴
              </span>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              强大的学习和逻辑思维能力，乐观开朗的性格，和我一起探索更大的世界吧
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative group">
                  {/* 卡片内容 */}
                  <div className="relative z-10 bg-white rounded-2xl p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                    {/* 图标背景 */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-300" />
                    <div className="relative">
                      {/* 图标 */}
                      <div className="relative h-12 w-12">
                        <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.color} opacity-10`} />
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                          <feature.icon
                            className={`h-6 w-6 bg-gradient-to-r ${feature.color} [&>path]:fill-transparent [&>path]:stroke-[url(#gradient)] stroke-2`}
                            aria-hidden="true"
                          />
                          <svg width="0" height="0">
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" className="[stop-color:var(--tw-gradient-from)]" />
                                <stop offset="100%" className="[stop-color:var(--tw-gradient-to)]" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      {/* 标题和描述 */}
                      <dt className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* 技术指标 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24 rounded-2xl bg-gray-50 p-8"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">3个</div>
              <div className="mt-2 text-sm text-gray-600">国家级奖项</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">4.8</div>
              <div className="mt-2 text-sm text-gray-600">在校绩点</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">2个</div>
              <div className="mt-2 text-sm text-gray-600">核心项目参与</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">10+</div>
              <div className="mt-2 text-sm text-gray-600">个人荣誉</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;