import {Listbox} from '@headlessui/react';
import React, {useState} from 'react';
import {CheckIcon, SelectorIcon} from "@heroicons/react/solid";

interface MySelectProps {
    options: { id: number, value: string }[],
    onChange?: (e: { id: number, value: string }) => void,
    classNameContainer?: string,
    classNameButton?: string,
    backgroundColor?: string,
    textColor?: string,
    backgroundOptionColor?: string,
    backgroundColorOptionsContainer?: string,
    placeholder?: string,
    defaultValues?: { id: number, value: string }
}

export const MySelect: React.FC<MySelectProps> = (props) => {

    const {
        options,
        onChange,
        classNameContainer,
        classNameButton,
        backgroundOptionColor,
        textColor,
        backgroundColor,
        backgroundColorOptionsContainer,
        placeholder,
        defaultValues
    } = props

    const [selectedOption, setSelectedOption] = useState<undefined | { id: number, value: string }>(defaultValues);
    const [optionHovered, setOptionHovered] = useState(-1);



    const onChangeHandler = (opt: { id: number, value: string }) => {
        setSelectedOption(opt);
        (onChange && opt) && onChange(opt)
    }

    return (
        <div className={`${classNameContainer}`}>
            <Listbox value={selectedOption} onChange={onChangeHandler}>
                <div className="relative">
                    <Listbox.Button
                        className={`relative w-full text-left bg-white cursor-default sm:text-sm ${classNameButton}`}
                        style={{backgroundColor: backgroundColor}}
                    >
                        <span
                            className="block truncate text-white text-[14px]">{(placeholder && !selectedOption) ? placeholder : selectedOption?.value}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon
                              className="w-5 h-5 text-white"
                              aria-hidden="true"
                          />
                        </span>
                    </Listbox.Button>
                    <Listbox.Options
                        className="absolute w-full mt-1 overflow-auto text-base rounded-md shadow-lg max-h-60 sm:text-sm z-10"
                        style={{backgroundColor: backgroundColorOptionsContainer}}
                    >

                        {options.map((option) => (
                            <Listbox.Option
                                key={option.id}
                                className={({active}) =>
                                    `cursor-default select-none relative py-2 pl-10 pr-4`
                                }
                                style={{backgroundColor: (optionHovered === option.id) ? backgroundOptionColor : '',}}
                                value={option}
                            >
                                {({selected, active}) => {
                                    if (active) {
                                        setOptionHovered(option.id)
                                    }
                                    return (
                                        <>
                                              <span
                                                  className={`block truncate ${
                                                      selected ? 'font-medium' : 'font-normal'
                                                  }`}
                                                  style={{color: (active || optionHovered === option.id) ? 'white' : textColor}}
                                              >
                                                {option.value}
                                            </span>
                                            {(selectedOption && selectedOption.id === option.id) ? (
                                                <span
                                                    className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <CheckIcon className="w-5 h-5"
                                                               color={(selectedOption.id === option.id && optionHovered === option.id) ? 'white' : textColor}
                                                               aria-hidden="true"/>
                                                </span>
                                            ) : null}
                                        </>
                                    )
                                }}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    )

}