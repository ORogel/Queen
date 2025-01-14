import { makeStyles } from '@material-ui/core';

const borderColorCheckbox = '#aaaaaa';
const backgroundColorCheckbox = '#d6d6d6';
const backgroundColorCheckboxChecked = '#9fc5f8';
const modalityLabelColor = 'black';
const modalityLabelColorChecked = '#1d63a0';
const modalityCodeBackgroundColor = 'white';
const borderInput = '1px solid #767676';

export const useCustomLunaticStyles = makeStyles(theme => ({
  lunatic: {
    width: '80%',
    marginLeft: '100px',
    marginTop: '3em',
    height: '70vh',
    overflow: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
    },

    // to replace checkbox by svg
    '& .list-icon': { position: 'absolute', marginTop: '-0.2rem' },
    '& .checkbox-boolean-lunatic': {
      position: 'absolute',
      opacity: 0,
      marginBottom: 0,
      marginTop: '0.15rem',
      marginLeft: '0.2rem',
      height: '18px',
      width: '18px',
    },

    '& .datepicker-lunatic': {
      fontSize: '100%',
      marginLeft: '1em',
      borderRadius: '10px',
      border: `${borderInput}`,
      padding: '5px',
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 5px ${theme.palette.declarations.main}`,
      },
    },

    '& .unit': {
      position: 'relative',
      left: '0.5em',
      fontWeight: 'bold',
    },
    '& .declaration-lunatic': {
      color: theme.palette.declarations.main,
      marginTop: '1em',
      fontWeight: 'normal',
      fontSize: '92%',
      '&.declaration-help': {
        color: theme.palette.declarations.help,
      },
    },

    '& .label-top label': {
      fontWeight: 'bold',
    },
    '& .lunatic-dropdown-label': {
      fontWeight: 'bold',
    },
    '& .checkbox-boolean-modality label': {
      fontWeight: 'bold',
    },

    '& fieldset legend': {
      fontWeight: 'bold',
    },
    '& .field-container': {
      marginTop: '1em',
    },
    '& .textarea-lunatic': {
      padding: '0.5em',
      fontSize: '100%',
      marginLeft: '1em',
      borderRadius: '10px',
      border: `${borderInput}`,
      width: '55%',
      minWidth: '200px',
      height: '10em',
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 5px ${theme.palette.declarations.main}`,
      },
    },
    '& .input-lunatic': {
      paddingRight: '0.5em',
      paddingLeft: '0.5em',
      fontSize: '100%',
      marginLeft: '1em',
      borderRadius: '10px',
      border: `${borderInput}`,
      width: '55%',
      minWidth: '200px',
      height: '1.5em',
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 5px ${theme.palette.declarations.main}`,
      },
      "&[type='number']": {
        width: '7em',
        minWidth: '7em',
      },
    },

    '&.CheckboxOne, &.Radio': {
      '& .code-modality': {
        borderRadius: '15px',
      },
    },
    '& .split-fieldset fieldset.checkbox-group': {
      '& .checkbox-modality': {
        display: 'inline-block',
        width: '40%',
        margin: '4px',
        [theme.breakpoints.down('xs')]: {
          display: 'block',
          width: '70%',
          margin: '8px',
        },
      },
    },

    '& fieldset': {
      padding: 0,
      margin: 0,
      border: 'none',

      '& .field-container': {
        marginTop: 0,
      },

      '& .checkbox-modality, & .radio-modality': {
        display: 'block',
        borderRadius: '5px',
        border: `1px solid ${borderColorCheckbox}`,
        backgroundColor: `${backgroundColorCheckbox}`,
        margin: '8px',
        width: '60%',

        '& .list-icon-wrapper': {
          display: 'flex',
        },
        '& .list-icon': {
          display: 'none',
        },

        '&.content-checked': {
          backgroundColor: `${backgroundColorCheckboxChecked}`,
          borderColor: `${modalityLabelColorChecked}`,
        },
        '& label': {
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.5em 0.5em 0.5em 0.6em',
          position: 'relative',
          right: '1.3em',
          width: '92%',
          [theme.breakpoints.down('md')]: {
            width: '85%',
          },
        },
      },

      '& .code-modality': {
        alignSelf: 'baseline',
        position: 'relative',
        padding: '0.3em 0.5em 0.3em 0.5em',
        color: `${modalityLabelColor}`,
        fontWeight: 'bold',
        border: `1px solid ${borderColorCheckbox}`,
        backgroundColor: `${modalityCodeBackgroundColor}`,
        borderRadius: '5px',
        marginRight: '1em',
        height: 'min-content',
      },

      '& .checkbox-lunatic, .radio-lunatic': {
        opacity: 0,

        '&:checked + label::after': {
          marginLeft: 'auto',
          content: "'✓'",
        },
        '&:focus + label, ': {
          '& .code-modality': {
            borderColor: theme.palette.declarations.main,
            borderWidth: '2px',
          },
        },
        '&:checked + label, &:hover + label': {
          color: `${modalityLabelColorChecked}`,
          fontWeight: 'bold',
          '& .code-modality': {
            color: `${modalityCodeBackgroundColor}`,
            backgroundColor: theme.palette.declarations.main,
            borderColor: theme.palette.declarations.main,
          },
        },
      },
    },

    // Dropdown lunatic
    '& .lunatic-dropdown': {
      display: 'block',
      width: '100%',
      marginBottom: '1.5rem',
      '&:focus': {
        outline: 'none',
      },

      '&.label-left': {
        display: 'flex',
        flexDirection: 'row',
      },

      '&.label-right': {
        display: 'flex',
        flexDirection: 'row-reverse',
      },

      '&.label-top': {
        display: 'flex',
        flexDirection: 'column',
      },

      '&.label-bottom': {
        display: 'flex',
        flexDirection: 'column-reverse',
      },

      '& .lunatic-dropdown-label': {
        opacity: 1,
      },

      '& .lunatic-dropdown-container': {
        ul: {
          paddingInlineStart: '0px',
          fontSize: '1rem',
        },
        position: 'relative',
        height: '2em',
        width: '100%',
        zIndex: 1,

        '&.focused': {
          zIndex: 2,
        },
        '&:focus': {
          outline: 'none',
        },

        '& .lunatic-dropdown-content': {
          // background-color: var(--color-very-very-light);
          borderColor: 'white',
          left: 0,
          top: 0,
          width: '100%',
          height: 'auto',
          position: 'absolute',
          '&.visible': {
            // border-radius: 0 0 16px 16px;
            height: 'auto',
          },

          '&.disabled': {
            backgroundColor: 'var(--color-disabled)',
          },

          '& .lunatic-dropdown-input': {
            borderBottom: '1px solid var(--color-primary-dark)',
            padding: '6px 0 7px',
            input: {
              margin: '0px 25px 0px 0px',
              width: 'calc(100% - 37px)',
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              height: '2em',
              border: 'none',
              outline: 'none',
              textAlign: 'left',
              cursor: 'inherit',
            },
            '&:hover': {
              cursor: 'pointer',
              borderBottom: '2px solid var(--color-primary-main)',
            },
            '&.focused': {
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              boxShadow: '12px 0 rgba(0, 0, 0, 0.05)',
            },
          },

          '& .lunatic-icon': {
            cursor: 'pointer',
            '&:focus': {
              outline: 'none',
            },
          },

          '& .lunatic-transition': {
            // visibility: hidden;
            // overflow-y: hidden;
            opacity: 0,

            '&:focus': {
              outline: 'none',
            },

            '&.visible': {
              visibility: 'visible',
              opacity: 1,
              transition: 'opacity var(--dropdown-transition-time) ease-out',
            },

            '& .lunatic-dropdown-panel-container': {
              boxShadow:
                '0px 3px 3px -2px rgba(0, 0, 0, 0.9), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',

              '& .lunatic-dropdown-panel': {
                backgroundColor: 'white',
                margin: '0 0 12px 0',
                borderRadius: '4px',
                zIndex: 3,
                paddingTop: '3px',
                listStyle: 'none',
                '&:focus': {
                  outline: 'none',
                },
                maxHeight: '100px',
                overflowY: 'auto',
              },
            },

            /** options style */
            '& .lunatic-dropdown-option': {
              paddingLeft: '10px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: 'black',
              lineHeight: '2rem',
              display: 'block',
              '&.lunatic-dropdown-option-active': {
                color: 'var(--color-primary-dark)',
                backgroundColor: 'var(--color-dropdown-active)',
              },
              '&.lunatic-dropdown-option-selected': {
                backgroundColor: 'var(--color-dropdown-selected)',
              },

              '& .lunatic-prefix': {
                color: 'var(--color-prefix)',
                fontWeight: 'bold',
              },
            },
          },
        },
      },
    },

    '& .missing-buttons': {
      marginRight: '60px',
      position: 'absolute',
      bottom: '1.3em',
      [theme.breakpoints.down('md')]: {
        bottom: '4em',
      },

      '& button.button-lunatic': {
        display: 'inline-block',
        borderRadius: '4px',
        lineHeight: 1.75,
        border: 'none',
        color: 'white',
        verticalAlign: 'middle',
        backgroundColor: '#666666',
        fontSize: '0.875rem',
        padding: '6px 8px',
        marginLeft: '2em',
        marginBottom: '3px',

        '& .shortcut': {
          padding: '0.3em 0.5em 0.3em 0.5em',
          marginRight: '0.5em',
          color: '#666666',
          fontWeight: 'bold',
          border: '1px solid transparent',
          backgroundColor: 'white',
          borderRadius: '5px',
        },
        '& .checked': {
          display: 'inline-block',
          width: '1em',
          marginLeft: '1em',
          fontSize: '85%',
          fontWeight: 'bold',
        },
      },

      '& .missing-button-dk button.button-lunatic': {
        '&:hover,&:focus': {
          backgroundColor: '#f9cb9c',
          color: '#b45f06',
          '& .shortcut': {
            color: 'white',
            backgroundColor: '#b45f06',
          },
        },
      },

      '& .missing-button-rf button.button-lunatic': {
        '&:hover,&:focus': {
          backgroundColor: '#ea9999',
          color: '#990000',
          '& .shortcut': {
            color: 'white',
            backgroundColor: '#990000',
          },
        },
      },

      //  dont know active
      '& .missing-button-dk-active button.button-lunatic': {
        backgroundColor: '#f9cb9c',
        color: '#b45f06',
        '& .shortcut': {
          color: 'white',
          backgroundColor: '#b45f06',
        },
        '& .checked': {
          color: '#b45f06',
          '&::after': {
            content: "'✓'",
          },
        },
      },
      // refused active
      '& .missing-button-rf-active .button-lunatic': {
        backgroundColor: '#ea9999',
        color: '#990000',
        '& .shortcut': {
          color: 'white',
          backgroundColor: '#990000',
        },
        '& .checked': {
          color: '#990000',
          '&::after': {
            content: "'✓'",
          },
        },
      },
    },

    // '& .lunatic-suggester-option': {
    //   textOverflow: 'ellipsis',
    //   whiteSpace: 'nowrap',
    //   overflow: 'hidden',
    //   marginBottom: '0.1em',
    //   lineHeight: '2rem',
    //   display: 'block',
    //   '&. selected': {
    //     color: 'var(--color-primary-dark)',
    //     backgroundColor: 'var(--color-dropdown-selected)',
    //   },
    //   '& :hover': {
    //     backgroundColor: 'var(--color-primary-main)',
    //     color: 'white',
    //   },
    // },

    // default.scss

    '& .lunatic-suggester-message-error': {
      border: 'solid 1px darkred',
      color: 'darkred',
      backgroundColor: 'tomato',
      display: 'inline-block',
      borderRadius: `${borderInput}`,
      padding: '4px 8px',
      margin: '4px 4px',
    },

    '& .lunatic-suggester-default-style': {
      '&.lunatic-suggester-container': {
        marginBottom: '10px',

        '& .lunatic-suggester': {
          minHeight: '30px',
          minWidth: '260px',
          width: '100%',
          '& .lunatic-suggester-content': {
            '&.focused': {
              '& .lunatic-suggester-selection': {},
            },
            '& .lunatic-suggester-selection': {
              borderRadius: '5px',
              border: '2px solid var(--color-primary-dark)',
              backgroundColor: 'white',
              '&:hover': {
                borderColor: 'var(--color-primary-main)',
              },
              '& .lunatic-suggester-input': {
                height: '34',
                lineHeight: '34px',
                fontSize: '15px',
                paddingLeft: '4px',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                // TODO FIX PLACEHOLDER
                '&::placeholderList': {
                  color: 'gray',
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  fontSize: '15px',
                  lineHeight: '34px',
                  verticalAlign: 'middle',
                  fontWeight: 'normal',
                },
              },
              '& .lunatic-suggester-selected': {
                height: '34px',
                lineHeight: '34px',
                borderRadius: '5px',
                paddingLeft: '4px',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                '& .placeholderList': {
                  display: 'block',
                  color: 'gray',
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  fontSize: '15px',
                  lineHeight: '34px',
                  verticalAlign: 'middle',
                  fontWeight: 'normal',
                },
                '& .selection': {
                  display: 'block',
                  lineHeight: '34px',
                  fontSize: '15px',
                },
                '&.disabled': {
                  backgroundColor: 'var(--color-disabled)',
                },
              },
            },

            /* */
            '& .lunatic-suggester-panel': {
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              height: '0',
              opacity: '0',
              backgroundColor: 'white',
              transition:
                'opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              '&.expended': {
                border: 'solid 1px var(--color-primary-light)',
                opacity: '1',
                minHeight: '30px',
                height: 'max-content',
                boxShadow: '0 2px 2px grey',
                borderRadius: '4px',
              },
              '& .lunatic-suggester-option': {
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                marginBottom: '0.1em',
                lineHeight: '2rem',
                display: 'block',
                '&.selected': {
                  color: 'var(--color-primary-dark)',
                  backgroundColor: 'var(--color-dropdown-selected)',
                },
                '&:hover': {
                  backgroundColor: 'var(--color-primary-main)',
                  color: 'white',
                },
              },
            },
          },
        },
      },
    },

    // suggester.scss

    '& .lunatic-suggester-container': {
      position: 'relative',
      width: '100%',

      '& .lunatic-suggester-fab': {
        position: 'absolute',
        right: '4px',
        top: '8px',
        zIndex: '0',

        '&.focused ': {
          zIndex: '1',
        },

        '& .lunatic-icon': {
          '& svg': {
            fill: 'white',
            width: '16px',
            height: '16px',
          },
        },
      },
      '& .lunatic-suggester': {
        position: 'relative',
        zIndex: 0,

        '&:focus': {
          outline: 'none',
        },

        '&.focused': {
          zIndex: '1',
        },

        '& .lunatic-suggester-content': {
          position: 'absolute',
          width: ' 100%',

          '& .lunatic-suggester-selection': {
            position: 'relative',
            '& .lunatic-suggester-input': {
              border: 'none',
              margin: '0',
              padding: '0',
              backgroundColor: 'transparent',

              '&:focus': {
                outline: 'none',
              },

              width: '100%',
              /* */
            },

            '& .lunatic-suggester-selected': {
              position: 'absolute',
              top: '0',
              whiteSpace: 'nowrap',
              overflowX: 'hidden',
              width: '100%',
              height: '100%',
              display: 'none',
              '&.displayed': {
                display: 'block',
              },
            },
          },

          '& ul,li,div,span': {
            margin: '0',
            padding: '0',
            border: 'none',
            lineHeight: '1em',
            listStyle: 'none',
          },

          '& .lunatic-suggester-panel': {
            '&:focus': {
              outline: 'none',
            },
            '& .lunatic-suggester-option': {
              whiteSpace: 'nowrap',
              // @include preventSelect();
            },
          },
        },
      },
    },
  },
}));
