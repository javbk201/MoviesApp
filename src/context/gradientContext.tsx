import React, { createContext, useState } from 'react';

interface ImageColor {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColor,
    prevColors: ImageColor,
    setMainColor: (colors: ImageColor) => void,
    setPrevMainColor:(colors: ImageColor) => void

}

export const GradientContext = createContext({} as ContextProps)

export const GradrietProvider = ({childen}: any) => {

    const [colors, setColors] = useState<ImageColor>({
        primary: 'transparent',
        secondary: 'trasparent'
    });

    const [prevColors, setPrevColors] = useState<ImageColor>({
        primary: 'transparent',
        secondary: 'trasparent'
    });

    const setMainColor = (colors: ImageColor) =>{
        setColors( colors )
    }

    const setPrevMainColor = (colors: ImageColor) =>{
        setColors( colors )
    }

    return (
        <GradrietProvider value={{
            colors,
            prevColors,
            setMainColor,
            setPrevMainColor
        }}>
            {childen}
        </GradrietProvider>
    )
}