import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  RadioGroup,
  Radio,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Text,
} from "@chakra-ui/react";

import { useLocation, useSearchParams } from "react-router-dom";
import { filterData } from "./FilterData";
import { HiFilter } from "react-icons/hi";
import { AiOutlineSortAscending } from "react-icons/ai";

const FilterSection = ({ currentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  //   const search = useLocation().search;
  const search = new URLSearchParams(useLocation().search);
  const paramsArr = Object.values(Object.fromEntries(search.entries()));

  const [brand, setBrand] = useState(searchParams.get("brand") || "");
  const [gender, setGender] = useState(searchParams.get("ideal_for") || "");
  const [color, setColor] = useState(searchParams.get("dominant_color") || "");
  const [category, setCategory] = useState(searchParams.getAll("genre") || []);
  const [sort, setSort] = useState(searchParams.get("sortBy") || "asc");

  const [orderBy, setOrderBy] = useState(
    searchParams.get("orderBy") || "variant_price"
  );

  //   console.log(filterData);
  // console.log(paramsArr);

  const handleFilter = (e) => {
    const { value, name } = e.target;
    if (name == "Brands") {
      setBrand(value);
    } else if (name == "Category") {
      setGender(value);
    } else if (name == "Colour") {
      setColor(value);
    }

    // console.log(value);
    // let newCategory = [...brand];
    // if (newCategory.includes(value)) {
    //   newCategory.splice(newCategory.indexOf(value), 1);
    // } else {
    //   newCategory.push(value);
    // }
    // setBrand(newCategory);
  };

  const handleSortBy = (value) => {
    // console.log(value);
    if (sort == "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  };
  // console.log(sort);

  useEffect(() => {
    const params = {};
    brand && (params.brand = brand);
    gender && (params.ideal_for = gender);
    color && (params.dominant_color = color);
    sort && (params.sort = sort);
    orderBy && (params.orderBy = orderBy);
    currentPage && (params.page = currentPage);

    setSearchParams(params);
  }, [brand, gender, color, setSearchParams, sort, orderBy, currentPage]);

  const handleReset = () => {
    searchParams.delete("ideal_for");
    searchParams.delete("brand");
    searchParams.delete("dominant_color");
    setSearchParams(searchParams);
    window.location.reload();
  };

  return (
    <>
      <Stack
        w="100%"
        display={{ base: "none", md: "flex", lg: "flex" }}
        fontFamily="Montserrat"
      >
        <Button
          onClick={() => handleReset()}
          borderRadius="0"
          // border="1px red solid"
          fontSize="0.8rem"
        >
          RESET
        </Button>

        {filterData.map((el) => (
          <AccordionFilter
            label={el.label}
            child={el.children}
            handleFilter={handleFilter}
            key={el.label}
            brand={brand}
            gender={gender}
            color={color}
            paramsArr={paramsArr}
          />
        ))}

        {/* {filterData.map((el) => {
        // console.log(el.children);
        <AccordionFilter label={el.label} child={el.children} />;
      })} */}
        <Box mt="1rem">
          <SortBy handleSort={handleSortBy} />
        </Box>
      </Stack>

      <Box
        display={{ base: "flex", md: "none", lg: "none" }}
        justifyContent="space-between"
        // border="1px red solid"
      >
        <Box>
          <MobileFilterSection
            handleFilter={handleFilter}
            brand={brand}
            gender={gender}
            color={color}
            paramsArr={paramsArr}
          />
        </Box>
        <Box ml="20%">
          <SortBy handleSort={handleSortBy} />
        </Box>
      </Box>
    </>
  );
};

export default FilterSection;

// const AccordionFilter = () => {
//   return (
//     <Accordion defaultIndex={[0]} allowMultiple border="1px blue solid">
//       <AccordionItem>
//         <h2>
//           <AccordionButton>
//             <Box as="span" flex="1" textAlign="left">
//               Category
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel pb={4}>
//           <RadioGroup size="sm" >
//             <Stack direction="column">
//               <Radio value="1">First</Radio>
//               <Radio value="2">Second</Radio>
//               <Radio value="3">Third</Radio>
//             </Stack>
//           </RadioGroup>
//         </AccordionPanel>
//       </AccordionItem>

//       <AccordionItem>
//         <h2>
//           <AccordionButton>
//             <Box as="span" flex="1" textAlign="left">
//               Section 2 title
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//         </h2>
//         <AccordionPanel pb={4}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

const AccordionFilter = ({
  label,
  child,
  handleFilter,
  brand,
  gender,
  color,
  paramsArr,
}) => {
  // console.log(paramsArr);
  return (
    <Accordion defaultIndex={[0]} allowMultiple 
    // border="1px blue solid"
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontSize="0.8rem">
              {label}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} h="10rem" overflow="auto">
          <RadioGroup size="sm">
            <Stack direction="column">
              {child.map((el) => (
                <Radio
                  value={el.value}
                  name={label}
                  onChange={handleFilter}
                  key={el.title}
                  defaultChecked={paramsArr.includes(el.value)}
                >
                  <Text fontSize="0.8rem">{el.title}</Text>
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const MobileFilterSection = ({
  handleFilter,
  brand,
  gender,
  color,
  paramsArr,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<HiFilter />}
        size="sm"
        colorScheme="gray"
        onClick={onOpen}
        borderRadius="0"
      >
        Filter
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{` Filter`}</DrawerHeader>
          <DrawerBody>
            {filterData.map((el) => (
              <AccordionFilter
                label={el.label}
                child={el.children}
                handleFilter={handleFilter}
                key={el.label}
                brand={brand}
                gender={gender}
                color={color}
                paramsArr={paramsArr}
              />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const SortBy = ({ handleSort }) => {
  return (
    <Menu closeOnSelect={false} matchWidth={true}>
      <MenuButton
        as={Button}
        colorScheme="gray"
        size="sm"
        borderRadius="0"
        variant="outline"
        leftIcon={<AiOutlineSortAscending />}
        w="full"
        border="1px gray solid"
        fontSize="0.8rem"
      >
        Sort By
      </MenuButton>
      <MenuList fontSize="0.8rem">
        <MenuOptionGroup
          defaultValue="asc"
          title="Order"
          type="radio"
          onChange={(e) => handleSort(e)}
        >
          <MenuItemOption value="asc">Price: Low to High</MenuItemOption>
          <MenuItemOption value="desc">Price: High to Low</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
