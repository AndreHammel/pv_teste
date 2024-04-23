
import { Button, Flex, Icon, Image, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { QrCode, Robot, CubeFocus, RocketLaunch, ChalkboardTeacher } from '@phosphor-icons/react';
import { paymentLink } from './../contants/contants'

export default function FirstSection() {
  const [currentImage, setCurrentImage] = useState(3)
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 3) + 1)
    }, 2000)
    return () => clearInterval(intervalId)
  }, []);



  return (
    <>
      <Flex
        position='relative'
        bgImage="/home/lines_background.jpg"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        w='100%'
        h={['60vh', '50vh', '60vh', '80vh', '100vh']}
        justify='center'
        align={['start', 'start', 'start', 'center']}
      >
        <Flex
          mt={[10, 10, 10, 0]}
          m={10}
          w='100%'
          justify={['', '', 'center', 'center']}
          gap={32}
        >
          <Flex direction='column' w={[200, 300, 400, 600]} gap={4} >
            <Text color='gray.200' fontSize={[20, 20, 20, 40]} fontWeight='extrabold' fontFamily='orbitron'>Conquiste o engajamento do seu público com nosso chatbot inteligente e inovador</Text>
            <Text color='gray.200' fontSize={[16, 16, 16, 20]}>Otimize seu tempo e amplie sua eficiência com nosso revolucionário aplicativo de automatização de mensagens. Simplifique suas interações e alcance resultados incríveis com apenas alguns cliques!</Text>
            <Link href={paymentLink}>
              <Button
                size="lg"
                fontSize='1rem'
                textTransform='uppercase'
                fontWeight='900'
                background='primary.300'
                color='gray.200'
                _hover={{ background: 'primary.300' }}
              >
                comece já
              </Button>
            </Link>
          </Flex>
          {!isMobile && <Image w={['auto', '40%', '40%', '30%']} src={`/home/robot${currentImage}.png`} alt='robot' />}
        </Flex>
        {isMobile && <Flex w='65%' mt={10}><Image src='/home/mobile.png' alt='mão com celular' /></Flex>}
      </Flex>
      <Flex bg='#131215'
        direction='column'
        justify='center'
        align='center'
        w='full'
        //mt='10px'
        gap={10}
        position='relative'
      >
        <Text
          mb={[4, 10, 20]}
          fontSize={[20, 20, 32, 40]}
          fontWeight='extrabold'
          fontFamily='orbitron'
          textAlign='justify'
          w={[300, 400, 600, 1000]}
          color='gray.200'
        >
          Venha comigo e te mostro como funciona
        </Text>
        <Flex direction='row' gap={2} ml={[0, 0, -200, -300, -400]} >
          <Flex align='center' justify='center' w='80px' h='70px' border='1px solid' borderColor='gray.800' borderRadius='lg'><Icon as={QrCode} w={16} h={16} color="red.500" /></Flex>
          <Text w={[300, 400, 400, 500, 600]} color='gray.200'>Faça a integração do seu WhatsApp  com o  Zapbot de forma simples e rápida!<br /> Basta escanear o QR Code disponível na plataforma</Text>
        </Flex>
        <Flex direction='row' gap={2} ml={[0, 0, 300, 400, 500]} >
          <Flex align='center' justify='center' w='80px' h='70px' border='1px solid' borderColor='gray.800' borderRadius='lg'><Icon as={ChalkboardTeacher} w={16} h={16} color="pink.500" /></Flex>
          <Text w={[300, 400, 400, 500, 600]} color='gray.200'>Inclua toda equipe no Bate Papo ao vivo inteligente do Zapbot para atender e vender</Text>
        </Flex>
        <Flex direction='row' gap={2} ml={[0, 0, -200, -300, -400]} >
          <Flex align='center' justify='center' w='80px' h='70px' border='1px solid' borderColor='gray.800' borderRadius='lg'><Icon as={Robot} w={16} h={16} color="primary.500" /></Flex>
          <Text w={[300, 400, 400, 500, 600]} color='gray.200'>Otimize seu atendimento selecionando os robôs ideais para suas necessidades. Contamos com uma extensa biblioteca de robôs prontos para você escolher e utilizar de forma simples e eficiente</Text>
        </Flex>
        <Flex direction='row' gap={2} ml={[0, 0, 300, 400, 500]} >
          <Flex align='center' justify='center' w='80px' h='70px' border='1px solid' borderColor='gray.800' borderRadius='lg'><Icon as={CubeFocus} w={16} h={16} color="yellow.500" /></Flex>
          <Text w={[300, 400, 400, 500, 600]} color='gray.200'>Personalize a interação com seus clientes ao definir as palavras-chave que acionarão os robôs selecionados. As respostas automáticas serão ativadas de maneira precisa e alinhada às necessidades do seu público</Text>
        </Flex>
        <Flex direction='row' gap={2} ml={[0, 0, -200, -300, -400]} >
          <Flex align='center' justify='center' w='80px' h='70px' border='1px solid' borderColor='gray.800' borderRadius='lg'><Icon as={RocketLaunch} w={16} h={16} color="blue.500" /></Flex>
          <Text w={[300, 400, 400, 500, 600]} color='gray.200'>Desfrute de total comodidade enquanto nossos robôs automatizam o atendimento e impulsionam suas vendas, trabalhando incansavelmente para o sucesso do seu negócio, assim você se concentre em outros aspectos</Text>
        </Flex>
        <Image mt={[1, 10, 10, 20]} src='/home/screen_notebook.png' alt='tela computador' px={10} />
      </Flex>
    </>
  )
}
