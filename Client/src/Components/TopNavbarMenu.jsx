import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styles from "./TopNavbarMenu.module.css";

const TopNavbarMenu = () => {
  const location = useLocation().pathname;
  const [selection, setSelection] = useState("");

  const { isLoading, isError, message, data } = useSelector((store) => {
    // console.log(store.auth.userLogin)
    return {
      isLoading: store.auth.userLogin.isLoading,
      isError: store.auth.userLogin.isError,
      message: store.auth.userLogin.message,
      data: store.auth.data,
    };
  }, shallowEqual);

  // console.log(isLoading, isError, message, data.user);

  // console.log(data);
  const Leftmenu = [
    {
      title: "WOMEN",
      href: "/products?ideal_for=Women",
    },
    {
      title: "MEN",
      href: "/products?ideal_for=Men",
    },
    {
      title: "UNISEX",
      href: "/products?ideal_for=Unisex",
    },
  ];

  const RightMenu = [
    {
      title: "Signup for Newsletter",
      href: "#",
    },
    {
      title:
        data.user && data.isAuthenticated == true
          ? `Hi, ${data.user.name}`
          : "My account",
      href: data.user && data.isAuthenticated == true ? `/account` : "/login",
    },
    {
      title: "About me",
      href: "/aboutme",
    },
    {
      title: "Lebanon | English",
      href: "#",
    },
  ];

  // const RightMenu = [
  //   "Signup for Newsletter",
  //   data.isAuthenticated == true ? `Hi, ${data.user.name}` : "My account",
  //   "My wishlist",
  //   "Lebanon | English",
  // ];

  const ClickSelection = (value) => {
    setSelection(value);
  };
  // console.log(selection);

  return (
    <>
      <Box
        // border="1px red solid"
        display={{ base: "none", md: "flex", lg: "flex" }}
        margin="auto"
        justifyContent="space-between"
        w={["98%", "95%", "85%", "60%"]}
        height="3.0rem"
      >
        <Box
          // border="1px pink solid"
          display="flex"
          justifyContent="space-between"
          marginRight="0.5rem"
          w={{ base: "50%", md: "35%", lg: "20%" }}
        >
          {Leftmenu.map((el) => (
            <Box
              // display="flex"
              key={el.title}
              margin="0 0.5rem"
              // height="2.5rem"
              alignItems="center"
              bg={selection == el ? "#F2F2F2" : ""}
              // border="1px blue solid"
              cursor="pointer"
              onClick={(e) => ClickSelection(e.target.innerText)}
              w={["98%", "95%", "70%"]}
              textAlign="center"
              justifyContent="center"
              display={location == "/" ? "flex" : "none"}
            >
              <Link to={el.href} textDecoration="none">
                <Text
                  padding="0.5rem"
                  fontSize={["0.4rem", "0.6rem", "0.75rem"]}
                  textAlign="center"
                >
                  {el.title}
                </Text>
              </Link>
            </Box>
          ))}
        </Box>

        {/* ==================> RIGHTSIDE */}
        <Box
          // border="1px green solid"
          display="flex"
          justifyContent="space-between"
          w={{ base: "50%", md: "45%", lg: "45%" }}
        >
          {RightMenu.map((el) => (
            <Box
              key={el.title}
              display="flex"
              // height="2.5rem"
              margin="0 0.1rem"
              alignItems="center"
              bg={selection == el ? "#F2F2F2" : ""}
              // border="1px blue solid"

              cursor="pointer"
              fontFamily="poppins"
              w={["98%", "95%", "95%", "70%"]}
              textAlign="center"
              justifyContent="center"
            >
              <Link to={el.href} textDecoration="none">
                <Text
                  padding="0.5rem"
                  fontSize="0.6rem"
                  _hover={{ textColor: "gray.900" }}
                  textAlign="center"
                  textColor="#757575"
                  fontWeight="bold"
                >
                  {el.title}
                </Text>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
      <Flex
        // display="flex"
        flex={{ base: 1 }}
        justifyContent="center"
        margin="auto"
        my="1.5rem"
        // height={{ md: "1.7rem", lg: "2.1rem" }}
        display={{ base: "none", md: "flex", lg: "flex" }}
      >
        <MidScreenLogo />
      </Flex>
    </>
  );
};

export default TopNavbarMenu;

const MidScreenLogo = () => {
  let head = "Sale – up to 60% off";

  return (
    <>
      <Flex direction="column">
        <Link to="/">
          <Image src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo-s-@2x.png?v=20221221T103958" />
        </Link>
        <Text
          className={styles.headline}
          fontFamily="Poppins"
          mt="1rem"
          color="red"
          fontSize="0.8rem"
        >
          {head}
        </Text>
      </Flex>
    </>
  );
};
