import Wrapper from "@/components/global/wrapper";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";

const HomePage = () => {
    return (
        <Wrapper className="relative">
            <Hero />
            <Features />
            <Integration />
        </Wrapper>
    )
};

export default HomePage
