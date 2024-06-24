import { Box, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import { FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react";
import {
  facebookLink,
  instagranLink,
  youtubeLink,
  linkedinLink,
} from './../contants/contants'

export default function Footer() {
  return (
    <Flex bg='#161620' w='full' justify='center' >
      <Flex
        direction={['column', 'column', 'column', 'row']}
        align='center'
        w={[300, 400, 600, 1000]}
        h={[80, 56, 56, 48]}
        pt={8}
        justify='center'
      >
        <Flex gap={8} w='full' >
          <Box>
            <Image src='/home/FullLogo_darkmode.png' alt='main logo' w='130px' />
          </Box>
          <Flex direction='column' w='300px'>
            <Text>CNPJ: 52.651.040/0001-05</Text>
            <Text>Contato: suporte@hiven.com.br</Text>
            <Text>Hiven © 2023</Text>
          </Flex>
        </Flex>
        <Flex direction='column'>
          <Text>Fale conosco</Text>
          <Text>Contato: suporte@hiven.com.br</Text>
          <Flex mt={4} gap={10}>
            <Link href={facebookLink} isExternal><Icon as={FacebookLogo} w={10} h={10} _hover={{ color: '#0967ff' }} /></Link>
            <Link href={instagranLink} isExternal><Icon as={InstagramLogo} w={10} h={10} _hover={{ color: '#f32594' }} /></Link>
            <Link href={youtubeLink} isExternal> <Icon as={YoutubeLogo} w={10} h={10} _hover={{ color: '#ff0000' }} /></Link>
            <Link href={linkedinLink} isExternal><Icon as={LinkedinLogo} w={10} h={10} _hover={{ color: '#0a67c3' }} /></Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}