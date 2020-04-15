import { Heading, Text } from "@chakra-ui/core"

const BeerStoryPage = () => (
    <>
        <Heading as={"h1"}>{"How is beer made?"}</Heading>
        <Text>{"A beverage with over a thousand years of history."}</Text>
        <Text>{"Let's take high-level look at some of what goes into making a modern beer."}</Text>
        <Heading as={"h2"}>{'Ingredients'}</Heading>
        <Heading as={"h2"}>{'Mashing'}</Heading>
        <Heading as={"h2"}>{'Boil'}</Heading>
        <Heading as={"h2"}>{'Fermentation'}</Heading>
        <Heading as={"h2"}>{'Carbination'}</Heading>
        <Text>{"Before xxxx this step would be skipped but alas.."}</Text>
    </>
)

export default BeerStoryPage;