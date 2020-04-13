import { Box, Flex, Heading, List, ListItem } from "@chakra-ui/core";

const Ingredients = ({ grain, hops, yeast }) => (
    <>
        <Heading fontSize="xl">{"Ingredients"}</Heading>
        <Flex direction={{ base: 'column', md: 'row' }}>
            <Box minWidth="260px" flex="1" p="4" m="2" shadow="sm" borderWidth="1px">
                <Heading fontSize="l">{"Grain Bill"}</Heading>
                <List styleType="disc">
                    {grain.map((grain => (
                        <ListItem style={{}}>{grain}</ListItem>
                    )))}
                </List>
            </Box>
            <Box minWidth="260px" flex="1" p="4" m="2" shadow="sm" borderWidth="1px">
                <Heading fontSize="l">{"Hops"}</Heading>
                <List styleType="disc">
                    {hops.map((hop => (
                        <ListItem>{hop}</ListItem>
                    )))}
                </List>
            </Box>
            <Box minWidth="260px" flex="1" p="4" m="2" shadow="sm" borderWidth="1px">
                <Heading fontSize="l">{"Yeast"}</Heading>
                {yeast}
            </Box>
        </Flex>
    </>
);

export default Ingredients;