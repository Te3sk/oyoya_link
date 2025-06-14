'https://drive.google.com/file/d/1tPWFWY01q5brQJ31TUECjkDdXjga7VYP/view?usp=sharing'

const DRIVE_FILE_ID = '1tPWFWY01q5brQJ31TUECjkDdXjga7VYP';
const CORS_PROXY = 'https://corsproxy.io/';
const DRIVE_URL = 'https://drive.google.com/uc?id=';

/**
 * This function convert the standard url of a google drive image to a proxy url
 * @param {*} id 
 */
export const convertUrl = async (driveUrl) => {
    let id = null;
    
    const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    
    if (match && match[1]) {
        id = match[1];
    } else {
        throw new Error('Unable to extract id from url, invalid url');
    }

    const proxyUrl = `${CORS_PROXY}?${DRIVE_URL}${id}`;

    const response = await fetch(proxyUrl);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    
    return objectUrl;
}


const fetchData = async () => {
    try {
        const proxyUrl = `${CORS_PROXY}?${DRIVE_URL}`;
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        setImageUrl(objectUrl);
    } catch (error) {
        console.error('Errore nel caricamento dell\'immagine:', error);
    }
};