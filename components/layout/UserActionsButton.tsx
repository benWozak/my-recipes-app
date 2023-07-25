import {
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from '@chakra-ui/react'
  import Link from 'next/link';
  import { useUser } from '@auth0/nextjs-auth0/client'
import { CiMenuKebab, CiLogin, CiLogout } from 'react-icons/ci'
import { HiMiniUserCircle } from 'react-icons/hi2'

export default function UserActionsButton() {
    const { user } = useUser()
    return (
        <Box position='absolute' top='2' right='2' zIndex='10'>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<CiMenuKebab />}
            variant="outline"
          />
          <MenuList>
            {user ? (
                <>
                  <MenuItem icon={<HiMiniUserCircle />} as={Link} href="/profile">
                    Profile
                  </MenuItem>
                  <MenuItem icon={<CiLogin />} as={Link} href="/api/auth/logout">
                    Logout
                  </MenuItem>
                </>
            ) : (
              <MenuItem icon={<CiLogout />} as={Link} href="/api/auth/login">
                Login
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </Box>
    )
}