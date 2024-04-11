import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, Badge, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Productivity Suite",
    description: "Boost your productivity with our all-in-one software suite.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjBzb2Z0d2FyZXxlbnwwfHx8fDE3MTI4NzEzNjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Design Toolkit",
    description: "Create stunning designs with our comprehensive design toolkit.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1618385455730-2571c38966b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzb2Z0d2FyZXxlbnwwfHx8fDE3MTI4NzEzNjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Developer Essentials",
    description: "Essential tools and utilities for every developer.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1581090465237-2215893ba918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB0b29sc3xlbnwwfHx8fDE3MTI4NzEzNjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const toast = useToast();

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Flex align="center" mb={8}>
        <Heading as="h1" size="xl" mr={4}>
          Software Store
        </Heading>
        <Spacer />
        <Button leftIcon={<FaShoppingCart />} variant="outline">
          Cart ({cart.length})
        </Button>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={product.image} alt={product.name} mb={4} />
            <Heading as="h2" size="md" mb={2}>
              {product.name}
            </Heading>
            <Text mb={4}>{product.description}</Text>
            <Flex align="center">
              <Text fontWeight="bold" mr={2}>
                ${product.price}
              </Text>
              <Spacer />
              <Button colorScheme="blue" size="sm" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Flex>
          </Box>
        ))}
      </Grid>

      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          Your Cart
        </Heading>
        {cart.length === 0 ? (
          <Text>Your cart is empty.</Text>
        ) : (
          <Box>
            {cart.map((item, index) => (
              <Flex key={index} mb={2}>
                <Text>{item.name}</Text>
                <Spacer />
                <Badge colorScheme="green">${item.price}</Badge>
              </Flex>
            ))}
            <Button colorScheme="blue" size="lg" mt={4}>
              Checkout
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Index;
