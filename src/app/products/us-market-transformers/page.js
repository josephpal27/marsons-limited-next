import ProductsBanner from "@/components/products/ProductsBanner";
import { usMarketData } from "@/data/usMarketData";

export default function UsMarketTransformers() {

    const data = usMarketData[0];

    return (
        <>
            <ProductsBanner title={data.title} range={data.range} banner={data.banner} />
        </>
    );
}