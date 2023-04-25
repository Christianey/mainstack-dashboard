import {
  List,
  ListItem,
  ListIcon,
  IconButton,
  Image,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  MdOutlineDashboard,
  MdOutlinePeopleAlt,
  MdOutlineAddAPhoto,
  MdDeleteOutline,
  MdOutlineSubscriptions,
  MdOutlineFilePresent,
  MdOutlineAlarm,
  MdChevronLeft,
} from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { SlHourglass } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { text: "Dashboard", icon: MdOutlineDashboard },
  { text: "Item 1", icon: HiOutlinePencil },
  { text: "Item 2", icon: MdOutlinePeopleAlt },
  { text: "Item 3", icon: SlHourglass },
  { text: "OTHERS 1", icon: null },
  {
    text: "Item 4",
    icon: MdOutlineAddAPhoto,
  },
  { text: "Item 5", icon: MdDeleteOutline },
  { text: "OTHERS 2", icon: null },
  { text: "Item 6", icon: MdOutlineSubscriptions },
  { text: "Item 7", icon: MdOutlineFilePresent },
  { text: "Item 8", icon: MdOutlineAlarm },
];

const SidebarContent = ({ onClose }) => {
  const [isMobile] = useMediaQuery("max-width: 30em");

  const linkPath = (text) => {
    if(text.replaceAll(" ", "").toLowerCase() === "dashboard") return "/"
    return `/${text.replaceAll(" ", "").toLowerCase()}`
  }
  return (
    <>
      <Flex grow={1} direction="column" minH={"100dvh"} width="100%" py={2}>
        <Flex
          justify={"space-between"}
          alignItems="center"
          w="100%"
          px={[10, 8]}
        >
          <Link to="/">
            <Image
              boxSize={"40px"}
              display="block"
              src="/mainstack-logo.png"
              alt="Mainstack logo"
            />
          </Link>
          <IconButton
            display={["block", "block", "none", "none"]}
            size={"md"}
            icon={<MdChevronLeft size={"30px"} color="rgb(255, 84, 3)" />}
            onClick={onClose}
            p={2}
            bg={"transparent"}
            _focusWithin={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
          />
        </Flex>

        <List spacing={1} mt={8}>
          {navItems.map(({ text, icon }) => {
            if (!icon)
              return (
                <Text key={text} mt={"7 !important"} px={[10, 8]}>
                  {text}
                </Text>
              );

            return (
              <ListItem
                as={NavLink}
                key={text}
                display="flex"
                alignItems="center"
                to={linkPath(text)}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#FF5403",
                        borderLeft: "2px solid #FF5403",
                      }
                    : null
                }
                px={[10, 8]}
                py={1}
              >
                <ListIcon as={icon} fontSize={"20px"} />
                <Text fontSize={"16px"}>{text}</Text>
                {/* </NavLink> */}
              </ListItem>
            );
          })}
        </List>

        <Flex
          alignItems="center"
          gap={4}
          mt="auto"
          mb={isMobile ? "2rem" : 0}
          px={[10, 8]}
          py={8}
        >
          <Image
            alt="profile"
            src={"/unsplash_F16KPYxfm6s.png"}
            boxSize="40px"
            borderRadius={"full"}
          />
          <Text fontWeight={"bold"} fontSize="15px">
            Blessing Daniels
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default SidebarContent;
