import Link from 'next/link';
import { Box, Button } from '@chakra-ui/core';

function HomePage() {
    return (
        <>
            <div>Get ready for spring 2020! 🍻</div>
            <Box outline="grey" w="100%" p={4} color="white">
                <Link href="/how-is-beer-made">
                    <Button variantColor="teal" variant="outline">{"Learn how beer is made"}</Button>
                </Link>
            </Box>
        </>
    )
}

export default HomePage
