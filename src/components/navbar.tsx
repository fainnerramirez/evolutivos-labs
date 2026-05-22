import { Box, Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
    
    const [selected, setSelected] = React.useState("home");
    const handleClick = (option: string) => {
        setSelected(option);
    }

    return (
        <Flex
            as="nav"
            justifyContent="space-between"
            alignItems="center"
            justifyItems="center"
            width="50%"
            margin="10px auto"
            backgroundColor="gray.100"
            padding="1rem"
        >
            <Box>
                <Heading
                    as="h1"
                    size="2xl"
                    textAlign="center"
                >
                    Evolutivos Labs
                </Heading>
            </Box>
            <ButtonGroup gap={4}>
                <Button variant={selected === "home" ? "solid" : "ghost"} onClick={() => handleClick("home")}>
                    Home
                </Button>
                <Button variant={selected === "about" ? "solid" : "ghost"} colorScheme="whiteAlpha" onClick={() => handleClick("about")}>
                    Nosotros
                </Button>
                <Button variant={selected === "projects" ? "solid" : "ghost"} colorScheme="whiteAlpha" onClick={() => handleClick("projects")}>
                    Proyectos
                </Button>
            </ButtonGroup>
        </Flex>
    )
}