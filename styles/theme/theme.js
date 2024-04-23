import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      color: mode('gray.200', 'gray.200')(props),
      bg: mode('#131215', '#131215')(props),
    },
  }),
};

const Button = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'md',
  },
  sizes: {
  },
  variants: {
    zap_outline: (props) => ({
      border: '2px solid',
      borderColor: 'primary.500',
      color: 'primary.300',
      _hover: {
        background: 'primary.500',
        color: mode('gray.100', '#131215')(props)
      }
    }),
    whatsapp: (props) => ({
      border: '2px solid',
      borderColor: ',#2bb741',
      color: '#2bb741',
      _hover: {
        background: '#2bb741',
        color: mode('gray.100', '#131215')(props),
        borderColor: '#131215',
      }
    }),
    telegram: (props) => ({
      border: '2px solid',
      borderColor: ',#33aed9',
      color: '#33aed9',
      _hover: {
        background: '#33aed9',
        color: mode('gray.100', '#131215')(props),
        borderColor: '#131215',
      }
    }),
    facebook_messeger: (props) => ({
      border: '2px solid',
      borderColor: '#208cff',
      color: '#208cff',
      _hover: {
        background: 'linear-gradient(45deg, rgba(42,136,253,1) 0%, rgba(158,73,235,0.8) 60%, rgba(244,100,131,1) 95%)',
        color: mode('gray.100', '#131215')(props),
        borderColor: '#131215',
      }
    }),
    instagram: (props) => ({
      border: '2px solid',
      borderColor: '#f54f41',
      color: '#f54f41',
      _hover: {
        background: 'linear-gradient(90deg, rgba(254,218,117,1) 0%, rgba(250,126,30,1) 32%, rgba(214,41,255,1) 50%, rgba(150,47,191,1) 70%, rgba(79,91,213,1) 100%)',
        color: mode('gray.100', '#131215')(props),
        borderColor: '#131215',
      }
    }),
    viber: (props) => ({
      border: '2px solid',
      borderColor: '#783aaa',
      color: '#783aaa',
      _hover: {
        background: '#783aaa',
        color: mode('gray.100', '#131215')(props),
        borderColor: '#131215',
      }
    }),
    zap_outline_dark: (props) => ({
      border: '2px solid',
      borderColor: 'primary.700',
      color: 'primary.700',
      _hover: {
        background: 'primary.700',
        color: mode('gray.100', '#131215')(props)
      }
    }),
    zap_outline_green: (props) => ({
      border: '2px solid',
      borderColor: mode('secundary.300', 'secundary.500')(props),
      color: mode('secundary.300', 'secundary.500')(props),
      _hover: {
        background: 'secundary.300',
        color: mode('gray.100', 'dark.400')(props)
      }
    }),
    zap_outline_green_modal: (props) => ({
      border: '2px solid',
      borderColor: 'secundary.300',
      color: mode('secundary.300', 'secundary.500')(props),
      _hover: {
        background: 'secundary.300',
        color: mode('gray.100', 'gray.700')(props)
      }
    }),
    zap_outline_blue_modal: (props) => ({
      border: '2px solid',
      borderColor: 'blue.300',
      color: mode('blue.300', 'blue.500')(props),
      _hover: {
        background: 'blue.300',
        color: mode('gray.100', 'gray.700')(props)
      }
    }),
    zap_outline_red_modal: (props) => ({
      border: '2px solid',
      borderColor: 'cancel.500',
      color: 'cancel.300',
      _hover: {
        background: 'cancel.500',
        color: mode('gray.100', 'gray.700')(props)
      }
    }),
    zap_outline_internal_node: (props) => ({
      border: '1px solid',
      borderColor: 'teal.200',
      color: 'teal.200',
      _hover: {
        background: 'tealWithAlpha.200',
        color: mode('gray.100', 'teal.200')(props)
      }
    }),
  },
  defaultProps: {},
}

const Checkbox = {
  variants: {
    zap_checkbox_xl: {
      control: {
        borderRadius: 4,
        boxSize: 6,
        borderWidth: 1,
      }
    },
    zap_checkbox_md: {
      control: {
        borderRadius: 4,
        boxSize: 4,
        borderWidth: 1,
      }
    },
  },
}

const Radio = {
  variants: {
    radio_green: {
      control: {
        borderRadius: 4,
        boxSize: 6,
        borderWidth: 1,
      }
    }
  }
}



const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    body: `'Exo', sans-serif`,
    heading: `Exo, sans-serif`,
    mono: `Exo, sans-serif`,
  },
  colors: {
    tealWithAlpha: {
      200: '#81E6D91A'
    },
    primary: {
      '300': '#8356E5',
      '500': '#623abc',
      '700': '#322751',
    },
    secundary: {
      '300': '#24d367',
      '500': '#1b9d4d'
    },
    cancel: {
      '300': '#FEB2B2',
      '500': '#FC8181',
    },
    dark: {
      '200': '#29292E',
      '400': '#131215'
    },
    greenBasic: '#51CD80',
    poc: {
      '300': '#80daa3',
      '500': '#68d391',
      '800': '#206f3e',
    },
    basico: {
      '300': '#80daa3',
      '500': '#68d391',
      '800': '#51CD80',
    },
    Resposta: {
      '300': '#f2a769',
      '500': '#ed8936',
      '800': '#ED8531',
    },
    Delay: {
      '300': '#73D3CE',
      '500': '#38b2ac',
      '800': '#36ABA5',
    },
    SmartDelay: {
      '300': '#73D3CE',
      '500': '#38b2ac',
      '800': '#36ABA5',
    },
    Desativar: {
      '300': '#b6c0ce',
      '500': '#a0aec0',
      '800': '#91A1B6',
    },
    Webhook: {
      '300': '#292929',
      '500': '#000000',
      '800': '#141414',
    },
    Acao: {
      '300': '#72b3e9',
      '500': '#4299e1',
      '800': '#2183d4',
    },
    Condicao: {
      '300': '#c0a7f1',
      '500': '#9f7aea',
      '800': '#8d60e6',
    },
    zap_green: {
      50: 'rgba(50, 168, 82, 0.1)',
      200: '#24d367',
    }
  },
  components: {
    Input: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        }
      }
    },
    Button,
    Checkbox,
  },
  styles,
})

export { theme }
