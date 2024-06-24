'use client'
import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';

export default function SecondSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 2000;
      const shouldUnderline = scrollPosition > triggerPosition;
      setIsScrolled(shouldUnderline);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: isScrolled ? 1 : 0,
      width: isScrolled ? '100%' : '0%',
      x: isScrolled ? 0 : 100,
      transition: { duration: 1.5, ease: 'easeInOut' }, // Ajuste a duração e o easing conforme necessário
    });
  }, [isScrolled, controls]);


  return (
    <Flex w='full' justify='center' mb={20} scrollMarginTop={24} id="tools" bg='#131215'>
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
          Hiven oferece uma variedade de ferramentas, destacando-se como a plataforma mais intuitiva e fácil de usar disponível no mercado
          {
            isScrolled && (
              <motion.div animate={controls} >
                <Image position='absolute' top='50px' left='120px' src='/home/underline1.png' alt='' />
                <Image position='absolute' top='50px' left='120px' src='/home/underline2.png' alt='' />
              </motion.div>
            )
          }
        </Text>
        <Flex direction={['column', 'column', 'column', 'row']} justify='space-between' w='full' >
          <Text
            mb={[2, 8, 20]}
            fontSize={[16, 16, 16, 20]}
            w={[200, 400, 600, 600]}
            color='gray.200'
          >
            O Hiven fornece as ferramentas e estratégias essenciais para atrair leads e aumentar suas vendas de maneira automatizada!
          </Text>
          <Flex direction='column' gap={4}>
            <Flex align='center' gap={1}>
              <Image src='/home/checkbox.png' alt='' w='30px' />
              <Text mb='-4px' color='gray.200'>Desenvolva Conversas Inteligentes de Forma Rápida</Text>
            </Flex>
            <Flex align='center' gap={1}>
              <Image src='/home/checkbox.png' alt='' w='30px' />
              <Text mb='-4px' color='gray.200'>Otimize seu Atendimento com Diversos Operadores</Text>
            </Flex>
            <Flex align='center' gap={1}>
              <Image src='/home/checkbox.png' alt='' w='30px' />
              <Text mb='-4px' color='gray.200'>Mantenha os Departamentos Informados de Maneira Direcionada</Text>
            </Flex>
            <Flex align='center' gap={1}>
              <Image src='/home/checkbox.png' alt='' w='30px' />
              <Text mb='-4px'color='gray.200' >Crie Interações Relevantes através de Termos Específicos</Text>
            </Flex>
            <Flex align='center' gap={1}>
              <Image src='/home/checkbox.png' alt='' w='30px' />
              <Text mb='-4px'color='gray.200'>Tenha Controle Total sobre os Detalhes das Interações</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

