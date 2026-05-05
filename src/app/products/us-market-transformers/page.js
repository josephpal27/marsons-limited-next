import MarsonsGreenOverview from "@/components/marsons-green/MarsonsGreenOverview";
import ProductsBanner from "@/components/products/ProductsBanner";
import TechnicalSpecifications from "@/components/products/TechnicalSpecifications";
import PadMounted from "@/components/us-market/PadMounted";
import SubStationPower from "@/components/us-market/SubStationPower";
import { usMarketData } from "@/data/usMarketData";

export default function UsMarketTransformers() {

    const data = usMarketData[0];

    return (
        <>
            <ProductsBanner title={data.title} range={data.range} banner={data.banner} />
            <MarsonsGreenOverview overview={data.overview} title={data.title} />
            <PadMounted />
            <TechnicalSpecifications specs={data.technicalSpecs} />
            <SubStationPower />
        </>
    );
}