import { ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { TbShoppingCartOff, TbTruckDelivery } from "react-icons/tb";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/products/action";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import ProductContainer from "../Components/ProductContainer";
import { addProductCart } from "../Redux/cart/action";
const SingleProductPage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { isLoading, isError, singleData, images, authData } = useSelector(
    (store) => {
      return {
        isLoading: store.products.allProducts.isLoading,
        isError: store.products.allProducts.isError,
        singleData: store.products.singleData,
        images: store.products.singleData.images,
        authData: store.auth.data,
      };
      // console.log(store.products.allProducts);
    },
    shallowEqual
  );

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, [params]);

  // console.log(singleData);
  const addProdCart = (id) => {
    if (authData.isAuthenticated == true) {
      dispatch(addProductCart(id)).then((res) => {
        // console.log(res.payload.message);
        toast({
          title: res.payload.message,
          status:
            res.payload.message == "Product already exists in cart"
              ? "error"
              : res.payload.message == "Product Added Successfully in cart"
              ? "success"
              : "",
          isClosable: true,
          duration: 800,
          containerStyle: {
            borderRadius: "0px",
            fontFamily: "poppins",
            fontSize: "0.8rem",
            fontWeight: "100",
            width: "auto",
            minWidth: "0%",
          },
        });
      });
    } else {
      toast({
        title: "Login before adding product to cart  ",
        status: "info",
        isClosable: true,
        duration: 800,
        containerStyle: {
          borderRadius: "0px",
          fontFamily: "poppins",
          fontSize: "0.8rem",
          fontWeight: "100",
          width: "auto",
          minWidth: "0%",
        },
      });
      navigate("/login");
    }

    // console.log(cartMessage);
  };

  return (
    <>
      <Box
        w={["98%", "95%", "85%", "60%"]}
        margin="auto"
        fontSize="0.8rem"
        textDecoration="none"
        fontFamily="poppins"
        my="2rem"
      >
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          textDecoration="none"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/products?ideal_for=${singleData.ideal_for}`}
            >
              {singleData.ideal_for}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/products/:id">
              {singleData.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Flex
        w={["98%", "95%", "85%", "60%"]}
        // border="1px red solid"
        margin="auto"
        display="flex"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent="space-between"
        gap="2rem"
      >
        {/* IMAGE SECTION */}
        <Box
          w={{ base: "100%", md: "50%", lg: "50%" }}
          // border="1px blue solid"
        >
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {singleData.images &&
              singleData.images.split("|")?.map((el) => (
                <GridItem w="100%" key={el}>
                  <Image src={el} />
                </GridItem>
              ))}
          </Grid>
        </Box>

        {/* DETAILS SECTION */}
        <Box
          w={{ base: "100%", md: "50%", lg: "50%" }}
          //   border="1px green solid"
          textAlign="left"
          fontFamily="poppins"
          px="0.7rem"
        >
          <Box>
            <Text fontWeight={600} fontSize="1.2rem">
              {singleData.brand}
            </Text>
            <Text color="gray" fontSize="0.85rem" mt="0.2rem">
              {singleData.title}
            </Text>
            <Badge
              display="flex"
              ml="1"
              fontSize="0.65em"
              colorScheme="white"
              border="1px solid lightgray"
              mt="0.6rem"
              alignItems="center"
              textTransform="default"
              fontWeight={400}
              w="6.3rem"
            >
              {Math.floor(Math.random() * (5 - 3 + 1) + 3)}{" "}
              <StarIcon fontSize="0.65em" mx="0.2rem" color="teal" />
              <Divider height="10px" orientation="vertical" mr="0.2rem" />
              {(Math.random() * (30 + 1)).toFixed(1)} k Ratings
            </Badge>
          </Box>
          <Divider my="1rem" />
          {/* PRICE and mid section*/}
          <Box>
            <Box display="flex" alignItems="center">
              <Text
                fontWeight={600}
                fontSize="1.1rem"
                mr="0.6rem"
              >{`\u20B9 ${singleData.variant_price}`}</Text>
              <Text
                fontWeight={300}
                fontSize="1.1rem"
                mr="0.3rem"
              >{`MRP`}</Text>

              <Text
                fontWeight={300}
                fontSize="1.1rem"
                textDecoration="line-through"
              >{`\u20B9 ${singleData.variant_compare_at_price}`}</Text>
            </Box>
            <Text
              fontWeight={500}
              fontSize="0.65rem"
              color="teal"
              mt="0.3rem"
            >{`inclusive of all taxes`}</Text>
            <Text
              fontWeight={500}
              fontSize="1.1rem"
              mt="0.8rem"
            >{`Size : ${singleData.size}`}</Text>
            <Text
              fontSize="0.62rem"
              color="gray"
              mt="0.3rem"
            >{`Size fit: ${singleData.size_fit}`}</Text>
            <Box mt="1.7rem">
              {singleData.is_in_stock == "In Stock" ? (
                <Button
                  variant="ghost"
                  bg="#FF527B"
                  color="white"
                  size={{ base: "sm", md: "md", lg: "md" }}
                  fontSize="1.1rem"
                  borderRadius={3}
                  leftIcon={<RiShoppingCart2Line />}
                  _hover={{ bg: "#FF518B" }}
                  onClick={() => addProdCart(singleData._id)}
                >
                  <Text fontWeight={500} fontSize="1.1rem">
                    ADD TO CART
                  </Text>
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  bg="#FF527B"
                  color="white"
                  size={{ base: "sm", md: "md", lg: "md" }}
                  fontSize="1.1rem"
                  borderRadius={3}
                  disabled={true}
                  leftIcon={<TbShoppingCartOff />}
                  _hover={{ bg: "#FF518B" }}
                >
                  <Text fontWeight={500} fontSize="1.1rem">
                    Out of stock
                  </Text>
                </Button>
              )}
            </Box>
            <Divider my="1.2rem" />
            <Box mt="1.5rem">
              <Text
                fontWeight={600}
                fontSize="1.1rem"
                display="flex"
                alignItems="center"
                gap="0.3rem"
              >
                DELIVERY OPTIONS <TbTruckDelivery />
              </Text>
              <Box>
                <UnorderedList
                  color="gray"
                  fontSize="0.7rem"
                  mt="0.2rem"
                  fontWeight="300"
                >
                  <ListItem>- 100% Original Products</ListItem>
                  <ListItem>- Pay on delivery might be available</ListItem>
                  <ListItem>- Easy 30 days returns and exchanges</ListItem>
                  <ListItem>- Try & Buy might be available</ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Box mt="1.5rem">
              <Text
                fontWeight={600}
                fontSize="1.1rem"
                display="flex"
                alignItems="center"
                gap="0.3rem"
              >
                BEST OFFERS <MdOutlineLocalOffer />
              </Text>
              <Box>
                <UnorderedList
                  color="gray"
                  fontSize="0.7rem"
                  mt="0.2rem"
                  fontWeight="300"
                >
                  <ListItem>
                    Coupon Discount: Rs. 200 off (check cart for final savings)
                  </ListItem>
                  <ListItem>
                    Applicable on: Orders above Rs. 599 (only on first purchase)
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
          {/* PRODUCT DETAILS */}
          <Divider my="1rem" />
          <Box>
            <Text
              fontWeight={600}
              fontSize="1.1rem"
              display="flex"
              alignItems="center"
              gap="0.3rem"
            >
              PRODUCT DETAILS <BiDetail />
            </Text>
            <Text color="gray" fontSize="0.8rem" mt="0.2rem">
              {singleData.product_details}
            </Text>
            <Text color="gray" fontSize="0.8rem" mt="0.2rem">
              {singleData.complete_the_look}
            </Text>
            <Text
              fontWeight={600}
              fontSize="1.1rem"
              display="flex"
              alignItems="center"
              gap="0.3rem"
              mt="1.2rem"
            >
              Color
            </Text>
            <Text color="gray" fontSize="0.8rem" mt="0.2rem">
              {`Dominant color : ${singleData.dominant_color}`}
            </Text>
            <Text color="gray" fontSize="0.8rem" mt="0.2rem">
              {singleData.actual_color}
            </Text>
            <Text
              fontWeight={600}
              fontSize="1.1rem"
              display="flex"
              alignItems="center"
              gap="0.3rem"
              mt="1.2rem"
            >
              Material & Care
            </Text>

            <Text color="gray" fontSize="0.8rem" mt="0.2rem">
              {`Dominant material : ${singleData.dominant_material}`}
            </Text>
            <Text color="gray" fontSize="0.8rem" mt="0.2rem">
              {singleData.care_instructions}
            </Text>
          </Box>
        </Box>
      </Flex>
      <Divider my="2rem" />
      <Flex>
        <ProductContainer
          brand={singleData.brand}
          ideal_for={singleData.ideal_for}
        />
      </Flex>
    </>
  );
};

export default SingleProductPage;
