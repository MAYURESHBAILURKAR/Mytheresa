import {
  Flex,
  Image,
  Box,
  Text,
  Button,
  Collapse,
  Divider,
  Grid,
  ListItem,
  ListIcon,
  List,
  GridItem,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import ProductSlider from "../Components/ProductSlider";
import { getAllProducts, getSliderProducts } from "../Redux/products/action";
import { VscCircleFilled } from "react-icons/vsc";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
const HomePage = () => {
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [unisexData, setunisexData] = useState([]);
  const [boysData, setBoysData] = useState([]);

  const fetch = async (obj) => {
    try {
      let res = await getSliderProducts(obj);
      // console.log(res.data.Products);
      return res.data.Products;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch({ ideal_for: "Women", limit: 20 })
      .then((r) => {
        setWomenData(r);
      })
      .catch((e) => {
        console.log(e);
      });
    // console.log(wData);
  }, []);

  useEffect(() => {
    fetch({ ideal_for: "Men", limit: 20 })
      .then((r) => {
        setMenData(r);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    fetch({ ideal_for: "Unisex", limit: 20 })
      .then((r) => {
        setunisexData(r);
      })
      .catch((e) => {
        console.log(e);
      });

    // ==========> boys data fetch
    fetch({ brand: "IMARA", ideal_for: "Women", limit: 20 })
      .then((r) => {
        setBoysData(r);
      })
      .catch((e) => {
        console.log(e);
      });
    // console.log(wData);
  }, []);
  // console.log(womenData, menData);

  return (
    <>
      <Box>
        <Box overflow="hidden" position="relative">
          <ImageBanner
            src={
              "https://img.mytheresa.com/media/static/raw/cms/l/STORIES_2022/ETRO/2x/Etro-Exclusives_Opener_DSK_2x_20221018173923.jpg?imwidth=1180&imdensity=1"
            }
          />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            position="absolute"
            // justifyContent="center"
            // border="1px red solid"
            top={{ base: "50%", md: "50%", lg: "50%" }}
            right={{ base: "30%", md: "30%", lg: "30%" }}
            mt="0"
            mb="0"
            cursor="pointer"
            gap="0.5rem"
          >
            <Text
              fontFamily="Montserrat"
              fontSize={{ base: "0.4rem", md: "0.6rem", lg: "0.8rem" }}
              color="white"
            >
              _WARMEST WISHES
            </Text>
            <Text
              fontFamily="Montserrat"
              color="white"
              fontSize={{ base: "0.8rem", md: "2rem", lg: "3rem" }}
            >
              ETRO X MYTHERESA
            </Text>
            <Button
              bg="white"
              color="gray.900"
              variant="solid"
              size="sm"
              borderRadius="0"
              fontSize="0.5rem"
              w="3.2rem"
              h="1.1rem"
              mt="0.5rem"
              _hover={{ bg: "gray.600", color: "white" }}
              as="a"
              href="/products"
            >
              SHOP NOW
            </Button>
          </Box>
        </Box>
        <Box>
          {/* <ProductSlider
            query={{ ideal_for: "Women", limit: 20 }}
            title={"New Arrivals"}
          /> */}
          {womenData && (
            <ProductSlider data={womenData} title={"New Arrivals"} />
          )}
        </Box>
        <Box overflow="hidden" position="relative">
          <ImageBanner
            src={
              "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW51/BIG_EN_1/Big_Cruise_WW_desktop_1_x2_20221219160213.jpg?imwidth=1180&imdensity=1"
            }
          />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            position="absolute"
            // border="1px red solid"
            top={{ base: "75%", md: "75%", lg: "75%" }}
            right={{ base: "50%", md: "50%", lg: "50%" }}
            mt="0"
            mb="0"
            cursor="pointer"
            gap="0.5rem"
          >
            <Button
              bg="white"
              color="gray.900"
              variant="solid"
              size="sm"
              borderRadius="0"
              fontSize="0.5rem"
              w="3.2rem"
              h="1.1rem"
              mt="0.5rem"
              _hover={{ bg: "gray.900", color: "white" }}
              as="a"
              href="/products"
            >
              SHOP NOW
            </Button>
          </Box>
        </Box>
        <Box>
          {/* <ProductSlider
            query={{ ideal_for: "Men", limit: 20 }}
            title={"New Arrivals"}
          /> */}
          {menData && <ProductSlider data={menData} title={"New Arrivals"} />}
        </Box>

        <Box
          overflow="hidden"
          position="relative"
          w={["100%", "95%", "85%", "60%"]}
          margin="auto"
          // border="1px blue solid"
          mt="6rem"
        >
          <Box
            display="flex"
            // border="1px red solid"
            alignItems="center"
            background="linear-gradient(90deg, rgba(233,233,231,1) 50%, rgba(0,0,0,1) 50%)"
          >
            <Box w="50%">
              <ImageBanner
                src={
                  "https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW51/BIG3_EN/BIG2_DESKTOP_2X_20221216185528.jpg?imwidth=1180&imdensity=1"
                }
              />
            </Box>
            <Flex w="50%" bg="black"></Flex>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            position="absolute"
            // border="1px red solid"
            top={{ base: "40%", md: "40%", lg: "40%" }}
            left={{ base: "60%", md: "65%", lg: "63%" }}
            mt="0"
            mb="0"
            cursor="pointer"
            gap="0.5rem"
            color="white"
          >
            <Text
              fontFamily="Montserrat"
              fontSize={{ base: "0.8rem", md: "2rem", lg: "3rem" }}
            >
              SALE
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize={{ base: "0.4rem", md: "0.6rem", lg: "0.8rem" }}
              textAlign="right"
              fontWeight="500"
            >
              Further reductions – up to 60% off
            </Text>
            <Button
              bg="white"
              color="gray.800"
              variant="solid"
              size="sm"
              borderRadius="0"
              fontSize="0.5rem"
              w="3.2rem"
              h="1.1rem"
              mt="0.5rem"
              _hover={{ bg: "gray.900", color: "white" }}
              as="a"
              href="/products"
            >
              SHOP NOW
            </Button>
          </Box>
        </Box>
        <Box>
          {/* <ProductSlider
            query={{ ideal_for: "Women", limit: 20 }}
            title={"New Arrivals"}
          /> */}
          {unisexData && (
            <ProductSlider data={unisexData} title={"Home & Living"} />
          )}
        </Box>
        <Box w={["100%", "95%", "85%", "60%"]} margin="auto" mt="6rem">
          <Grid
            templateRows={{
              base: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={4}
            bg="white"
          >
            <GridItem rowSpan={4} colSpan={2} bg="white">
              <Text
                fontFamily="Montserrat"
                fontSize={{ base: "0.4rem", md: "0.6rem", lg: "0.8rem" }}
                textAlign="center"
              >
                THE WOW FACTOR
              </Text>
              <Text
                fontFamily="Montserrat"
                fontSize={{ base: "0.8rem", md: "1.5rem", lg: "1.7rem" }}
                my="1rem"
              >
                Serve statement looks in <br /> new-season dresses
              </Text>
              <Image
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW51/CW51_ActboxTall__2x_20221216121008.jpg?imwidth=600&imdensity=1"
                objectFit="stretch"
                margin="auto"
              />
            </GridItem>
            <GridItem rowSpan={2} colSpan={2} bg="white">
              <Text
                fontFamily="Montserrat"
                fontSize={{ base: "0.4rem", md: "0.6rem", lg: "0.8rem" }}
                textAlign="center"
              >
                MAJOR STYLE POINTS
              </Text>
              <Text
                fontFamily="Montserrat"
                fontSize={{ base: "0.8rem", md: "1.5rem", lg: "1.7rem" }}
                my="1rem"
              >
                Stand out when you <br /> step out
              </Text>
              <Image
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW51/CW51_ActboxSmall_3_2x_20221216120957.jpg?imwidth=600&imdensity=1"
                margin="auto"
                verticalAlign="bottom"
              />
            </GridItem>
            <GridItem rowSpan={2} colSpan={2} bg="white">
              <Text
                fontFamily="Montserrat"
                fontSize={{ base: "0.4rem", md: "0.6rem", lg: "0.8rem" }}
                textAlign="center"
              >
                YOUR MIDNIGHT FORMULA
              </Text>
              <Text
                fontFamily="Montserrat"
                fontSize={{ base: "0.8rem", md: "1.5rem", lg: "1.7rem" }}
                my="1rem"
              >
                The shining stars of <br /> party ensembles
              </Text>
              <Image
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW51/CW51_ActboxSmall_4_2x_20221216120959.jpg?imwidth=600&imdensity=1"
                margin="auto"
                verticalAlign="bottom"
              />
            </GridItem>
          </Grid>
        </Box>
        <Box>
          {boysData && (
            <ProductSlider data={boysData} title={"JUST IN IMARA"} />
          )}
        </Box>
        <MobileStatement />
      </Box>
    </>
  );
};

const ImageBanner = ({ src }) => {
  return (
    <Flex
      display={{ base: "flex", md: "flex", lg: "flex" }}
      margin="auto"
      justifyContent="space-between"
      w={["100%", "95%", "85%", "60%"]}
      my="2rem"
    >
      <Image src={src} margin="auto" />
    </Flex>
  );
};

const MobileStatement = () => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Box
        className="Statement"
        w={["95%", "95%", "85%", "60%"]}
        margin="auto"
        mt="4rem"
      >
        <Divider />
        <Text
          fontFamily="Montserrat"
          fontSize={{ base: "0.6rem", md: "0.8rem", lg: "0.9rem" }}
          textAlign="center"
          my="1rem"
          fontWeight={500}
        >
          MYTHERESA – MEN’S LUXURY AND DESIGNER FASHION
        </Text>
        <Text
          fontFamily="Montserrat"
          fontSize={{ base: "0.6rem", md: "0.8rem", lg: "0.9rem" }}
          textAlign="left"
          my="1rem"
        >
          Mytheresa has organized a collection of designer menswear items to
          keep every man looking his best. Each item in our menswear assortment
          has been curated and edited by leading experts in men’s fashion. By
          simply browsing our website, you will discover a luxury shopping
          experience and find all you need to help you achieve a distinct,
          well-refined look. We offer fast, worldwide shipping to 130 countries
          within 72 hours on everything. From the most beloved luxury fashion
          brands for men, to our highly sought after exclusive menswear designer
          collaborations – Mytheresa’s tailored edit is suited to stylish men
          worldwide.
          <br />
          Amongst our daily New Arrivals, you will uncover the freshest trends
          straight off the runway. With Mytheresa’s assortment of designer
          clothes you are guaranteed to look distinguished and build a
          sophisticated closet that serves your preferred lifestyle. Discover
          sharp suiting options by Zegna for work or opt for an elevated
          off-duty item from Polo Ralph Lauren. Put your best foot forward in
          men’s designer shoes from esteemed labels like Prada and Saint
          Laurent. Not forgetting the perfect finishing touch with classic
          accessories for men, such as a luxury watch, a classic Burberry scarf
          or a statement tie. Our buyers have put together the finest selection
          of iconic styles to help maintain your reputation as a dashing
          gentleman. A helping hand, our team have carefully selected the
          perfect designer bags to complete your everyday look.
        </Text>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap="0.5rem"
          display={{ base: "none", md: "flex", lg: "flex" }}
        >
          <Box>
            <Text
              fontFamily="Montserrat"
              fontSize={{ base: "0.55rem", md: "0.8rem", lg: "0.9rem" }}
              textAlign="left"
              my="0.5rem"
              fontWeight={500}
            >
              A LUXURY SHOPPING EXPERIENCE
            </Text>

            <Box
              fontSize={{ base: "0.55rem", md: "0.8rem", lg: "0.9rem" }}
              textAlign="left"
              fontFamily="Montserrat"
            >
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={VscCircleFilled} color="gray.500" />
                  The finest edit of more than 100 international luxury brands
                </ListItem>
                <ListItem>
                  <ListIcon as={VscCircleFilled} color="gray.500" />
                  400 new arrivals each week directly from the runway
                </ListItem>
                <ListItem>
                  <ListIcon as={VscCircleFilled} color="gray.500" />
                  Well-curated selection of items for a boutique-like shopping
                  experience
                </ListItem>

                <ListItem>
                  <ListIcon as={VscCircleFilled} color="gray.500" />
                  Exclusive designer collaborations and capsule collections that
                  you won’t find anywhere else
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box>
            <Text
              fontFamily="Montserrat"
              fontSize={{ base: "0.55rem", md: "0.8rem", lg: "0.9rem" }}
              textAlign="left"
              my="0.5rem"
              fontWeight={500}
            >
              SERVICE AND QUALITY
            </Text>

            <Box
              fontSize={{ base: "0.55rem", md: "0.8rem", lg: "0.9rem" }}
              textAlign="left"
              fontFamily="Montserrat"
            >
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={VscCircleFilled} color="gray.500" />
                  Authentic products guaranteed
                </ListItem>
                <ListItem>
                  <ListIcon as={VscCircleFilled} color="gray.500" />
                  Fast, reliable delivery to over 130 countries within 72 hours
                </ListItem>
                <ListItem>
                  <ListIcon as={VscCircleFilled} color="gray.500" />
                  Free returns and exchanges within 30 days
                </ListItem>

                <ListItem>
                  <ListIcon as={VscCircleFilled} color="gray.500" />
                  Exceptional customer service available 24 hours a day, 7 days
                  a week in 13 different languages
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
        <Text
          fontFamily="Montserrat"
          fontSize={{ base: "0.6rem", md: "0.8rem", lg: "0.9rem" }}
          textAlign="left"
          my="1rem"
          display={{ base: "none", md: "flex", lg: "flex" }}
        >
          Mytheresa has a long and rich fashion heritage that spans more than 30
          years. What began in the heart of Munich as a contained local boutique
          offering creations from international designers has now grown to
          become one of the most innovative luxury e-commerce companies in the
          world. Whether you’re paying a visit to our Mytheresa Store, browsing
          from your computer at home, or shopping on-the-go via our mobile app,
          our goal always remains the same: to provide the perfect space that
          caters to all your shopping desires.
          <br />
          <br />
          At Mytheresa we know that stylish men love fashion too and as a
          result, our professional Customer Service team is here to help with
          your order and make sure you are always dressed for success.
        </Text>
        <Collapse startingHeight={20} in={show}>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap="0.5rem"
            display={{ base: "flex", md: "none", lg: "none" }}
          >
            <Box>
              <Text
                fontFamily="Montserrat"
                fontSize={{ base: "0.55rem", md: "0.8rem", lg: "0.9rem" }}
                textAlign="left"
                my="0.5rem"
                fontWeight={500}
              >
                A LUXURY SHOPPING EXPERIENCE
              </Text>

              <Box
                fontSize={{ base: "0.55rem", md: "0.8rem", lg: "0.9rem" }}
                textAlign="left"
                fontFamily="Montserrat"
              >
                <List spacing={2}>
                  <ListItem>
                    <ListIcon as={VscCircleFilled} color="gray.500" />
                    The finest edit of more than 100 international luxury brands
                  </ListItem>
                  <ListItem>
                    <ListIcon as={VscCircleFilled} color="gray.500" />
                    400 new arrivals each week directly from the runway
                  </ListItem>
                  <ListItem>
                    <ListIcon as={VscCircleFilled} color="gray.500" />
                    Well-curated selection of items for a boutique-like shopping
                    experience
                  </ListItem>

                  <ListItem>
                    <ListIcon as={VscCircleFilled} color="gray.500" />
                    Exclusive designer collaborations and capsule collections
                    that you won’t find anywhere else
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box>
              <Text
                fontFamily="Montserrat"
                fontSize={{ base: "0.55rem", md: "0.8rem", lg: "0.9rem" }}
                textAlign="left"
                my="0.5rem"
                fontWeight={500}
              >
                SERVICE AND QUALITY
              </Text>

              <Box
                fontSize={{ base: "0.55rem", md: "0.8rem", lg: "0.9rem" }}
                textAlign="left"
                fontFamily="Montserrat"
              >
                <List spacing={2}>
                  <ListItem>
                    <ListIcon as={VscCircleFilled} color="gray.500" />
                    Authentic products guaranteed
                  </ListItem>
                  <ListItem>
                    <ListIcon as={VscCircleFilled} color="gray.500" />
                    Fast, reliable delivery to over 130 countries within 72
                    hours
                  </ListItem>
                  <ListItem>
                    <ListIcon as={VscCircleFilled} color="gray.500" />
                    Free returns and exchanges within 30 days
                  </ListItem>

                  <ListItem>
                    <ListIcon as={VscCircleFilled} color="gray.500" />
                    Exceptional customer service available 24 hours a day, 7
                    days a week in 13 different languages
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Grid>
          <Text
            fontFamily="Montserrat"
            fontSize={{ base: "0.6rem", md: "0.8rem", lg: "0.9rem" }}
            textAlign="left"
            my="1rem"
            display={{ base: "flex", md: "none", lg: "none" }}
          >
            Mytheresa has a long and rich fashion heritage that spans more than
            30 years. What began in the heart of Munich as a contained local
            boutique offering creations from international designers has now
            grown to become one of the most innovative luxury e-commerce
            companies in the world. Whether you’re paying a visit to our
            Mytheresa Store, browsing from your computer at home, or shopping
            on-the-go via our mobile app, our goal always remains the same: to
            provide the perfect space that caters to all your shopping desires.
            <br />
            <br />
            At Mytheresa we know that stylish men love fashion too and as a
            result, our professional Customer Service team is here to help with
            your order and make sure you are always dressed for success.
          </Text>
        </Collapse>
        <Divider />
      </Box>
      <Button
        onClick={handleToggle}
        display={{ base: "flex", md: "none", lg: "none" }}
        margin="auto"
        mt="1rem"
        variant="ghost"
      >
        {show ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
    </>
  );
};

export default HomePage;
