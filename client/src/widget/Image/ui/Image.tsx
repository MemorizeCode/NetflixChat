import { memo, Suspense } from "react";

interface ImageProps {
    src?: string;
    alt?: string;
    bg: boolean;
    classNames?: string
}

const Image = memo((props: ImageProps) => {
    const { src, alt, bg,classNames } = props
    return (
        bg ?
            <div
                className={`${classNames} absolute inset-0 bg-cover bg-center bg-no-repeat z-0`}
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundBlendMode: 'multiply',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
            </div>
            :
            <img src={src} alt={alt} />
    )
})

export default Image;