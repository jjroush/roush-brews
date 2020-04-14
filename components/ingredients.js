import { Box, Flex, Heading, List, ListItem } from "@chakra-ui/core";

const Ingredients = ({ grain, hops, yeast }) => (
    <>
        <Heading>{"Ingredients"}</Heading>
        <Flex direction={{ base: 'column', md: 'row' }}>
            <Box flex="1" p="4" m="2" shadow="sm" borderWidth="1px">
                <Heading fontSize="xl">{"Grain Bill"}</Heading>
                <List>
                    {grain.map((grain => (
                        <ListItem style={{}}>{grain}</ListItem>
                    )))}
                </List>
            </Box>
            <Box flex="1" p="4" m="2" shadow="sm" borderWidth="1px">
                <Heading fontSize="xl">{"Hops"}</Heading>
                <List>
                    {hops.map((hop => (
                        <ListItem>{hop}</ListItem>
                    )))}
                </List>
            </Box>
            <Box flex="1" p="4" m="2" shadow="sm" borderWidth="1px">
                <Heading fontSize="xl">{"Yeast"}</Heading>
                {yeast}
            </Box>
        </Flex>
    </>
);

export default Ingredients;