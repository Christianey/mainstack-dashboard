import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import SidebarContent from "./SidebarContent";

const MobileDrawer = ({ onClose, isOpen }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" cl>
      <DrawerOverlay />
      <DrawerContent>
        {/* <DrawerCloseButton /> */}
        <DrawerBody p={0}>
          <SidebarContent onClose={onClose} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
