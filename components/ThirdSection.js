
import { AspectRatio, Flex, Text } from "@chakra-ui/react";
import { demoVideoLink } from './../contants/contants'

export default function ThirdSection() {

  return (
    <Flex w='full' justify='center' mb={20} mt={40} scrollMarginTop={24} id="demo" bg='#131215'>
      <Flex
        bg='#131215'
        direction='column'
        justify='center'
        align='center'
        w={[300, 400, 600, 1000]}
        position='relative'
      >
        <Text
          mb={[2, 8, 20]}
          fontSize={[20, 20, 32, 40]}
          fontWeight='extrabold'
          fontFamily='orbitron'
          position='relative'
          color='gray.200'
          textAlign='center'
        >
          Veja uma Demonstração Rápida:
        </Text>
        <Flex direction={['column', 'column', 'column', 'row']} justify='space-between' w='full' >
          <Text mb={[2, 8, 20]} fontSize={[16, 16, 16, 20]}
            w={[300, 400, 600, 1000]} color='gray.200'>
            Descubra em apenas 10 minutos como criar um chatbot eficiente! Nosso vídeo de demonstração simplifica o processo, tornando a automação do chat fácil e rápida. Potencialize a interação com os usuários de forma inovadora.
          </Text>
        </Flex>
        <AspectRatio w={[300, 400, 600, 1000]} ratio={4 / 3} borderRadius='3xl' overflow='hidden' >
          <iframe
            width="960"
            height="540"
            src={demoVideoLink}
            title="Como utilizar o menu numérico  para listas e botões no WhatsApp!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
        </AspectRatio>
      </Flex>
    </Flex>
  )
}

