import { Session } from '../client';
/**
 * Align enum
 */
export declare enum EAlignOptions {
    left = "left",
    right = "right",
    center = "center",
    bottom = "bottom",
    top = "top"
}
/**
 * Align enum with faces option
 */
export declare enum EAlignFacesOptions {
    left = "left",
    right = "right",
    center = "center",
    bottom = "bottom",
    top = "top",
    faces = "faces"
}
/**
 * Fit enum
 */
export declare enum EFitOptions {
    clip = "clip",
    crop = "crop",
    scale = "scale",
    max = "max"
}
/**
 * Blur enum
 */
export declare enum EBlurMode {
    linear = "linear",
    gaussian = "gaussian"
}
/**
 * Shapes enum
 */
export declare enum EShapeType {
    oval = "oval",
    rect = "rect"
}
/**
 * Noise type enum
 */
export declare enum ENoiseType {
    none = "none",
    low = "low",
    medium = "medium",
    high = "high"
}
/**
 * Style type enum
 */
export declare enum EStyleType {
    artwork = "artwork",
    photo = "photo"
}
/**
 * Color space enum
 */
export declare enum EColorspaceType {
    RGB = "RGB",
    CMYK = "CMYK",
    Input = "Input"
}
/**
 * Crop faces options enum
 */
export declare enum ECropfacesType {
    thumb = "thumb",
    crop = "crop",
    fill = "fill"
}
/**
 * Convert to format
 */
export declare enum EVideoTypes {
    h264 = "h264",
    h264_hi = "h264.hi",
    webm = "webm",
    'webm-hi' = "webm.hi",
    ogg = "ogg",
    'ogg-hi' = "ogg.hi",
    'hls-variant' = "hls.variant",
    mp3 = "mp3",
    oga = "oga",
    m4a = "m4a",
    aac = "aac",
    hls = "hls.variant.audio"
}
/**
 * Video storage location
 */
export declare enum EVideoLocations {
    s3 = "s3",
    azure = "azure",
    gcs = "gcs",
    rackspace = "rackspace",
    dropbox = "dropbox"
}
export declare enum EVideoAccess {
    private = "private",
    public = "public"
}
export declare enum EVideoAccessMode {
    preserve = "preserve",
    constrain = "constrain",
    letterbox = "letterbox",
    pad = "pad",
    crop = "crop"
}
/**
 * @see https://www.filestack.com/docs/image-transformations
 */
export interface TransformOptions {
    flip?: boolean;
    compress?: boolean;
    flop?: boolean;
    enchance?: boolean;
    redeye?: boolean;
    monochrome?: boolean;
    negative?: boolean;
    tags?: boolean;
    sfw?: boolean;
    resize?: {
        width?: number;
        height?: number;
        fit?: boolean;
        align?: EAlignFacesOptions;
    };
    crop?: {
        dim: [number, number, number, number];
    };
    rotate?: {
        deg: number | string;
        color?: string;
        background?: string;
    };
    detect_faces?: {
        minsize?: number;
        maxsize?: number;
        color?: string;
        export?: boolean;
    } | true;
    crop_faces?: {
        mode?: ECropfacesType;
        width?: number;
        height?: number;
        faces?: number | string;
        buffer?: number;
    };
    pixelate_faces?: {
        faces?: number | string;
        minsize?: number;
        maxsize?: number;
        buffer?: number;
        amount?: number;
        blur?: number;
        type?: EShapeType;
    };
    blur_faces?: {
        faces?: number | string;
        minsize?: number;
        maxsize?: number;
        buffer?: number;
        amount?: number;
        blur?: number;
        type?: EShapeType;
    };
    rounded_corners?: {
        radius?: number;
        blur?: number;
        background?: string;
    } | true;
    vignette?: {
        amount?: number;
        blurmode?: EBlurMode;
        background?: string;
    };
    polaroid?: {
        color?: string;
        rotate?: number;
        background?: string;
    } | true;
    torn_edges?: {
        spread?: [number, number];
        background?: string;
    } | true;
    shadow?: {
        blur?: number;
        opacity?: number;
        vector?: [number, number];
        color?: string;
        background?: string;
    } | true;
    circle?: {
        background?: string;
    } | true;
    border?: {
        width?: number;
        color?: string;
        background?: string;
    } | true;
    sharpen?: {
        amount: number;
    } | true;
    blur?: {
        amount: number;
    } | true;
    blackwhite?: {
        threshold: number;
    } | true;
    sepia?: {
        tone: number;
    } | true;
    pixelate?: {
        amount: number;
    } | true;
    oil_paint?: {
        amount: number;
    } | true;
    modulate?: {
        brightness?: number;
        hue?: number;
        saturation?: number;
    } | true;
    partial_pixelate?: {
        amount?: number;
        blur?: number;
        type?: EShapeType;
        objects?: [[number, number, number, number]];
    };
    partial_blur?: {
        amount: number;
        blur?: number;
        type?: EShapeType;
        objects?: [[number, number, number, number]];
    };
    collage?: {
        margin?: number;
        width?: number;
        height?: number;
        color?: string;
        fit?: EFitOptions;
        files: [string];
    };
    upscale?: {
        upscale?: boolean;
        noise?: ENoiseType;
        style?: EStyleType;
    } | true;
    ascii?: {
        background?: string;
        foreground?: string;
        colored?: boolean;
        size?: number;
        reverse?: boolean;
    } | true;
    quality?: {
        value: number;
    };
    security?: {
        policy: string;
        signature?: string;
    };
    output?: {
        format: string;
        colorspace?: string;
        strip?: boolean;
        quality?: number;
        page?: number;
        compress?: boolean;
        density?: number;
        background?: string;
        secure?: boolean;
        docinfo?: boolean;
        pageformat?: string;
        pageorientation?: string;
    };
    cache?: {
        cache?: boolean;
        expiry: number;
    };
    video_convert?: {
        aspect_mode: EVideoAccessMode;
        preset?: EVideoTypes;
        force?: boolean;
        title?: string;
        extname?: string;
        filename?: string;
        location?: EVideoLocations;
        path?: string;
        access?: EVideoAccess;
        container?: string;
        audio_bitrate?: number;
        upscale: boolean;
        video_bitrate?: number;
        audio_sample_rate?: number;
        audio_channels?: number;
        clip_length?: string;
        clip_offset?: string;
        width?: number;
        height?: number;
        two_pass?: boolean;
        fps?: number;
        keyframe_interval?: number;
        watermark_url?: string;
        watermark_top?: number;
        watermark_bottom?: number;
        watermark_right?: number;
        watermark_left?: number;
        watermark_width?: number;
        watermark_height?: number;
    };
}
/**
 * Creates filestack transform url.
 * Transform params can be provided in camelCase or snakeCase style
 *
 * @example
 * ```js
 * // camelCase
 * console.log(transform(session, {
 *    partialPixelate: {
 *      objects: [[10, 20, 200, 250], [275, 91, 500, 557]],
 *    },
 *  }, 'testfile'));
 * ```
 * result => https://cdn.filestackcontent.com/partial_pixelate=objects:[[10,20,200,250],[275,91,500,557]]/testfile
 *
 * ```js
 * // snakeCase
 * console.log(transform(session, {
 *    partial_pixelate: {
 *      objects: [[10, 20, 200, 250], [275, 91, 500, 557]],
 *    },
 *  }, 'testfile'));
 * ```
 * result => https://cdn.filestackcontent.com/partial_pixelate=objects:[[10,20,200,250],[275,91,500,557]]/testfile
 *
 * @private
 * @throws Error
 * @param options Transformation options
 */
export declare const transform: (session: Session, url: string, options?: TransformOptions) => string;
