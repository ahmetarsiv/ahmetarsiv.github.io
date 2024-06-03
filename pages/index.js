import Head from 'next/head'
import NavLink from "@/pages/components/NavLink";
import CardGrid from "@/pages/components/CardGrid";
import WorkExperience from "@/pages/components/WorkExperience";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ahmet Sefa Arşiv - Resume</title>
                <meta name="description" content="Generated by Ahmet Sefa Arşiv"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:title" content="Ahmet Sefa Arşiv - Resume"/>
                <meta property="og:description" content="Generated by Ahmet Sefa Arşiv"/>
                <meta property="og:url" content="https://ahmetarsiv.github.io/"/>
                <meta property="og:type" content="website"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@ahmetarsiv"/>
                <meta name="twitter:title" content="Ahmet Sefa Arşiv - Resume"/>
                <meta name="twitter:description" content="Generated by Ahmet Sefa Arşiv"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="bg-slate-950">
                <div className="min-h-screen flex flex-col justify-center relative">
                    <div className="py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto z-10">
                        <div className="absolute inset-0 -z-10 overflow-hidden">
                            <svg className="absolute top-0 bottom-1/4 right-[-10rem] m-auto opacity-75 h-full" viewBox="0 0 1030 692" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <g clipPath="url(#clip0_1_2)">
                                    <g filter="url(#filter0_f_1_2)">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M565.961 140.952C591.238 143.377 611.103 153.895 626.589 165.972C639.812 176.285 642.38 188.967 644.079 201.878C645.998 216.455 649.43 231.277 636.841 243.855C620.328 260.354 598.271 278.626 565.961 279.929C532.882 281.263 508.699 263.552 484.725 249.988C459.901 235.943 428.597 222.207 428.01 201.878C427.417 181.389 454.158 164.342 481.895 152.092C505.825 141.523 536.494 138.125 565.961 140.952Z"
                                              fill="#0369A1"></path>
                                    </g>
                                    <g filter="url(#filter1_f_1_2)">
                                        <path
                                            d="M853.75 241.796L625.224 144.393C620.241 142.269 604.579 135.671 597.46 144.393C591.764 151.371 604.104 158.931 610.986 161.839C685.975 196.406 837.376 265.929 843.071 267.479C850.191 269.418 863.717 271.356 871.548 260.695C877.813 252.166 862.293 244.542 853.75 241.796Z"
                                            fill="#D946EF"></path>
                                    </g>
                                    <g filter="url(#filter2_f_1_2)">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M749.539 295.201C773.46 300.354 779.762 334.033 796.795 353.562C813.441 372.648 843.56 380.086 846.663 406.556C849.874 433.948 829.553 457.29 811.099 475.593C793.917 492.635 772.431 501.247 749.539 502.887C724.726 504.664 694.662 507.18 679.579 485.013C664.844 463.357 683.954 433.797 683.994 406.556C684.034 379.411 666.476 351.015 679.811 328.36C694.269 303.796 723.766 289.649 749.539 295.201Z"
                                              fill="#1D4ED8" fillOpacity="0.75"></path>
                                    </g>
                                    <g filter="url(#filter3_f_1_2)">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M599.838 240.664C622.091 242.884 644.355 240.073 663.377 252.275C688.638 268.48 718.614 287.533 720.847 318.29C723.131 349.753 699.488 378.338 673.742 395.073C652.025 409.189 625.453 397.264 599.838 396.946C574.805 396.635 544.029 412.956 527.68 393.259C511.276 373.497 535.372 344.372 534.551 318.29C533.669 290.249 505.033 259.378 522.801 238.252C540.374 217.357 573.253 238.012 599.838 240.664Z"
                                              fill="#6D28D9" fillOpacity="0.4"></path>
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_f_1_2" x="228" y="-60" width="618" height="540"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                 result="shape"></feBlend>
                                        <feGaussianBlur stdDeviation="100"
                                                        result="effect1_foregroundBlur_1_2"></feGaussianBlur>
                                    </filter>
                                    <filter id="filter1_f_1_2" x="496" y="40" width="477" height="329"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                 result="shape"></feBlend>
                                        <feGaussianBlur stdDeviation="50"
                                                        result="effect1_foregroundBlur_1_2"></feGaussianBlur>
                                    </filter>
                                    <filter id="filter2_f_1_2" x="554" y="174" width="413" height="450"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                 result="shape"></feBlend>
                                        <feGaussianBlur stdDeviation="60"
                                                        result="effect1_foregroundBlur_1_2"></feGaussianBlur>
                                    </filter>
                                    <filter id="filter3_f_1_2" x="397" y="109" width="444" height="414"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                 result="shape"></feBlend>
                                        <feGaussianBlur stdDeviation="60"
                                                        result="effect1_foregroundBlur_1_2"></feGaussianBlur>
                                    </filter>
                                    <clipPath id="clip0_1_2">
                                        <rect width="1030" height="692" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <span className="text-xl xl:text-2xl text-cyan-400 font-mono">Hi there! I'm</span>
                        <div className="lg:h-4"/>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1">
                            Ahmet Sefa Arşiv
                            <span className="text-cyan-400">.</span>
                        </h1>
                        <div className="h-6 md:h-8 lg:h-12 xl:h-16"/>
                        <div className="h-4 sm:h-0"/>
                        <div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose space-y-4 sm:space-y-6 lg:space-y-8">
                            <a href="#about" className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group relative">
                                <span className="group-hover:text-cyan-300 text-cyan-400 uppercase font-mono transition">About Me</span>
                                <br/>
                                <p className="group-hover:text-slate-300 text-slate-400 transition">
                                    I love programming, especially competitive programming and web development.
                                </p>
                                <span className="absolute w-px -inset-y-3 left-[-1rem] bg-gradient-to-b from-cyan-300/0 via-cyan-300/60 to-cyan-300/0 opacity-0 group-hover:opacity-100 transition"/>
                            </a>
                            <a href="#school" className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group relative">
                                <span className="group-hover:text-cyan-300 text-cyan-400 uppercase font-mono transition">School</span>
                                <br/>
                                <p className="group-hover:text-slate-300 text-slate-400 transition">
                                    After graduating high school, I qualified to go to 42ecole.
                                </p>
                                <span className="absolute w-px -inset-y-3 left-[-1rem] bg-gradient-to-b from-cyan-300/0 via-cyan-300/60 to-cyan-300/0 opacity-0 group-hover:opacity-100 transition"/>
                            </a>
                            <a href="#experience" className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group relative">
                                <span className="group-hover:text-cyan-300 text-cyan-400 uppercase font-mono transition">Work Experience</span>
                                <br/>
                                <p className="group-hover:text-slate-300 text-slate-400 transition">
                                    I gained competitive experiences.
                                </p>
                                <span className="absolute w-px -inset-y-3 left-[-1rem] bg-gradient-to-b from-cyan-300/0 via-cyan-300/60 to-cyan-300/0 opacity-0 group-hover:opacity-100 transition"/>
                            </a>
                            <a href="#projects" className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group relative">
                                <span className="group-hover:text-cyan-300 text-cyan-400 uppercase font-mono transition">Projects</span>
                                <br/>
                                <p className="group-hover:text-slate-300 text-slate-400 transition">
                                    We develop open source projects for the benefit of humanity.
                                </p>
                                <span className="absolute w-px -inset-y-3 left-[-1rem] bg-gradient-to-b from-cyan-300/0 via-cyan-300/60 to-cyan-300/0 opacity-0 group-hover:opacity-100 transition"/>
                            </a>
                        </div>
                        <div className="h-6 md:h-8 xl:h-16"/>
                        <div className="font-mono uppercase text-slate-400 text-sm sm:text-base">
                            <NavLink target="_blank" className="mr-2" href="https://codenteq.com" name="Codenteq"/>
                            <NavLink target="_blank" href="https://imtihantech.com" name="Imtihan"/>
                        </div>
                    </div>
                </div>
                <div className="py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto" id="about">
                    <span className="text-xl xl:text-2xl text-cyan-400 font-mono">01</span>
                    <div className="lg:h-4"/>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1">About Me<span className="text-cyan-400">.</span></h1>
                    <div className="h-6 md:h-8 lg:h-12 xl:h-16"/>
                    <div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose space-y-4 sm:space-y-6 lg:space-y-8">
                        <p>
                            I am a developer specializing in front-end development. I have a strategic mindset, high
                            internal motivation, and a strong ability to work independently. I am passionate about
                            research and continuously acquiring new skills.
                        </p>
                    </div>
                </div>
                <div className="py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto" id="school">
                    <span className="text-xl xl:text-2xl text-cyan-400 font-mono">02</span>
                    <div className="lg:h-4"/>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1">School<span className="text-cyan-400">.</span></h1>
                    <div className="h-6 md:h-8 lg:h-12 xl:h-16"/>
                    <div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose space-y-4 sm:space-y-6 lg:space-y-8">
                        <p>I am not currently a student.</p>
                    </div>
                    <div className="h-8 lg:h-12"/>
                    <div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
                        <h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">Temizel-Ünlü Vocational and Technical Anatolian High School:</h2>
                        <ul className="list-disc ml-8 marker:text-slate-500 lg:space-y-0.5">
                            <li>75.13 Web Programming</li>
                        </ul>
                    </div>
                    <div className="h-8 lg:h-12"/>
                    <div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose space-y-4 sm:space-y-6 lg:space-y-8">
                        <p>
                            I established the first developer class at school and trained new programmers (Garage Community).
                            As part of the Erasmus+ project, I received WordPress training in Braga, Portugal.
                            I also developed an augmented reality project under the scope of Tubitak.
                        </p>
                    </div>
                    <div className="h-4 lg:h-6"/>
                </div>
                <div className="py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto" id="experience"><span className="text-xl xl:text-2xl text-cyan-400 font-mono">03</span>
                    <div className="lg:h-4"/>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1">Work Experience<span className="text-cyan-400">.</span></h1>
                    <div className="h-6 md:h-8 lg:h-12 xl:h-16"/>

                    <WorkExperience name="White Rose" description="Research And Development Officer" />
                    <WorkExperience name="Powerşarj" description="Web Developer & SEO" />
                    <WorkExperience name="Codenteq" description="Frontend dev & Co-f" />
                    <WorkExperience name="PayeCards" description="Back-End Developer" />
                    <WorkExperience name="Braga Mobility Open" description="Wordpress Developer" />
                </div>

                <div className="py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto" id="projects"><span className="text-xl xl:text-2xl text-cyan-400 font-mono">04</span>
                    <div className="lg:h-4"/>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1">Projects<span className="text-cyan-400">.</span></h1>
                    <div className="h-6 md:h-8 lg:h-12 xl:h-16"/>
                    <div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose space-y-4 sm:space-y-6 lg:space-y-8">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p>I'm always working on something new. Below are a few of my favorite projects!</p></div>
                    <div className="h-8 lg:h-12"/>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                        <CardGrid
                            target="_blank"
                            href="https://imtihantech.com"
                            name="İmtihan"
                            description="A platform built with Laravel and Next.js for creating online courses and exams. "
                            skill="Education · Learning"
                        />
                        <CardGrid
                            target="_blank"
                            href="https://github.com/codenteq/laerx"
                            name="Laerx eExam"
                            description="A driving license course management system enabling online exams."
                            skill="Vue.js · PHP"
                        />
                        <CardGrid
                            target="_blank"
                            href="https://github.com/codenteq/interfeys"
                            name="Interfeys Design System"
                            description="A UI library developed as native web components compatible with various web frameworks."
                            skill="React.js · Typescript · Storybook"
                        />
                        <CardGrid
                            target="_blank"
                            href="https://github.com/codenteq/iyzico-payment-gateway"
                            name="Iyzico Payment Gateway"
                            description="A secure payment gateway package for online stores. "
                            skill="PHP · Bagisto · Iyzico"
                        />
                        <CardGrid
                            target="_blank"
                            href="https://github.com/codenteq/stripe-payment-gateway"
                            name="Stripe Payment Gateway"
                            description="A secure payment gateway package for online stores."
                            skill="PHP · Bagisto · Stripe"
                        />
                        <CardGrid
                            target="_blank"
                            href="https://tumtal.meb.k12.tr/icerikler/avrupa-birligi-ab-projeleri_606564.html"
                            name="Erasmus+"
                            description="My education is in Türkiye, and my internship is in Europe. (2018-2019) (2018-1-TR01-KA102-054152)"
                            skill="Erasmus+ · Wordpress · Internship"
                        />
                    </div>
                </div>

                <div className="py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto" id="contact"><span className="text-xl xl:text-2xl text-cyan-400 font-mono">05</span>
                    <div className="lg:h-4"/>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1">Contact Me<span className="text-cyan-400">.</span></h1>
                    <div className="h-6 md:h-8 lg:h-12 xl:h-16"/>
                    <div className="font-mono text-slate-400 sm:text-lg md:text-xl">
                        <NavLink target="_blank" href="https://linkedin.com/in/ahmetarsiv" name="LinkedIn" /> · <NavLink target="_blank" href="https://github.com/ahmetarsiv" name="Github" />
                    </div>
                </div>
                <div className="h-8 md:h-12 lg:h-16"/>
                <div className="py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto pb-6 md:pb-12 lg:pb-24">
                    <div className="font-mono text-slate-400 text-xs md:text-sm lg:text-base">
                        <p>&#169; 2024 <NavLink target="_blank" href="https://www.linkedin.com/in/ahmetarsiv" name="Ahmet Sefa Arşiv" />.</p>
                        <span>
                            This site is built with <NavLink target="_blank" href="https://nextjs.org/" name="Next.Js" /> and <NavLink target="_blank" href="https://tailwindcss.com/" name="Tailwind CSS" />. View the source code on <NavLink target="_blank" href="https://github.com/ahmetarsiv/ahmetarsiv.github.io" name="Github" />.
                        </span>
                    </div>
                </div>
            </main>
        </>
    )
}
