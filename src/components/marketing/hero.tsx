import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { OrbitingCircles } from "../ui/orbiting-circles";

const Hero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-10">

            <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>

            <div className="flex flex-col items-center justify-center gap-y-8 relative">

                <div className="flex flex-col items-center justify-center text-center gap-y-1 bg-background/0">
                    <Container className="relative hidden lg:block overflow-hidden">
                        <button className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-neutral-800" />
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
                                <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-[9px] font-medium mr-2 text-white">
                                    NEW
                                </span>
                                Explore the 2024 recap
                            </span>
                        </button>
                    </Container>
                    <Container delay={0.15}>
                        <h1 className="text-4xl mt-2 md:text-4xl lg:text-7xl font-bold text-center !leading-none max-w-4xl mx-auto">
                            Create, Visualize, Optimize {" "}
                            <span className="">
                                Schemas {" "}
                            </span>
                            with AI
                        </h1>
                    </Container>
                    <Container delay={0.25} className="z-20 mt-8">
                        <div className="mx-auto max-w-2xl">
                            <form className="relative w-full items-center gap-3 bg-gradient-to-tr rounded-3xl p-px overflow-hidden from-primary/5 to-primary/20">
                                <textarea
                                    name="query"
                                    className="block resize-none py-5 pl-4 pr-16 w-full h-[120px] rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-background text-primary placeholder:text-primary/50" 
                                    placeholder="Design a database for an online store with products, categories, customers, orders, and order items
                                ">
                                </textarea>
                                <div className="absolute bottom-4 right-3 flex items-center">
                                    <Link href="#" className="flex items-center gap-2 group">
                                        <Button size="sm">
                                            Try Sqeema Now
                                            <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-all duration-300" />
                                        </Button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </Container>
                    <Container delay={0.2}>
                        <p className="max-w-xl mx-auto mt-4 mb-6 text-base lg:text-lg text-center text-muted-foreground">
                            AI-enhanced database design tool perfect for developers, database administrators, and students who want to build better, more efficient database structures with ease.
                        </p>
                    </Container>
                    <Container delay={0.3} className="relative">
                        <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
                            <OrbitingCircles
                                speed={0.5}
                                radius={300}
                            >
                                <Icons.circle1 className="size-4 text-foreground/70" />
                                <Icons.circle2 className="size-1 text-foreground/80" />
                            </OrbitingCircles>
                            <OrbitingCircles
                                speed={0.25}
                                radius={400}
                            >
                                <Icons.circle2 className="size-1 text-foreground/50" />
                                <Icons.circle1 className="size-4 text-foreground/60" />
                                <Icons.circle2 className="size-1 text-foreground/90" />
                            </OrbitingCircles>
                            <OrbitingCircles
                                speed={0.1}
                                radius={500}
                            >
                                <Icons.circle2 className="size-1 text-foreground/50" />
                                <Icons.circle2 className="size-1 text-foreground/90" />
                                <Icons.circle1 className="size-4 text-foreground/60" />
                                <Icons.circle2 className="size-1 text-foreground/90" />
                            </OrbitingCircles>
                        </Container>

                        <div className="relative rounded-xl lg:rounded-[32px] border border-border p-2 backdrop-blur-lg mt-10 max-w-6xl mx-auto">
                            <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-sky-500 to-blue-600 w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] animate-image-glow"></div>
                            <div className="hidden lg:block absolute -top-1/8 left-1/2 -z-20 bg-blue-600 w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] animate-image-glow"></div>

                            <div className="rounded-lg lg:rounded-[22px] border border-border bg-background">
                                <Image
                                    src="/images/editor.png"
                                    alt="dashboard"
                                    width={1920}
                                    height={1080}
                                    className="rounded-lg lg:rounded-[20px]"
                                />
                            </div>

                        </div>
                    </Container>

                </div>
            </div>
        </div>
    )
};

export default Hero
