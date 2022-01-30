import ImageColors from "react-native-image-colors"


export const getImageColors = async (uri: string) => {
        const result = await ImageColors.getColors(uri, {})

        let primaryColor;
        let secondaryColor;

        switch (result.platform) {
            case 'android':
                // android result properties
                primaryColor = result.dominant
                secondaryColor = result.average
                break
            case 'web':
                // web result properties
                const lightVibrantColor = result.lightVibrant
                break
            case 'ios':
                // iOS result properties
                primaryColor = result.primary
                secondaryColor = result.secondary
                break
            default:
                throw new Error('Unexpected platform key')
        }

        return [ primaryColor, secondaryColor]
    }