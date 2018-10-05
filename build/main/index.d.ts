import { SecurityOptions, getSecurity } from './lib/api/security';
import { Client, ClientOptions } from './lib/client';
import { TransformOptions, EStyleType, EShapeType, ENoiseType, EFitOptions, EColorspaceType, EBlurMode, EAlignOptions, EAlignFacesOptions, ECropfacesType } from './lib/api/transform';
/**
 * Initialize client with given config
 *
 * @param apikey
 * @param options
 */
export declare const init: (apikey: string, options?: ClientOptions) => Client;
/**
 * filestack-js version. Interpolated at build time.
 */
export declare const version = "1.6.1";
export { TransformOptions, EStyleType, EShapeType, ENoiseType, EFitOptions, EColorspaceType, EBlurMode, EAlignOptions, EAlignFacesOptions, ECropfacesType, SecurityOptions, getSecurity };
