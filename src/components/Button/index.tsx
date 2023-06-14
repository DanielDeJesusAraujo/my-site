import { Button, ThemeProvider, defaultTheme, mergeTheme } from 'evergreen-ui'

function CustomButton(
  {children = 'Button', className = '', style = {}}: {
    children: string,
    className?: string,
    style?: {[key: string]: string},
  }) {
  const theme = mergeTheme(defaultTheme, {
    components: {
      Button: {
        appearances: {
          superdanger: {
            color: 'white',
            paddingX: 12,
            paddingY: 8,
            borderRadius: 5,
            backgroundColor: '#9b51e0',
            selectors: {
              _hover: {
                backgroundColor: '#8030cc',
              },
              _active: {
                backgroundColor: '#5c2391',
              },
              _focus: {
                boxShadow: '0 0 0 2px #8030cc',
              },
            }
          },
        },
      },
    },
  })

  return (
    <ThemeProvider value={theme}>
      <Button style={style} className={className} appearance="superdanger">{children}</Button>
    </ThemeProvider>
  )
}

export default CustomButton