'use client'
import { AccordionIcon, Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Text } from "@chakra-ui/react";

export default function SixthSection() {
  return (
    <Flex w='full' justify='center' mb={20} scrollMarginTop={24} id="about" >
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
          Quem somos
        </Text>
        <Flex direction='column' gap={4} w='full'>
          <Text color='gray.200'> Transformando Negócios com Paixão e Inovação! 🚀</Text>
          <Text color='gray.400'> Seja bem-vindo à Hiven, onde a paixão pelo marketing digital encontra a inovação brasileira. Somos uma equipe 100% brasileira, unida por uma missão: impulsionar seu negócio de forma fácil e intuitiva.</Text>
          <Text color='gray.200'> Conectando Experiência e Criatividade 🤝:</Text>
          <Text color='gray.400'> Nossa equipe é um mix de mentes criativas, cada uma trazendo vasta experiência no marketing digital. Estamos prontos para levar a narrativa do seu negócio a novos patamares com estratégias inovadoras.</Text>
          <Text color='gray.200'> Automatização com Alma 🤖:</Text>
          <Text color='gray.400'> Aqui, a tecnologia é sua aliada, não uma barreira. Nosso foco em chat automatizado simplifica conexões autênticas, mantendo o toque pessoal e humano. Acreditamos na automatização com alma.</Text>
          <Text color='gray.200'> 100% Brasileiros 🇧🇷, 100% Apaixonados 💚:</Text>
          <Text color='gray.400'> Orgulhosamente brasileiros, entendemos as nuances do mercado local. Estamos em sintonia com o cenário brasileiro, prontos para ser a energia vibrante que destaca seu negócio online.</Text>
          <Text color='gray.200'> Junte-se a Nós na Jornada Digital 🌐:</Text>
          <Text color='gray.400'> Se você busca transformar sua presença online, a equipe Hiven está pronta para recebê-lo. Vamos construir juntos uma história de sucesso digital, onde resultados falam mais alto que palavras.</Text>
          <Text color='gray.200'> Vamos Transformar Ideias em Resultados! 🌟</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}