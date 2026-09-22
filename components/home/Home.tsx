import Hero from "./components/Hero";
import CategoryBannerGrid from "./components/CategoryBannerGrid";
import { IndustrialSolutions } from "./components/IndustrialSolutions";
import FeaturedProducts from "./components/FeaturedProducts";
export default function Home() {
    return (
        <>
            <Hero></Hero>
            <CategoryBannerGrid></CategoryBannerGrid>
            <IndustrialSolutions></IndustrialSolutions>
            <FeaturedProducts></FeaturedProducts>
        </>
    );
}