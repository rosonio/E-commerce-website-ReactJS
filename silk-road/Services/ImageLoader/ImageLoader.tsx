type CustomImageLoaderProps = {
    src: string,
};

const ImageLoader = ({src}: CustomImageLoaderProps) => {
    if(src.startsWith('https://')){
        return src;
    }

    return '/images/${src}';
};

export default ImageLoader;