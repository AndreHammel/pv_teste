'use client'
import { Box, Button, Container, Flex, Icon, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { PersonSimpleRun, List } from "@phosphor-icons/react";
import { useMediaQuery } from "@chakra-ui/react";
import { enterLink } from './../contants/contants'

export default function Header() {
  const [isMobile] = useMediaQuery("(max-width: 768px)")
  const [isLargerThan1040] = useMediaQuery('(min-width: 1040px)')

  return (
    <Box
      w='100%'
      borderBottomWidth={2}
      borderBottomColor='dark.200'
      position='sticky'
      top={0}
      zIndex={100}
      bg='#131215'
    >
      <Container maxW='1440px' px={10} >
        <Flex w='100%' h={20} align='center' justify='space-between'>
          {
            isMobile
              ? (<Image src='/home/head_purple.png' alt='main logo' w='50px' />)
              : (<Image src='/home/FullLogo_darkmode.png' alt='main logo' w='200px' />)
          }
          {
            isLargerThan1040
              ? (
                <Flex
                  gap={12}
                >
                  <Link color='gray.200' href="#tools" textTransform='uppercase' fontWeight='bold' _hover={{ color: 'primary.500' }}>ferramentas</Link>
                  <Link color='gray.200' href="#demo" textTransform='uppercase' fontWeight='bold' _hover={{ color: 'primary.500' }}>demo</Link>
                  <Link color='gray.200' href="#prices" textTransform='uppercase' fontWeight='bold' _hover={{ color: 'primary.500' }}>planos</Link>
                  <Link color='gray.200' href="#faq" textTransform='uppercase' fontWeight='bold' _hover={{ color: 'primary.500' }}>faq</Link>
                  <Link color='gray.200' href="#about" textTransform='uppercase' fontWeight='bold' _hover={{ color: 'primary.500' }}>quem somos</Link>
                </Flex>
              )
              : (<Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<List />}
                  variant='outline'
                />
                <MenuList w='100vw'
                  borderRadius='none' bg='#131215' border='none'
                >
                  <MenuItem bg='#131215' textAlign='center' >
                    Quem somos
                  </MenuItem>
                  <MenuItem bg='#131215'>
                    Ferramentas
                  </MenuItem>
                  <MenuItem bg='#131215'>
                    Planos
                  </MenuItem>
                  <MenuItem bg='#131215'>
                    FAQ
                  </MenuItem>
                </MenuList>
              </Menu>)
          }
          <Link href={enterLink}>
            <Button
              size="lg"
              textTransform='uppercase'
              fontSize='1rem'
              border='2px'
              borderColor='primary.300'
              background='transparent'
              borderRadius='xl'
              color='gray.200'
              _hover={{ background: 'primary.300' }}
            >
              <Icon
                as={PersonSimpleRun}
                w={6} h={6}
                color='gray.200'
                mr={2}
                weight="bold"
              />
              entrar
            </Button>
          </Link>

        </Flex>
      </Container>

    </Box>
  )
}
