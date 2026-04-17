import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="h-[100dvh] flex flex-col justify-center items-center">
                <h1 className="
                    text-[3rem] sm:text-[2.5rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    text-[#e9202a] font-bold tracking-[2]
                ">
                    404
                </h1>
                <p className="
                    text-[1.5rem] sm:text-[2rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]
                    text-[#000] font-[600]
                ">
                    PAGE NOT FOUND
                </p>
                <Link href="/" className="
                    bg-[#e9202a] hover:bg-[#d61923] text-[#fff] font-[500]
                    py-[0.4rem] px-[1rem] rounded-[6px] mt-[1rem] transition
                    text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                ">
                    View Home
                </Link>
            </section>
        </>
    );
}