'use client'
import { Box, Button, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { Check, PlusCircle } from '@phosphor-icons/react';
import { paymentLink, starter, pro, business, starterPrice, proPrice } from './../contants/contants'


export default function FourthSection() {

  return (
    <Flex w='full' justify='center' mb={20} scrollMarginTop={24} id="prices" >
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
        >
          Escolha o Plano Hiven Ideal para Você.
        </Text>
        <Flex w='full' gap={8} direction={['column', 'column', 'column', 'row']}>
          <Flex h={[740, 650, 650, 850]} overflow='hidden' direction='column' w={[320, 400, 600, 320]} border='1px solid' borderColor='gray.600' borderRadius='xl'>
            <Flex h={12} bg='green.700' align='center' justify='center' fontSize='2rem' fontWeight='medium'>STARTER</Flex>
            <Box h={[220, 280, 160, 280]} >
              <Flex w='full' justify='center' align='center' mt={4} gap={1}>
                <Text fontSize='2.5rem' color='gray.200' fontWeight='medium'>R${starterPrice}</Text>
                <Text fontSize='0.95rem' color='gray.500'>/mês</Text>
              </Flex>
              <Flex w='full' justify='center' >
                <Text m={2} textAlign='center' color='gray.200'>Oferecemos todas as funcionalidades essenciais para automatizar o atendimento e as vendas no WhatsApp para pequenas e médias empresas.<br /> Proporcione as respostas que seus clientes buscam.</Text>
              </Flex>
            </Box>
            <Flex direction='column' p={4} h='440px'>
              {starter.map((topic, index) => (
                <Flex key={index} gap={1}><Icon as={Check} w={5} h={5} color='green.500' weight="bold" /><Text>{topic}</Text></Flex>
              ))}
            </Flex>
            <Flex flex='1' align='' justify='center' p={4}>
              <Link href={paymentLink}><Button w='300px' alignSelf='center' bg="green.600" _hover={{ bg: 'green.700' }}>comece já</Button></Link>
            </Flex>
          </Flex>
          <Flex h={[740, 650, 650, 850]} overflow='hidden' direction='column' w={[320, 400, 600, 320]} border='1px solid' borderColor='gray.600' borderRadius='xl'>
            <Flex h={12} bg='teal.700' align='center' justify='center' fontSize='2rem' fontWeight='medium'>PRO</Flex>
            <Box h={[280, 280, 160, 280]} >
              <Flex w='full' justify='center' align='center' mt={4} gap={1}>
                <Text fontSize='2.5rem' color='gray.200' fontWeight='medium'>R${proPrice}</Text>
                <Text fontSize='0.95rem' color='gray.500'>/mês</Text>
              </Flex>
              <Flex w='full' justify='center'>
                <Text m={2} textAlign='center' color='gray.200'>A solução perfeita para quem lida diariamente com um grande número de clientes e busca uma ferramenta poderosa para impulsionar as vendas no WhatsApp.<br /> Desbloqueie o potencial ilimitado das suas vendas - porque o sucesso não conhece limites!</Text>
              </Flex>
            </Box>
            <Flex direction='column' p={4} h='440px' >
              <Flex gap={1}><Icon as={PlusCircle} w={5} h={5} color='blue.400' /><Text>Todas funcionalidade do starter</Text></Flex>
              {pro.map((topic, index) => (
                <Flex key={index} gap={1}><Icon as={Check} w={5} h={5} color='green.500' weight="bold" /><Text>{topic}</Text></Flex>
              ))}
            </Flex>
            <Flex flex='1' align='' justify='center' p={4}>
              <Link href={paymentLink}><Button w='300px' alignSelf='center' bg="teal.600" _hover={{ bg: 'teal.700' }}>comece já</Button></Link>
            </Flex>
          </Flex>
          <Flex h={[740, 650, 650, 850]} overflow='hidden' direction='column' w={[320, 400, 600, 320]} border='1px solid' borderColor='gray.600' borderRadius='xl'>
            <Flex h={12} bg='blue.700' align='center' justify='center' fontSize='2rem' fontWeight='medium'>BUSINESS</Flex>
            <Box h={[280, 280, 160, 280]} >
              <Flex w='full' justify='center' align='center' mt={4} gap={1}>
                <Text fontSize='2.5rem' color='gray.200' fontWeight='medium' textAlign='center'>Solicite um Orçamento</Text>
              </Flex>
              <Flex w='full' justify='center' >
                <Text m={2} textAlign='center' color='gray.200'>
                  A escolha perfeita para quem lida diariamente com um grande volume de atendimentos e está interessado em se tornar um parceiro da Hiven.</Text>
              </Flex>
            </Box>
            <Flex direction='column' p={4} h='440px' >
              <Flex gap={1}><Icon as={PlusCircle} w={5} h={5} color='blue.400' /><Text>Todas funcionalidade do STARTER</Text></Flex>
              <Flex gap={1}><Icon as={PlusCircle} w={5} h={5} color='blue.400' /><Text>Todas funcionalidade do PRO</Text></Flex>
              {business.map((topic, index) => (
                <Flex key={index} gap={1}><Icon as={Check} w={5} h={5} color='green.500' weight="bold" /><Text>{topic}</Text></Flex>
              ))}
            </Flex>
            <Flex flex='1' align='' justify='center' p={4}>
              <Link href={paymentLink}><Button w='300px' alignSelf='center' bg="blue.600" _hover={{ bg: 'blue.700' }}>comece já</Button></Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}