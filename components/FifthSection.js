'use client'
import { AccordionIcon, Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Text } from "@chakra-ui/react";

const faq = [
  { q: 'Não sou muito familiarizado com tecnologia. Como vou saber o que fazer?', a: 'Você terá acesso a uma área de membros repleta de vídeos explicativos, diretos ao ponto, que ensinarão tudo o que você precisa para automatizar suas vendas. Em caso de dúvidas, nosso suporte estará sempre disponível.' },
  { q: 'Como posso conectar meu WhatsApp ao Hiven?', a: 'A conexão com o Hiven é feita da mesma forma que o WhatsApp web. Basta escanear o QR Code da plataforma para conectar o seu WhatsApp.' },
  { q: 'Quantos números de WhatsApp posso conectar na plataforma?', a: 'Você pode vincular um número de WhatsApp por conta. Se precisar conectar mais de um número, entre em contato conosco pelo e-mail.' },
  { q: 'Meu computador precisa ficar ligado ou com o navegador aberto para o robô funcionar?', a: 'Não. Após escanear o QR Code do Hiven, seu WhatsApp estará conectado, e você não precisa manter nada aberto. Apenas certifique-se de manter seu celular conectado à internet.' },
  { q: 'O que é um robô?', a: 'Um robô é um fluxo de conversa pré-definido. Pense na conversa necessária para agendar um cliente pelo WhatsApp. Essa conversa pode ser automatizada, e esse fluxo é o que chamamos de robô.' },
  { q: 'Quantos robôs ou fluxos de conversas posso criar?', a: 'Você pode criar quantos robôs ou fluxos de conversa desejar, automatizando diversos tipos de interações no seu WhatsApp.' },
  { q: 'Posso atender quantas pessoas com meus robôs?', a: 'No plano STARTER, você pode conversar com até 1000 pessoas diferentes. No plano PRO, não há limites.' },
  { q: 'O que acontece após atender 1000 pessoas no mês com o plano Starter?', a: 'Há um custo de R$10 a cada 200 conversas extras no plano STARTER.' },
  { q: 'O que são palavras-chave?', a: 'Palavras ou frases que acionam seus robôs. Por exemplo, criar a palavra-chave "preço" para ativar o robô de cardápio sempre que um cliente enviar essa mensagem.' },
  { q: 'Quantas pessoas podem atender no mesmo número pelo bate-papo do Hiven?', a: 'Com o plano STARTER, até 5 membros da sua equipe podem atender. No plano PRO, você pode ter atendentes ilimitados.' },
  { q: 'Como terei acesso à biblioteca de robôs?', a: 'Após adquirir o acesso, os robôs estarão disponíveis na sua área de membros, juntamente com vídeos explicativos.' },
  { q: 'Se eu não gostar, como posso cancelar?', a: 'O cancelamento é simples. Você pode enviar um e-mail, entrar em contato pelo WhatsApp, telefone, ou da maneira que preferir. O cancelamento pode ser feito a qualquer momento.' },
  { q: 'Gostei do Hiven. Como faço para contratar?', a: 'Selecione o plano mais adequado para você acima e comece a colocar seu WhatsApp para atender e vender de forma automática!' },
]


export default function FifthSection() {
  return (
    <Flex w='full' justify='center' mb={20} scrollMarginTop={24} id="faq" >
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
          Perguntas & Respostas
        </Text>
        <Flex direction='column' gap={4} w='full'>
          <Accordion defaultIndex={[0]} allowMultiple>
            {faq.map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>{index + 1}. {item.q}</Box>
                    <AccordionIcon color='primary.500' />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color='gray.400'>{item.a}</AccordionPanel>
              </AccordionItem>
            ))
            }
          </Accordion>
        </Flex>
      </Flex>
    </Flex>
  )
}